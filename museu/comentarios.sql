-- Museu do Pedro: comentários nas obras.
-- Cole TUDO no Supabase → SQL Editor → Run. Pode rodar mais de uma vez sem problema.

create table if not exists public.comentarios (
  id bigint generated always as identity primary key,
  criado_em timestamptz not null default now(),
  obra text not null,
  texto text not null,
  nome text,
  visivel boolean not null default true,
  dono_hash text
);
create index if not exists comentarios_obra_idx on public.comentarios (obra, criado_em desc);
alter table public.comentarios enable row level security;
-- o site não lê nem grava a tabela direto: só pelas funções abaixo
revoke all on public.comentarios from anon, authenticated;

-- publicar um comentário
create or replace function public.comentar(p_obra text, p_texto text, p_nome text, p_dono text)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  t text := btrim(coalesce(p_texto, ''));
  n text := nullif(btrim(coalesce(p_nome, '')), '');
  r public.comentarios;
begin
  if p_obra is null or p_obra !~ '^[A-Za-z0-9._ -]{1,80}$' then
    raise exception 'obra inválida' using errcode = '22023';
  end if;
  if length(t) < 1 or length(t) > 500 then
    raise exception 'o comentário precisa ter de 1 a 500 caracteres' using errcode = '22023';
  end if;
  if n is not null and length(n) > 40 then
    raise exception 'nome muito longo' using errcode = '22023';
  end if;
  if p_dono is null or p_dono !~ '^[0-9a-f]{64}$' then
    raise exception 'chave inválida' using errcode = '22023';
  end if;
  if (select count(*) from public.comentarios where criado_em > now() - interval '1 minute') > 60 then
    raise exception 'muitos comentários agora, tente daqui a pouco' using errcode = '54000';
  end if;
  insert into public.comentarios (obra, texto, nome, dono_hash) values (p_obra, t, n, p_dono) returning * into r;
  return json_build_object('id', r.id, 'criado_em', r.criado_em, 'texto', r.texto, 'nome', r.nome);
end;
$$;

-- os comentários de uma obra (os mais novos primeiro)
create or replace function public.comentarios_de(p_obra text)
returns table (id bigint, criado_em timestamptz, texto text, nome text)
language sql
stable
security definer
set search_path = public
as $$
  select c.id, c.criado_em, c.texto, c.nome
    from public.comentarios c
   where c.obra = p_obra and c.visivel
   order by c.criado_em desc
   limit 300;
$$;

-- quantos comentários cada obra tem
create or replace function public.comentarios_resumo()
returns table (obra text, total bigint)
language sql
stable
security definer
set search_path = public
as $$
  select c.obra, count(*) from public.comentarios c where c.visivel group by c.obra;
$$;

-- apagar o próprio comentário (só com a chave de quem escreveu)
create or replace function public.apagar_comentario(p_id text, p_token text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_token is null or length(p_token) < 32 then
    return false;
  end if;
  delete from public.comentarios c
   where c.id::text = p_id
     and c.dono_hash = encode(sha256(convert_to(p_token, 'UTF8')), 'hex');
  return found;
end;
$$;

revoke all on function public.comentar(text, text, text, text) from public;
revoke all on function public.comentarios_de(text) from public;
revoke all on function public.comentarios_resumo() from public;
revoke all on function public.apagar_comentario(text, text) from public;
grant execute on function public.comentar(text, text, text, text) to anon, authenticated;
grant execute on function public.comentarios_de(text) to anon, authenticated;
grant execute on function public.comentarios_resumo() to anon, authenticated;
grant execute on function public.apagar_comentario(text, text) to anon, authenticated;

notify pgrst, 'reload schema';
