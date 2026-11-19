-- Museu do Pedro: contador de visitas (para o painel "O museu em números").
-- Cole TUDO no Supabase → SQL Editor → Run. Pode rodar mais de uma vez sem problema.

create table if not exists public.visitas (
  id bigint generated always as identity primary key,
  criado_em timestamptz not null default now(),
  visitante text not null
);
create index if not exists visitas_criado_idx on public.visitas (criado_em);
create index if not exists visitas_visitante_idx on public.visitas (visitante);
alter table public.visitas enable row level security;
-- o site não lê nem grava a tabela direto: só pelas funções abaixo
revoke all on public.visitas from anon, authenticated;

-- os números do painel
create or replace function public.museu_estatisticas()
returns json
language sql
stable
security definer
set search_path = public
as $$
  select json_build_object(
    'visitas',    (select count(*) from public.visitas),
    'visitantes', (select count(distinct v.visitante) from public.visitas v),
    'hoje',       (select count(*) from public.visitas v
                    where v.criado_em >= (date_trunc('day', now() at time zone 'America/Sao_Paulo') at time zone 'America/Sao_Paulo')),
    'desde',      (select min(v.criado_em) from public.visitas v)
  );
$$;

-- registrar uma visita (o site chama uma vez a cada 30 minutos por navegador) e devolver os números
create or replace function public.registrar_visita(p_visitante text)
returns json
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_visitante is null or p_visitante !~ '^[0-9a-f]{32}$' then
    raise exception 'visitante inválido' using errcode = '22023';
  end if;
  -- trava simples contra abuso: no máximo 600 visitas por minuto no museu todo
  if (select count(*) from public.visitas where criado_em > now() - interval '1 minute') < 600 then
    insert into public.visitas (visitante) values (p_visitante);
  end if;
  return public.museu_estatisticas();
end;
$$;

revoke all on function public.museu_estatisticas() from public;
revoke all on function public.registrar_visita(text) from public;
grant execute on function public.museu_estatisticas() to anon, authenticated;
grant execute on function public.registrar_visita(text) to anon, authenticated;

notify pgrst, 'reload schema';
