/*
  ACERVO DO MUSEU
  ----------------
  Para adicionar uma obra:
    1. Coloque a foto na pasta "obras/" (ex.: obras/girassois.jpg)
    2. Copie um bloco { ... } abaixo e preencha:
       - arquivo:   nome do arquivo dentro de "obras/"  (deixe "" para um quadro de exemplo)
       - titulo / ano / tecnica / descricao: aparecem na plaquinha e na tela de detalhe
       - largura / altura: tamanho REAL em centímetros (sem moldura)
         (se souber só a largura, deixe altura: 0 que ela é calculada pela proporção da foto)
       - moldura:   "clara" (carvalho claro com passe-partout branco), "nogueira_passe" (madeira escura com passe-partout creme),
                    "preta_passe" (preta fina com passe-partout), "mel" (madeira cor de mel), "madeira" (madeira escura),
                    "caixa" (moldura flutuante para tela), "pinho" (madeira clara simples),
                    "vitoriana" (dourada) ou "nenhuma"
       - verso (opcional): foto do verso -> aparece o botão "Ver verso", que vira o quadro
  As obras são distribuídas sozinhas pelas paredes, na ordem desta lista,
  e a sala cresce automaticamente para caber todo mundo.
*/
window.MUSEU = {
  titulo: "Museu do Pedro",
  subtitulo: "Desenhos e pinturas",
  artista: "Pedro",

  obras: [
    { arquivo: "obra01.jpg", titulo: "Tucano", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 42, altura: 59.4, moldura: "clara", descricao: "" }, // A2
    { arquivo: "obra02.jpg", titulo: "Sol na colina", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 42, altura: 59.4, moldura: "nogueira_passe", descricao: "" }, // A2
    { arquivo: "obra03.jpg", titulo: "Quatro rostos", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 42, altura: 59.4, moldura: "preta_passe", descricao: "" }, // A2
    { arquivo: "obra04.jpg", titulo: "Tucano no galho", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 42, altura: 59.4, moldura: "clara", descricao: "" }, // A2
    { arquivo: "obra23.jpg", titulo: "Tucano e bromélia", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 42, altura: 59.4, moldura: "clara", descricao: "" }, // A2
    { arquivo: "obra24.jpg", titulo: "Árvore na colina", ano: "", tecnica: "Acrílica sobre tela", largura: 40, altura: 0, moldura: "caixa", descricao: "" }, // tela 40 de largura, altura pela foto
    { arquivo: "obra25.jpg", titulo: "Gato de rabo comprido", ano: "", tecnica: "Acrílica sobre tela", largura: 30, altura: 30, moldura: "caixa", descricao: "" }, // tela 30x30
    { arquivo: "obra26.jpg", titulo: "Lagoa", ano: "", tecnica: "Acrílica sobre tela", largura: 16, altura: 16, moldura: "caixa", descricao: "" }, // tela 16x16
    { arquivo: "obra27.jpg", titulo: "Pergunta", ano: "", tecnica: "Pastel oleoso e caneta sobre papel", largura: 42, altura: 59.4, moldura: "nogueira_passe", descricao: "" }, // A2
    { arquivo: "obra28.jpg", titulo: "Síntese", ano: "2026", tecnica: "Acrílica sobre papel, moldura de pinho", largura: 10, altura: 15, moldura: "pinho",
      verso: "obra28_verso.jpg",
      descricao: "Antes de virar quadro, cada cor passou por aqui. Não são restos, são memórias. Esta é a obra que se pintou sozinha, enquanto eu pintava as outras. É a síntese de tudo que um dia eu pintei." }, // 10x15, com verso
    { arquivo: "obra05.jpg", titulo: "Flores amarelas", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 29.7, moldura: "clara", descricao: "" }, // A4
    { arquivo: "obra06.jpg", titulo: "Pôr do sol", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 29.7, moldura: "mel", descricao: "" }, // A4
    { arquivo: "obra07.jpg", titulo: "Peixe com cigarro", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 29.7, altura: 21, moldura: "nogueira_passe", descricao: "" }, // A4
    { arquivo: "obra08.jpg", titulo: "Sardinhas", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 29.7, altura: 21, moldura: "clara", descricao: "" }, // A4
    { arquivo: "obra09.jpg", titulo: "Retrato em vermelho e azul", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 29.7, moldura: "preta_passe", descricao: "" }, // A4
    { arquivo: "obra10.jpg", titulo: "Dois peixes", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 29.7, moldura: "mel", descricao: "" }, // A4
    { arquivo: "obra11.jpg", titulo: "Azul", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 29.7, moldura: "nogueira_passe", descricao: "" }, // A4
    { arquivo: "obra21.jpg", titulo: "Besouro e joaninha", ano: "", tecnica: "Pastel oleoso sobre página de livro", largura: 14, altura: 23, moldura: "preta_passe", descricao: "" }, // folha de livro
    { arquivo: "obra12.jpg", titulo: "Galo", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 14.8, altura: 21, moldura: "mel", descricao: "" }, // A5
    { arquivo: "obra13.jpg", titulo: "Casinha no campo", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 14.8, moldura: "nogueira_passe", descricao: "" }, // A5
    { arquivo: "obra14.jpg", titulo: "Composição em cores", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 14.8, moldura: "preta_passe", descricao: "" }, // A5
    { arquivo: "obra15.jpg", titulo: "Olhos", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 14.8, altura: 21, moldura: "madeira", descricao: "" }, // A5
    { arquivo: "obra16.jpg", titulo: "Lua e pirâmide", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 14.8, altura: 21, moldura: "mel", descricao: "" }, // A5
    { arquivo: "obra17.jpg", titulo: "Pato", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 17.7, altura: 14.8, moldura: "nogueira_passe", descricao: "" }, // A5
    { arquivo: "obra18.jpg", titulo: "Cavalo", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 14.8, altura: 21, moldura: "preta_passe", descricao: "" }, // A5
    { arquivo: "obra19.jpg", titulo: "Montanhas", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 14.8, altura: 21, moldura: "mel", descricao: "" }, // A5
    { arquivo: "obra20.jpg", titulo: "Rosto vermelho", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 14.8, moldura: "madeira", descricao: "" }, // A5
    { arquivo: "obra22.jpg", titulo: "Rostos no céu", ano: "", tecnica: "Aquarela e nanquim sobre papel (marcador de página)", largura: 5, altura: 15, moldura: "preta_passe", descricao: "" }, // marcador ~5x15
  ],

  // Caderno criativo na mesinha do canto (arquivos na pasta "caderno/")
  caderno: {
    capa: "capa-v2.jpg",
    guarda: "guarda-v2.jpg",
    contracapa: "contracapa-v2.jpg",
    paginas: ["pag01.jpg","pag02.jpg","pag03.jpg","pag04.jpg","pag05.jpg","pag06.jpg","pag07.jpg",
              "pag08.jpg","pag09.jpg","pag10.jpg","pag11.jpg","pag12.jpg","pag13.jpg","pag14.jpg"],
  },

  // Mensagem na folha sobre o pilar, em frente à parede "Museu do Pedro".
  // Cada linha vira um parágrafo.
  mensagem: `Aqui estão alguns desenhos/pinturas que fiz ao longo desse ano de 2026, tem sido um processo criativo muito interessante de descobrir, agradeço a você que tirou um tempo para acessar esse "museu" e entrar um pouco dentro da minha cabeça.
A maioria das obras aqui eu nunca postei...
Fique a vontade para explorar como quiser e deixar seu feedback nas obras que mais gostou :)`,

  // Obras grandes cobertas por cortina branca, com placa "Em breve".
  // Ficam no lado de trás da parede do meio. Tamanho em cm.
  em_breve: [
    { largura: 90,  altura: 120 },
    { largura: 120, altura: 90 },
    { largura: 90,  altura: 120 },
  ],
};
