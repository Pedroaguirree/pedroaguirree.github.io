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

## Bilhetes dos visitantes

Na entrada, à esquerda da parede "Museu do Pedro", fica uma mesinha com post-its: o visitante escreve um bilhete (até 280 caracteres), escolhe a cor, assina ou não, e ele fica colado na parede para todo mundo ver. Os bilhetes ficam guardados no Supabase (tabela `recados`); a ligação está em `recados` no `obras.js`.

Para tirar um bilhete: Supabase → Table Editor → `recados` → apague a linha, ou mude `visivel` para `false` para só esconder.

Quem escreve um bilhete pode editar ou remover o próprio bilhete depois: é só clicar nele no museu (vale no mesmo navegador/celular onde ele foi escrito). Isso precisa do código do arquivo `supabase-museu.sql` rodado uma vez no Supabase → SQL Editor. Sem ele, os bilhetes continuam funcionando, só sem esses botões.

Os bilhetes funcionam no site do GitHub; na página do museu dentro do Claude a mesinha não aparece.

## Reações com emoji

Quando alguém abre uma obra para ver de perto, aparecem seis emojis (❤️ 😍 🔥 👏 😮 🥹) com a contagem de cada um. Cada pessoa pode dar cada emoji uma vez por obra e tocar de novo para desfazer. As reações ficam no Supabase (tabela `reacoes`) e precisam do `supabase-museu.sql` rodado uma vez no SQL Editor. Para ver quantas reações cada obra tem, abra a tabela `reacoes` no Table Editor; para zerar, apague as linhas.

## Comentários

Na tela de ver uma obra de perto há o botão **💬 Comentários**: abre um painel ao lado com os comentários de todo mundo sobre aquela obra (os mais novos primeiro) e um campo para escrever, com nome opcional. Quem escreveu pode apagar o próprio comentário. Os comentários ficam no Supabase (tabela `comentarios`) e precisam do `comentarios.sql` rodado uma vez no SQL Editor.

Para moderar: Supabase → Table Editor → `comentarios` → apague a linha, ou mude `visivel` para `false` para só esconder.

## Ranking (estrelinhas)

As obras mais queridas ganham estrelinhas douradas bem pequenas logo acima da plaquinha (no mural, acima da obra). A pontuação é: cada reação vale 1 ponto e cada comentário vale 2. As 3 primeiras do ranking ganham até ★★★, da 4ª à 6ª até ★★ e da 7ª à 10ª ★, mas só se tiverem pontos suficientes (★★★ a partir de 6 pontos, ★★ a partir de 3). O ranking se atualiza sozinho.

## O museu em números

Na parede de entrada, entre os bilhetes e o pilar, há uma TV com: visitas no total, visitas hoje, obras expostas (e quantas estão a caminho), bilhetes, reações, comentários e a obra favorita dos visitantes. Os números sobem numa animação quando a pessoa se aproxima. Uma visita conta uma vez a cada 30 minutos por navegador. O contador de visitas precisa do `visitas.sql` rodado uma vez no Supabase → SQL Editor (sem ele, o painel mostra só os outros números). Para zerar as visitas, apague as linhas da tabela `visitas`.

## Artesanato

Na mesa à direita da parede de entrada ficam a caixa pintada (fechada, com os girassóis na tampa, o fecho e a alça) e os pratos de cerâmica em suportes. Cada peça pode ser vista de perto, recebe reações e comentários e entra no ranking como as obras. As fotos ficam na pasta `artesanato/` e a lista em `artesanato` no `obras.js` (título, técnica, ano, descrição e medidas). Para os pratos, use fotos de cima com o fundo recortado (PNG ou WebP transparente); a ordem dos pratos na lista define a posição na mesa.

## Vídeos do ateliê

No canto entre os dois tucanos há uma tela num pedestal. Ela passa os vídeos sem som enquanto alguém está por perto; ao clicar, o vídeo abre grande, com som e controles. Para colocar vídeos:

1. Coloque os arquivos na pasta `videos/` (MP4, de preferência até 1080p e até uns 50 MB cada).
2. Liste-os em `videos` no `obras.js`, na ordem em que devem passar:

```js
videos: [
  { arquivo: "timelapse-tucano.mp4", titulo: "Timelapse: Tucano na copa", descricao: "Do esboço ao final." },
],
```

Sem nenhum vídeo na lista, a tela mostra "Vídeos do ateliê · em breve".

## Música de fundo

Ao entrar no museu toca uma música calma, gerada pelo próprio site (nunca se repete igual). O visitante liga e desliga pelo botão de alto-falante no canto, pela tecla **M** ou no menu. Ela abaixa sozinha enquanto um vídeo está tocando. Para usar uma música sua, coloque o arquivo na pasta do museu e escreva o nome em `musica` no `obras.js` (ex.: `musica: "musica.mp3"`).

