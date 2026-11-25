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

  // Sala de Inspirações: a porta com tapete vermelho logo depois do mural.
  // Para esconder a sala, troque por:  inspiracoes: false,
  inspiracoes: {
    itens: [
      { tipo: "quadro", arquivo: "rosinha-retrato.jpg", titulo: "Rosinha", artista: "", tecnica: "Retrato pintado a partir de uma foto",
        largura: 50, moldura: "vitoriana", medida: "",
        descricao: "Minha cachorrinha Rosinha, iluminada entre as nuvens." },
      { tipo: "vitrine", arquivo: "rosinha-boneco-frente.webp", lados: ["rosinha-boneco-lado-esq.webp", "rosinha-boneco-lado-dir.webp"],
        titulo: "Rosinha de crochê", artista: "", tecnica: "Bonequinho de crochê", altura: 10, medida: "cerca de 10 cm", placa: "Rosinha",
        descricao: "Um bonequinho de crochê da Rosinha, com a coleirinha com o nome dela." },
      { tipo: "bicicleta", titulo: "Minha bicicleta", subtitulo: "Caloi aro 29",
        descricao: "Com ela descobri novos caminhos e encontrei paisagens que nunca vou esquecer." },
      { tipo: "varal",   // polaroides dos pedais, na parede em cima da bicicleta
        fotos: [
          { arquivo: "pedal-1.jpg", legenda: "Fazenda Águas de Santa Bárbara" },
          { arquivo: "pedal-2.jpg", legenda: "Fazenda, com o Padoca" },
          { arquivo: "pedal-3.jpg", legenda: "Fazenda Águas de Santa Bárbara" },
          { arquivo: "pedal-4.jpg", legenda: "Pico do Lopo (MG), com o Juan" },
          { arquivo: "pedal-5.jpg", legenda: "Pico do Lopo (MG)" },
          { arquivo: "pedal-6.jpg", legenda: "Bica de Louveira, com o Pedro" },
          { arquivo: "pedal-7.jpg", legenda: "Capelinha, Serra do Japi" },
          { arquivo: "pedal-8.jpg", legenda: "Pedra do Índio" },
        ] },
      { tipo: "cavalete", tela: [50, 60],
        chao: [
          { arquivo: "atelie-pano.webp", x: -0.15, z: -0.15, w: 0.364, d: 0.368 },
          { arquivo: "atelie-paleta-a.webp", x: 0.191, z: 0.039, w: 0.221, d: 0.265 },
          { arquivo: "atelie-paleta-b.webp", x: 0.045, z: 0.165, w: 0.266, d: 0.294 },
        ] },
      { tipo: "discos", titulo: "Trilha sonora", subtitulo: "As músicas que me acompanham",
        descricao: "Toque num disco para ouvir um trecho.",
        lista: [
        { musica: "Bachianinha Nº 1", artista: "Toquinho e Paulinho Nogueira", album: "Toquinho & Paulinho Nogueira", ano: "1999",
          capa: "https://is1-ssl.mzstatic.com/image/thumb/Music/85/d9/4d/mzi.cxwoksod.jpg/600x600bb.jpg",
          trecho: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a6/f0/c7/a6f0c7b5-42d5-d73a-a891-db89cccd1915/mzaf_10542735368833748980.plus.aac.p.m4a",
          link: "https://music.apple.com/br/album/bachianinha-no-1/458363095?i=458363118" },
        { musica: "Tudo Outra Vez", artista: "Belchior", album: "2 É Demais", ano: "1978",
          capa: "https://is1-ssl.mzstatic.com/image/thumb/Music4/v4/c8/ea/68/c8ea6896-fe72-9899-7cec-e3f74da5ad8a/706301613368.jpg/600x600bb.jpg",
          trecho: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3a/21/f7/3a21f7f3-16b0-778c-7042-182133b3c9da/mzaf_15357477777047543334.plus.aac.p.m4a",
          link: "https://music.apple.com/br/album/tudo-outra-vez/687174440?i=687174518" },
        { musica: "Wicked Game", artista: "Chris Isaak", album: "Heart Shaped World", ano: "1989",
          capa: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/67/e9/0f/67e90f2d-c229-3572-5f0f-d615dfeaa652/00792755800553_Cover.jpg/600x600bb.jpg",
          trecho: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/30/3c/a0/303ca009-d505-1f07-6289-b46a9eb1b0bf/mzaf_3033174643477317223.plus.aac.p.m4a",
          link: "https://music.apple.com/br/album/wicked-game/6785859382?i=6785859394" },
        { musica: "The Man Who Sold the World", artista: "Nirvana", album: "MTV Unplugged In New York (Live Acoustic)", ano: "1994",
          capa: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/46/24/33/462433f9-ee74-2d60-4538-859826a7bed7/00720642472729.rgb.jpg/600x600bb.jpg",
          trecho: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e5/dd/7d/e5dd7db8-6b62-b4ff-f749-cdc5de368793/mzaf_17046380605655525749.plus.aac.p.m4a",
          link: "https://music.apple.com/br/album/the-man-who-sold-the-world-live-acoustic/1440892370?i=1440892680" },
        { musica: "There Is a Light That Never Goes Out", artista: "The Smiths", album: "The Queen Is Dead", ano: "1986",
          capa: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/1a/e8/70/1ae870c3-b402-096b-c4c4-8022af5a2ed9/745099189662.jpg/600x600bb.jpg",
          trecho: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4e/c9/1d/4ec91df8-8524-b6ac-812c-fb38054be09d/mzaf_3253228293752173874.plus.aac.p.m4a",
          link: "https://music.apple.com/br/album/there-is-a-light-that-never-goes-out/800092985?i=800157892" },
        { musica: "It's All Over Now, Baby Blue", artista: "The Animals", album: "Before We Were So Rudely Interrupted", ano: "1977",
          capa: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f2/b8/90/f2b890a7-10d6-78d2-8127-bc7fcec71a01/mzi.cqflwjjd.jpg/600x600bb.jpg",
          trecho: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8e/96/43/8e9643fe-3fd0-8bc9-93d6-be39e10aa4f4/mzaf_4556149950162088302.plus.aac.p.m4a",
          link: "https://music.apple.com/br/album/its-all-over-now-baby-blue/450144546?i=450144595" },
        { musica: "Sangue Latino", artista: "Secos & Molhados", album: "A Volta de Secos & Molhados", ano: "1973",
          capa: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/81/cf/d1/81cfd1ab-7ecb-6525-eb20-22d8dc857766/085365739253.jpg/600x600bb.jpg",
          trecho: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/19/14/58/19145894-ec4d-25e9-5588-6a3d622eb6f9/mzaf_5901387766328686530.plus.aac.p.m4a",
          link: "https://music.apple.com/br/album/sangue-latino/281165288?i=281165319" },
        ] },
      // Expositor de vidro na parede ao lado da bicicleta: os desenhos e, no meio, a foto com a plaquinha.
      // foto: o arquivo da foto na pasta "inspiracoes/" (enquanto estiver vazio, a moldura fica esperando por ela).
      // Desenhos: largura e altura em cm; o maior vai para a esquerda e os outros formam a grade da direita, na ordem da lista.
      // solto: true deixa tudo um pouco fora do alinhamento, como se tivesse sido preso à mão: giro = inclinação em graus,
      // desloc = [direita, cima] em cm para empurrar a peça; fixacao: "alfinete" ou "fita" (fita crepe nos cantos).
      { tipo: "expositor", centro: 4.15, solto: true,
        // Escrito à mão e entalhado na lateral de madeira do expositor (do lado da porta), quase escondido.
        segredo: { frase: "me sinto o cara mais sortudo do mundo ao seu lado", iniciais: "P + J" },
        foto: "casal.jpg", titulo_foto: "Pedro e Juliana",
        frase: "Acredito que uma das energias criativas mais poderosas venha do nosso amor, acredito nisso pois vivo ela na pele e me leva para lugares incríveis",
        desenhos: [
          { arquivo: "desenho-copo.jpg", giro: -1.2, desloc: [0, -1.5], titulo: "Copo e flores", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 42, altura: 59.4, formato: "A2", descricao: "" },
          { arquivo: "desenho-girassol.jpg", giro: 4, desloc: [-3, -2], titulo: "Girassol", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 14.8, altura: 21, formato: "A5", descricao: "" },
          { arquivo: "desenho-besouro.jpg", giro: -3, desloc: [2, 3], fixacao: "fita", titulo: "Besouro", ano: "", tecnica: "Pastel oleoso e grafite sobre papel", largura: 14.8, altura: 21, formato: "A5", descricao: "" },
          // As duas telinhas das árvores ficam lado a lado no meio da grade (tela: true dá a espessura de tela esticada).
          // Para pôr uma peça entre a foto e a placa, use lado: "meio".
          { arquivo: "arvore-pedro.jpg", giro: -2.5, desloc: [-2, -0.5], titulo: "Árvore do parque", ano: "", tecnica: "Acrílica sobre tela", largura: 15, altura: 15, medida: "cerca de 15 × 15 cm", tela: true, descricao: "Uma das árvores do parque da cidade, pintada lá mesmo, junto com a Juliana." },
          { arquivo: "arvore-juliana.jpg", giro: 4, desloc: [-1, -3.5], titulo: "Árvores do parque", artista: "Juliana", ano: "", tecnica: "Acrílica sobre tela", largura: 15, altura: 15, medida: "cerca de 15 × 15 cm", tela: true, descricao: "Pintada pela Juliana no parque da cidade, no mesmo dia da árvore do Pedro." },
          { arquivo: "desenho-ovo-tucano.jpg", giro: -5, desloc: [-1, 1], fixacao: "fita", titulo: "Ovo e tucano", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 21, altura: 14.8, formato: "A5", descricao: "" },
          { arquivo: "desenho-gato.jpg", giro: 2, desloc: [3, -2], titulo: "Gato na lua", artista: "Juliana", ano: "", tecnica: "Pastel oleoso sobre papel", largura: 14.8, altura: 21, formato: "A5", descricao: "Desenho feito pela Juliana." },
        ] },
    ],
  },

  // Música de fundo: deixe "" para a música calminha gerada pelo próprio museu,
  // ou coloque o nome de um arquivo seu (ex.: "musica.mp3") na pasta do museu.
  musica: "",

  // Vídeos do ateliê: a tela fica no canto entre os dois tucanos.
  // Coloque os arquivos na pasta "videos/" (MP4) e liste aqui, na ordem em que devem passar.
  videos: [
    { arquivo: "atelie.mp4", titulo: "Bastidores do ateliê", descricao: "Um pouco das obras e do processo." },
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
  // A caixa (fechada): largura e altura são as medidas da tampa (cm) e profundidade é a altura da caixa.
  // Os pratos: largura é o diâmetro (cm). A ordem dos pratos define a posição na mesa.
  artesanato: [
    { tipo: "caixa", arquivo: "caixa-tampa.jpg", frente: "caixa-frente.webp", titulo: "Caixa dos girassóis", ano: "", tecnica: "Acrílica sobre caixa de madeira", largura: 33, altura: 27.5, profundidade: 9.5, descricao: "" },
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
