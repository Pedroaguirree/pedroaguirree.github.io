# Museu do Pedro

Um museu 3D em primeira pessoa, com visual pixelado, para visitar meus desenhos e pinturas em tamanho real direto no navegador.

## Como adicionar uma obra

1. Coloque a foto na pasta `obras/` (por exemplo `obras/girassois.jpg`).
2. Abra `obras.js` e adicione (ou edite) uma linha:

```js
{ arquivo: "girassois.jpg", titulo: "Girassóis", ano: "2024", tecnica: "Óleo sobre tela",
  largura: 80, altura: 100, moldura: "madeira", descricao: "Texto opcional." },
```

- `largura` e `altura` são o tamanho **real em cm**, sem moldura. Se você deixar `altura: 0`, ela é calculada pela proporção da foto.
- `moldura`: `"madeira"` (madeira escura), `"vitoriana"` (dourada e ornamentada), `"preta"`, `"branca"`, `"dourada"` ou `"nenhuma"`.
- As obras vão para as paredes na ordem da lista, e a sala cresce sozinha para caber todas.

## Obras "Em breve"

No fim do `obras.js` há a lista `em_breve`: quadros grandes cobertos por uma cortina branca, com a placa "Em breve", no lado de trás da parede do meio. Para revelar uma obra, apague uma linha de `em_breve` e adicione a obra normalmente na lista `obras`.

Dica: use fotos recortadas só na obra (sem a parede em volta), retas e bem iluminadas. Até uns 2000 px no lado maior já fica ótimo.

## Como publicar no GitHub Pages (grátis)

1. Crie uma conta em github.com e clique em **New repository** (por exemplo `museu`, deixe **Public**).
2. Na página do repositório: **Add file → Upload files** e arraste tudo desta pasta (`index.html`, `obras.js`, `lib/`, `obras/`, `README.md`). Clique em **Commit changes**.
3. Vá em **Settings → Pages**. Em *Branch*, escolha `main` e a pasta `/ (root)`, e clique em **Save**.
4. Em 1 ou 2 minutos o museu fica online em `https://SEU-USUARIO.github.io/museu/`.

**No ar:** https://pedroaguirree.github.io/museu/

Para atualizar depois, basta subir as novas fotos e o `obras.js` editado da mesma forma.

## Testar no computador

Por causa das regras de segurança do navegador, abrir o `index.html` com dois cliques não carrega as fotos. Rode um servidor simples dentro da pasta:

```
python3 -m http.server
```

e acesse `http://localhost:8000`.

## Controles

- **Computador:** WASD para andar (Shift para correr), mouse para olhar, **E** ou clique para ver uma obra de perto, **Esc** para o menu.
- **Vendo de perto:** botões + e − ao lado (ou a rodinha do mouse) para dar zoom, arraste para mover, e clique no quadro para voltar ao museu.
- **Celular:** arraste do lado esquerdo para andar, do lado direito para olhar, e toque numa obra para vê-la de perto.

Feito com [three.js](https://threejs.org) (licença MIT, em `lib/`).
