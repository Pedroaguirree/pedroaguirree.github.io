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
       - moldura:   "madeira" (escura), "vitoriana" (dourada), "preta", "branca", "dourada" ou "nenhuma"
  As obras são distribuídas sozinhas pelas paredes, na ordem desta lista,
  e a sala cresce automaticamente para caber todo mundo.
*/
window.MUSEU = {
  titulo: "Museu do Pedro",
  subtitulo: "Desenhos e pinturas",
  artista: "Pedro",

  // Tamanho do pixel: 1 = nítido, 3 = bem pixelado
  pixel: 1.25,

  obras: [
    { arquivo: "obra01.jpg", titulo: "Tucano", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 42, altura: 59.4, moldura: "madeira", descricao: "" }, // A2
    { arquivo: "obra02.jpg", titulo: "Sol na colina", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 42, altura: 59.4, moldura: "madeira", descricao: "" }, // A2
    { arquivo: "obra03.jpg", titulo: "Quatro rostos", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 42, altura: 59.4, moldura: "madeira", descricao: "" }, // A2
    { arquivo: "obra04.jpg", titulo: "Tucano no galho", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 42, altura: 59.4, moldura: "madeira", descricao: "" }, // A2
    { arquivo: "obra05.jpg", titulo: "Flores amarelas", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 29.7, moldura: "madeira", descricao: "" }, // A4
    { arquivo: "obra06.jpg", titulo: "Pôr do sol", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 29.7, moldura: "madeira", descricao: "" }, // A4
    { arquivo: "obra07.jpg", titulo: "Peixe com cigarro", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 29.7, altura: 21, moldura: "madeira", descricao: "" }, // A4
    { arquivo: "obra08.jpg", titulo: "Sardinhas", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 29.7, altura: 21, moldura: "madeira", descricao: "" }, // A4
    { arquivo: "obra09.jpg", titulo: "Retrato em vermelho e azul", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 29.7, moldura: "madeira", descricao: "" }, // A4
    { arquivo: "obra10.jpg", titulo: "Dois peixes", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 29.7, moldura: "madeira", descricao: "" }, // A4
    { arquivo: "obra11.jpg", titulo: "Azul", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 29.7, moldura: "madeira", descricao: "" }, // A4
    { arquivo: "obra12.jpg", titulo: "Galo", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 14.8, altura: 21, moldura: "madeira", descricao: "" }, // A5
    { arquivo: "obra13.jpg", titulo: "Casinha no campo", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 14.8, moldura: "madeira", descricao: "" }, // A5
    { arquivo: "obra14.jpg", titulo: "Composição em cores", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 14.8, moldura: "madeira", descricao: "" }, // A5
    { arquivo: "obra15.jpg", titulo: "Olhos", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 14.8, altura: 21, moldura: "madeira", descricao: "" }, // A5
    { arquivo: "obra16.jpg", titulo: "Lua e pirâmide", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 14.8, altura: 21, moldura: "madeira", descricao: "" }, // A5
    { arquivo: "obra17.jpg", titulo: "Pato", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 17.7, altura: 14.8, moldura: "madeira", descricao: "" }, // A5
    { arquivo: "obra18.jpg", titulo: "Cavalo", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 14.8, altura: 21, moldura: "madeira", descricao: "" }, // A5
    { arquivo: "obra19.jpg", titulo: "Montanhas", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 14.8, altura: 21, moldura: "madeira", descricao: "" }, // A5
    { arquivo: "obra20.jpg", titulo: "Rosto vermelho", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 14.8, moldura: "madeira", descricao: "" }, // A5
  ],

  // Obras grandes cobertas por cortina branca, com placa "Em breve".
  // Ficam no lado de trás da parede do meio. Tamanho em cm.
  em_breve: [
    { largura: 90,  altura: 120 },
    { largura: 120, altura: 90 },
    { largura: 90,  altura: 120 },
  ],
};