## Sala de Inspirações

Na parede do fundo, logo depois do mural, há uma porta de madeira com a placa dourada "Sala de Inspirações". Um tapete vermelho com borda dourada começa no salão, passa entre pedestais de latão com cordas de veludo vermelho e atravessa a sala inteira. A sala tem papel de parede verde com desenho clássico, madeira na parte de baixo das paredes e um lustre de velas. Dá para ir direto pelo menu (**Sala de Inspirações**).

No fundo da sala, onde o tapete termina, fica a homenagem à Rosinha: o retrato dela em moldura dourada, com céu azul de nuvens, e logo à frente uma vitrine de vidro num pedestal com o bonequinho de crochê dela, em tamanho real (cerca de 10 cm). O boneco é feito com as fotos de verdade e muda de foto conforme o lado de onde a pessoa olha (frente, três-quartos e perfil). Clicando no retrato ou na vitrine, abre para ver de perto, com reações e comentários. No canto direito, encostada na parede, está a bicicleta Caloi aro 29, montada peça por peça como a de verdade: quadro prata polido com vermelho e o logo CALOI, suspensão RockShox, transmissão Shimano Deore 1x12 (coroa, cassete de 10 a 51 dentes, corrente elo por elo e câmbio traseiro), freios a disco e pneus Schwalbe Racing Ralph e Racing Ray. Ela tem uma plaquinha.

Na parede em cima da bicicleta há dois varais de barbante com polaroides dos pedais, presas com pregadores de madeira, com a legenda escrita à mão embaixo de cada foto e um coraçãozinho de crochê; ao lado fica a plaquinha da bicicleta. Clicando numa polaroide, a foto abre grande. As fotos ficam em `inspiracoes/pedal-1.jpg` até `pedal-8.jpg` e as legendas em `varal` → `fotos` no `obras.js`; os quatro primeiros vão no varal de cima e os outros no de baixo.

No canto esquerdo do fundo fica o cavalete de madeira com uma tela em branco e, no chão, o pano e as paletas de tinta (feitos com a foto de verdade). Na parede da esquerda está a **Trilha sonora**: sete discos de vinil pendurados com as capas dos álbuns. Clicando num disco, a capa abre grande, o vinil desliza para fora e começa a girar, e toca um trecho de 30 segundos da música (a música de fundo do museu abaixa sozinha). As capas e os trechos vêm do Apple Music, direto da internet; por isso eles aparecem no site do GitHub, mas não na página do museu dentro do Claude. Cada disco está em `discos` → `lista` no `obras.js`; para trocar ou acrescentar uma música é preciso o endereço da capa e do trecho, então é mais fácil pedir ao Claude.

Na parede da direita, ao lado da bicicleta, fica o **expositor de vidro**: uma caixa de nogueira presa na parede, com filete de latão em volta do vidro, fundo de linho iluminado por uma fita de LED escondida no alto, e os desenhos presos com alfinetes de latão ou fita crepe, um pouco afastados do fundo (com sombrinha). O desenho maior (o copo com fundo rosa, A2) fica à esquerda e, embaixo dele, lado a lado, as duas pinturas da Casa dos Patos de Campos do Jordão: a da esquerda é do Pedro e a da direita é da Juliana. À direita, num grupinho meio solto, ficam o girassol e o besouro em cima, as duas telinhas das árvores do parque da cidade lado a lado no meio (a do céu azul é do Pedro, a verde é da Juliana) e o ovo com tucano e o gato na lua embaixo. No meio fica a foto do Pedro com a Juliana numa moldura dourada com passe-partout branco e, embaixo, uma placa de latão gravada com a frase. O gato na lua, a tela verde e a Casa dos Patos da direita levam o nome da Juliana como artista (`artista: "Juliana"`). Os desenhos do expositor são obras do museu: contam em "obras expostas", aparecem no menu, recebem reações, comentários e estrelinhas. Clicando na placa, a frase abre grande para ler. Os arquivos ficam em `inspiracoes/desenho-*.jpg` e a lista em `expositor` → `desenhos` no `obras.js` (título, técnica, `largura` e `altura` em cm e `formato`); o maior vai para a esquerda, os outros entram na grade na ordem da lista, e os que têm `lado: "meio"` ficam entre a foto e a placa (`tela: true` dá a espessura de tela esticada). Com `lado: "esquerda"` a peça vai para a coluna do copo, e `linha` escolhe a fileira (0 em cima, 1 embaixo); peças na mesma linha ficam lado a lado. Com `solto: true` as peças ficam um pouco fora do alinhamento, como se tivessem sido presas à mão: em cada desenho, `giro` é a inclinação em graus, `desloc: [direita, cima]` empurra a peça alguns centímetros e `fixacao` escolhe entre `"alfinete"` e `"fita"` (fita crepe nos cantos). A foto e a placa ficam retas. Na lateral de madeira do expositor, do lado da porta, há um segredo quase escondido: a frase escrita à mão e um coração entalhado com as iniciais (em `segredo` no `obras.js`). A foto vai em `foto` (por exemplo `"casal.jpg"`, na pasta `inspiracoes/`) e o título dela em `titulo_foto`; se `foto` ficar vazio, a moldura mostra "foto em breve". A posição na parede fica em `centro` (metros a partir da parede do fundo).

