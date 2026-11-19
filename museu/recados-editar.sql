-- Museu do Pedro: deixa cada visitante editar ou remover o PRÓPRIO bilhete.
-- Cole tudo no Supabase → SQL Editor → Run. Pode rodar mais de uma vez sem problema.

-- 1) Cada bilhete novo guarda a "impressão digital" (hash) de uma chave secreta
--    que fica só no navegador de quem escreveu.
alter table public.recados add column if not exists dono_hash text;

-- 2) Editar: só funciona com a chave certa.
create or replace function public.editar_recado(p_id text, p_token text, p_texto text, p_nome text, p_cor text)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  r public.recados;
  t text := btrim(coalesce(p_texto, ''));
  n text := nullif(btrim(coalesce(p_nome, '')), '');
begin
  if p_token is null or length(p_token) < 32 then
    raise exception 'chave inválida' using errcode = '42501';
  end if;
  if length(t) < 1 or length(t) > 280 then
    raise exception 'o bilhete precisa ter de 1 a 280 caracteres' using errcode = '22023';
  end if;
  if n is not null and length(n) > 40 then
    raise exception 'nome muito longo' using errcode = '22023';
  end if;
  if p_cor not in ('amarelo', 'rosa', 'azul', 'verde', 'laranja', 'lilas') then
    raise exception 'cor inválida' using errcode = '22023';
  end if;

  update public.recados
     set texto = t, nome = n, cor = p_cor
   where id::text = p_id
     and dono_hash is not null
     and dono_hash = encode(sha256(convert_to(p_token, 'UTF8')), 'hex')
  returning * into r;

  if not found then
    raise exception 'bilhete não encontrado ou chave errada' using errcode = '42501';
  end if;
  return json_build_object('id', r.id, 'criado_em', r.criado_em, 'texto', r.texto, 'nome', r.nome, 'cor', r.cor);
end;
$$;

-- 3) Remover: também só com a chave certa.
create or replace function public.apagar_recado(p_id text, p_token text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_token is null or length(p_token) < 32 then
    return false;
  end if;
  delete from public.recados
   where id::text = p_id
     and dono_hash is not null
     and dono_hash = encode(sha256(convert_to(p_token, 'UTF8')), 'hex');
  return found;
end;
$$;

revoke all on function public.editar_recado(text, text, text, text, text) from public;
revoke all on function public.apagar_recado(text, text) from public;
grant execute on function public.editar_recado(text, text, text, text, text) to anon, authenticated;
grant execute on function public.apagar_recado(text, text) to anon, authenticated;

-- 4) Avisa a API que há coisas novas.
notify pgrst, 'reload schema';
