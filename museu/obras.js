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
                    "caixa" (moldura flutuante para tela), "pinho" (madeira clara simples), "fina" (preta fina),
                    "fita" (sem moldura, presa com fita),
                    "vitoriana" (dourada) ou "nenhuma"
       - verso (opcional): foto do verso -> aparece o botão "Ver verso", que vira o quadro
  As obras são distribuídas sozinhas pelas paredes, na ordem desta lista,
  e a sala cresce automaticamente para caber todo mundo.
*/
window.MUSEU = {
  titulo: "Museu do Pedro",
  subtitulo: "Desenhos e pinturas",
  artista: "Pedro",

  // Música de fundo: deixe "" para a música calminha gerada pelo próprio museu,
  // ou coloque o nome de um arquivo seu (ex.: "musica.mp3") na pasta do museu.
  musica: "",

  // Vídeos do ateliê: a tela fica no canto entre os dois tucanos.
  // Coloque os arquivos na pasta "videos/" (MP4) e liste aqui, na ordem em que devem passar.
  videos: [
    // { arquivo: "timelapse-tucano.mp4", titulo: "Timelapse: Tucano na copa", descricao: "Do esboço ao final em 2 minutos." },
  ],

  obras: [
    { arquivo: "obra01.jpg", titulo: "Tucano ao sol", ano: "18/06/2026", tecnica: "Pastel oleoso sobre papel", largura: 42, altura: 59.4, moldura: "clara", descricao: "" },
    { arquivo: "obra02.jpg", titulo: "Sol na colina", ano: "25/07/2026", tecnica: "Pastel oleoso sobre papel", largura: 42, altura: 59.4, moldura: "nogueira_passe", descricao: "Feito com referencia de uma pintura menor" },
    { arquivo: "obra03.jpg", titulo: "As 4 personalidades", ano: "22/07/2026", tecnica: "Pastel oleoso sobre papel", largura: 42, altura: 59.4, moldura: "preta_passe", descricao: "Autoral" },
    { arquivo: "obra04.jpg", titulo: "Tucano na copa", ano: "24/07/2026", tecnica: "Pastel oleoso sobre papel", largura: 42, altura: 59.4, moldura: "clara", descricao: "" },
    { arquivo: "obra23.jpg", titulo: "Tucano e bromélia", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 42, altura: 59.4, moldura: "clara", descricao: "Não finalizado" },
    { arquivo: "obra24.jpg", titulo: "Árvore ludica", ano: "15/10/2026", tecnica: "Acrílica sobre tela", largura: 40, altura: 0, moldura: "caixa", descricao: "Primeiro teste com acrílica" },
    { arquivo: "obra25.jpg", titulo: "Gato de rabo comprido", ano: "", tecnica: "Acrílica sobre tela", largura: 30, altura: 30, moldura: "caixa", descricao: "Referencia Pinterest" },
    { arquivo: "obra26.jpg", titulo: "DAE", ano: "19/10/2026", tecnica: "Acrílica sobre tela", largura: 16, altura: 16, moldura: "caixa", descricao: "Pintura espatulada" },
    { arquivo: "obra27.jpg", titulo: "Escalada da montanha", ano: "", tecnica: "Pastel oleoso e caneta sobre papel", largura: 42, altura: 59.4, moldura: "nogueira_passe", descricao: "Abstrato" },
    { arquivo: "obra28.jpg", titulo: "Síntese", ano: "2026", tecnica: "Acrílica sobre papel, moldura de pinho", largura: 10, altura: 15, moldura: "pinho", verso: "obra28_verso.jpg", descricao: "Antes de virar quadro, cada cor passou por aqui. Não são restos, são memórias. Esta é a obra que se pintou sozinha, enquanto eu pintava as outras. É a síntese de tudo que um dia eu pintei." },
    { arquivo: "obra05.jpg", titulo: "Flores Amarelas ao Entardecer", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 29.7, moldura: "clara", descricao: "" },
    { arquivo: "obra06.jpg", titulo: "Pôr do sol", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 29.7, moldura: "mel", descricao: "" },
    { arquivo: "obra07.jpg", titulo: "Peixe com cigarro", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 29.7, altura: 21, moldura: "nogueira_passe", descricao: "" },
    { arquivo: "obra08.jpg", titulo: "Sardinhas Fundo Rosa", ano: "11/06/2026", tecnica: "Pastel oleoso sobre papel", largura: 29.7, altura: 21, moldura: "clara", descricao: "" },
    { arquivo: "obra09.jpg", titulo: "Autorretrato preguiçoso", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 29.7, moldura: "preta_passe", descricao: "Feito em 1 minuto" },
    { arquivo: "obra10.jpg", titulo: "Dois Peixes Fundo Rosa", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 29.7, moldura: "mel", descricao: "" },
    { arquivo: "obra11.jpg", titulo: "Blue", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 29.7, moldura: "nogueira_passe", descricao: "" },
    { arquivo: "obra21.jpg", titulo: "Besouro e joaninha", ano: "", tecnica: "Pastel oleoso sobre página de livro", largura: 14, altura: 23, moldura: "preta_passe", descricao: "Feitos na folha de \"O universo Elegante\" sobre a teoria das supercordas, dimensões e a busca da teoria definitiva de Brian Greene, sobre busca do ser humano pelo conhecimento e sua curiosidade por temas complexos." },
    { arquivo: "obra12.jpg", titulo: "Galo", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 14.8, altura: 21, moldura: "mel", descricao: "" },
    { arquivo: "obra13.jpg", titulo: "Casinha dos patos - Campos do Jordão", ano: "06/07/2026", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 14.8, moldura: "nogueira_passe", descricao: "Essa tem um significado especial pra mim." },
    { arquivo: "obra14.jpg", titulo: "Abstração em cores", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 14.8, moldura: "preta_passe", descricao: "O que veio na mente." },
    { arquivo: "obra15.jpg", titulo: "Olhos", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 14.8, altura: 21, moldura: "madeira", descricao: "" },
    { arquivo: "obra16.jpg", titulo: "Lua e pirâmide", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 14.8, altura: 21, moldura: "mel", descricao: "" },
    { arquivo: "obra17.jpg", titulo: "Pato", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 17.7, altura: 14.8, moldura: "nogueira_passe", descricao: "Referencia do Pinterest, muito importante pra mim, minha primeira vez usando giz pastel." },
    { arquivo: "obra18.jpg", titulo: "Cavalo Bebado", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 14.8, altura: 21, moldura: "preta_passe", descricao: "" },
    { arquivo: "obra19.jpg", titulo: "Horizonte", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 14.8, altura: 21, moldura: "mel", descricao: "" },
    { arquivo: "obra20.jpg", titulo: "Perfil", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 14.8, moldura: "madeira", descricao: "Pedro's Art" },
    { arquivo: "obra22.jpg", titulo: "Rostos ao céu", ano: "", tecnica: "Aquarela e nanquim sobre papel (marcador de página)", largura: 5, altura: 15, moldura: "preta_passe", descricao: "" },
    { arquivo: "obra29.jpg", titulo: "Deserto ensolarado", ano: "", tecnica: "Caneta sobre papel (caderno criativo)", largura: 9, altura: 14, moldura: "clara", parede: "meio", descricao: "" },
    // Mural ao lado da mesinha: pos = [centímetros a partir do começo do mural, altura do centro em cm]; giro = inclinação em graus
    { arquivo: "obra35.jpg", titulo: "Céu em degradê", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 29.7, moldura: "clara", parede: "mural", pos: [40, 158], descricao: "" },
    { arquivo: "obra30.jpg", titulo: "Abelha e flor", ano: "", tecnica: "Aquarela e nanquim sobre papel", largura: 10.2, altura: 14, moldura: "fita", parede: "mural", pos: [80, 183], giro: -3, descricao: "" },
    { arquivo: "obra32.jpg", titulo: "Três árvores", ano: "", tecnica: "Aquarela e nanquim sobre papel", largura: 10, altura: 14, moldura: "fita", parede: "mural", pos: [83, 145], giro: 2.5, descricao: "" },
    { arquivo: "obra33.jpg", titulo: "Um sonho que tive (I)", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 29.7, altura: 21, moldura: "fina", parede: "mural", pos: [128, 180], descricao: "" },
    { arquivo: "obra34.jpg", titulo: "Um sonho que tive (II)", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 29.7, altura: 21, moldura: "fina", parede: "mural", pos: [128, 151], descricao: "" },
    { arquivo: "obra31.jpg", titulo: "Nuvem sobre o lago", ano: "", tecnica: "Aquarela e nanquim sobre papel", largura: 14, altura: 9.7, moldura: "fita", parede: "mural", pos: [180, 129], giro: 2, descricao: "" },
    { arquivo: "obra36.jpg", titulo: "Pera", ano: "", tecnica: "Acrílica sobre papel", largura: 14.8, altura: 21, moldura: "mel", parede: "mural", pos: [252, 179], descricao: "" },
    { arquivo: "obra38.jpg", titulo: "Cenoura", ano: "", tecnica: "Acrílica sobre tela", largura: 15, altura: 30, moldura: "caixa", parede: "mural", pos: [293, 162], descricao: "Feito com espátula." },
    { arquivo: "obra37.jpg", titulo: "Vasos de flores", ano: "", tecnica: "Acrílica e pastel oleoso sobre papel", largura: 21, altura: 12.7, moldura: "madeira", parede: "mural", pos: [255, 145], descricao: "" },
  ],

  // Frase escrita na parede do mural, com a seta apontando para a esquerda (pos = ponta da seta, em cm)
  mural: { texto: "um sonho que tive", pos: [147, 166] },

  // Artesanato na mesa à direita da parede de entrada (arquivos na pasta "artesanato/").
  // A caixa: largura e altura são as medidas da tampa (cm) e profundidade é a altura da caixa fechada.
  // Os pratos: largura é o diâmetro (cm). A ordem dos pratos define a posição na mesa.
  artesanato: [
    { tipo: "caixa", arquivo: "caixa-tampa.jpg", titulo: "Caixa dos girassóis", ano: "", tecnica: "Acrílica sobre caixa de madeira", largura: 33, altura: 26, profundidade: 12, descricao: "" },
    { tipo: "prato", arquivo: "prato-xadrez.webp", titulo: "Prato xadrez", ano: "", tecnica: "Cerâmica pintada à mão", largura: 20, descricao: "" },
    { tipo: "prato", arquivo: "prato-coruja.webp", titulo: "Prato da coruja", ano: "", tecnica: "Cerâmica pintada à mão", largura: 21, descricao: "" },
    { tipo: "prato", arquivo: "prato-peixes.webp", titulo: "Prato dos peixes", ano: "", tecnica: "Cerâmica pintada à mão", largura: 21, descricao: "" },
  ],

  // Caderno criativo na mesinha do canto (arquivos na pasta "caderno/")
  caderno: {
    capa: "capa-v2.jpg",
    guarda: "guarda-v2.jpg",
    contracapa: "contracapa-v2.jpg",
    paginas: ["pag01.jpg","pag02.jpg","pag03.jpg","pag04.jpg","pag05.jpg","pag06.jpg","pag07.jpg",
              "pag08.jpg","pag09.jpg","pag10.jpg","pag11.jpg","pag12.jpg","pag13.jpg","pag14.jpg"],
  },

  // Bilhetes dos visitantes (Supabase). Cole aqui a Project URL e a chave publishable/anon.
  // Enquanto estiver vazio, a mesinha de bilhetes não aparece.
  recados: { url: "https://uxtiifmutbklcnoemrev.supabase.co", chave: "sb_publishable_Bafk5NOm9bNDQJbiZdM8NA_8uJ5SG9T" },

  // Mensagem na folha sobre o pilar, em frente à parede "Museu do Pedro".
  // Cada linha vira um parágrafo.
  mensagem: `Aqui estão alguns desenhos/pinturas que fiz ao longo desse ano de 2026, tem sido um processo criativo muito interessante de descobrir, agradeço a você que tirou um tempo para acessar esse "museu" e entrar um pouco dentro da minha mente.
A maioria das obras aqui eu nunca postei...
Fique a vontade para explorar como quiser e deixar seu feedback nas obras que mais gostou :)`,

  // Obras grandes cobertas por cortina branca, com placa "Em breve".
  // Ficam no lado de trás da parede do meio, junto das obras com parede: "meio". Tamanho em cm.
  // placa: o texto da plaquinha ("Em breve", "Em construção"...).
  em_breve: [
    { largura: 120, altura: 90, placa: "Em breve" },
    { largura: 42, altura: 59.4, placa: "Em construção" },
  ],
};