Os arquivos ficam na pasta `inspiracoes/` e a lista em `inspiracoes` no `obras.js` (textos das plaquinhas e descrições). As outras peças da sala (retrato e vitrine da Rosinha, polaroides, foto do casal) não entram na contagem de obras nem no ranking de estrelinhas. Para esconder a sala (a parede volta a ficar inteira), use `inspiracoes: false`. As obras da parede do fundo sempre ficam à direita da porta, sem cobri-la.

## Mensagem na entrada

Em frente à parede "Museu do Pedro" fica um pilar de nogueira com painéis, filetes de latão e uma mesinha de leitura inclinada, iluminada por uma luminária de latão. Em cima dela está a carta escrita à mão, presa por cantoneiras de latão: a foto fica em `carta` no `obras.js` (por exemplo `"carta.jpg"`, na pasta do museu). Clicando na carta, ela abre grande com a transcrição ao lado, para quem não entender a letra: o texto fica em `mensagem` (cada linha vira um parágrafo) e o nome do fim em `assinatura`. Sem `carta`, a mensagem aparece escrita na folha.

## Mural

As obras com `parede: "mural"` formam o mural ao lado da mesinha do caderno. Cada uma tem `pos: [x, y]` em centímetros (x a partir do começo do mural, y = altura do centro) e, se quiser, `giro` (inclinação em graus). `moldura: "fita"` deixa a folha presa com fita. A frase escrita na parede fica em `mural` no `obras.js`.

## Parede do meio

Uma obra com `parede: "meio"` fica no lado de trás da parede do meio, junto das obras cobertas.

## Obras "Em breve"

No fim do `obras.js` há a lista `em_breve` (cada uma com `placa`, por exemplo "Em breve" ou "Em construção"): quadros grandes cobertos por uma cortina branca, com a placa "Em breve", no lado de trás da parede do meio. Para revelar uma obra, apague uma linha de `em_breve` e adicione a obra normalmente na lista `obras`.

Dica: use fotos recortadas só na obra (sem a parede em volta), retas e bem iluminadas. Até uns 2000 px no lado maior já fica ótimo.

## Carregamento e desempenho

Ao abrir o site, o museu só aparece depois que tudo está pronto: as obras, a carta da entrada, os bilhetes, as reações, as capas dos discos, as polaroides e o primeiro quadro do vídeo (cada um com um tempo limite, para uma conexão lenta não travar a entrada). Antes de liberar a visita, todos os materiais, luzes, texturas e formas já vão para a placa de vídeo, nos dois cômodos e na porta entre eles, para não dar engasgo ao andar. Enquanto isso, a tela de carregamento mostra frases que trocam sozinhas ("Pendurando os quadros…", "Tirando a poeira das molduras…", "Calibrando os pneus da Caloi…"). A lista fica em `LOAD.frases` no `index.html` e dá para trocar ou acrescentar frases à vontade.

Para ficar leve, as peças que usam o mesmo material (molduras, bordas das telas, plaquinhas, paredes) são juntadas em poucas peças grandes, as sombras e os halos de luz atrás das obras são desenhados de uma vez, e o que está no outro cômodo (inclusive o vídeo, a mesa dos bilhetes e os bilhetes) fica escondido enquanto não dá para ver. A imagem é a mesma; o computador ou o celular só tem bem menos trabalho: no salão, cada quadro da animação pede cerca de metade dos desenhos de antes e, na Sala de Inspirações, até dois terços a menos.

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

- **Computador:** WASD para andar (Shift para correr), mouse para olhar, **E** ou clique para ver uma obra de perto, **M** para ligar/desligar a música, **Esc** para o menu.
- **Vendo de perto:** botões + e − ao lado (ou a rodinha do mouse) para dar zoom, arraste para mover, e clique no quadro para voltar ao museu.
- **Celular:** use o círculo no canto esquerdo para andar e arraste a tela para olhar. Perto de uma obra aparece o botão **VER**. Vendo de perto, dá para usar os botões ou fazer pinça com dois dedos para dar zoom, e tocar no quadro para voltar.

Feito com [three.js](https://threejs.org) (licença MIT, em `lib/`).
