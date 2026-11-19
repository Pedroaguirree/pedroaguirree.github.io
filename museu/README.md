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
- `moldura`: `"clara"` (carvalho claro com passe-partout branco), `"nogueira_passe"` (madeira escura com passe-partout creme), `"preta_passe"` (preta fina com passe-partout), `"mel"` (madeira cor de mel), `"madeira"` (madeira escura), `"caixa"` (moldura flutuante, para telas), `"vitoriana"` (dourada) ou `"nenhuma"`.
- As obras vão para as paredes na ordem da lista, e a sala cresce sozinha para caber todas.

## Verso de uma obra

Se uma obra tem algo escrito atrás, coloque `verso: "foto-do-verso.jpg"` na linha dela. Na tela de ver de perto aparece o botão **Ver verso**, que vira o quadro.

## Caderno criativo

O caderno fica na mesinha do canto; quem clica nele vê a capa abrir e folheia as páginas. Os arquivos ficam na pasta `caderno/` e a lista está em `caderno` no `obras.js`:

- `capa`, `guarda` (parte de dentro da capa) e `contracapa`
- `paginas`: as páginas na ordem. Páginas duplas (um desenho que continua na página seguinte) ficam lado a lado quando a primeira tem número par.

## Mensagem na entrada

O texto da folha sobre o pilar, em frente à parede "Museu do Pedro", fica em `mensagem` no `obras.js`. Cada linha vira um parágrafo.

## Mural

As obras com `parede: "mural"` formam o mural ao lado da mesinha do caderno. Cada uma tem `pos: [x, y]` em centímetros (x a partir do começo do mural, y = altura do centro) e, se quiser, `giro` (inclinação em graus). `moldura: "fita"` deixa a folha presa com fita. A frase escrita na parede fica em `mural` no `obras.js`.

## Parede do meio

Uma obra com `parede: "meio"` fica no lado de trás da parede do meio, junto das obras cobertas.

## Obras "Em breve"

No fim do `obras.js` há a lista `em_breve` (cada uma com `placa`, por exemplo "Em breve" ou "Em construção"): quadros grandes cobertos por uma cortina branca, com a placa "Em breve", no lado de trás da parede do meio. Para revelar uma obra, apague uma linha de `em_breve` e adicione a obra normalmente na lista `obras`.

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
- **Celular:** use o círculo no canto esquerdo para andar e arraste a tela para olhar. Perto de uma obra aparece o botão **VER**. Vendo de perto, dá para usar os botões ou fazer pinça com dois dedos para dar zoom, e tocar no quadro para voltar.

Feito com [three.js](https://threejs.org) (licença MIT, em `lib/`).
