/*
  Jogo Véio - jogoveio.com
  Arquivo: dados.js
  Descrição: lista de jogos do site com prólogo, história, imagens, dúvidas principais
  e a base de respostas extras usada pelo Assistente Véio.
  Autores: Vinicius Vidal e Rafael Chiminello
  Disciplina: Desenvolvimento Front-End para Web - Universidade Positivo - 2026
*/

const jogos = [
  {
    id: "zelda",
    nome: "The Legend of Zelda",
    apelidos: ["zelda 1", "legend of zelda", "primeiro zelda"],
    console: "NES",
    ano: 1986,
    empresa: "Nintendo",
    genero: "Ação e aventura",
    cor: "#2E7D46",
    capa: "ZELDA",
    vilao: "Ganon",
    personagens: ["Link", "Princesa Zelda", "Ganon"],
    piadas: ["O Link junta oito pedaços da Triforce e eu não consigo achar duas meias do mesmo par.", "O velho da caverna diz que é perigoso ir sozinho e te dá uma espada. Hoje em dia ele ia te dar era um boleto.", "O Link quebra parede com bomba e ninguém cobra o pedreiro depois."],
    prologo: "O reino de Hyrule foi invadido pelo exército de Ganon, que roubou a Triforce do Poder. Para que ele não pegasse também a Triforce da Sabedoria, a princesa Zelda dividiu a relíquia em oito pedaços e os escondeu pelo reino antes de ser capturada.",
    historia: [
      "Você controla Link, um jovem que explora o mapa aberto de Hyrule atrás das oito dungeons onde estão os pedaços da Triforce. Cada dungeon guarda um item novo, como o bumerangue, o arco e a escada, que abre caminho para outras áreas.",
      "Com os oito pedaços reunidos, Link pode entrar na Death Mountain, a nona dungeon, para enfrentar Ganon e resgatar a princesa."
    ],
    imagens: ["Mapa de Hyrule", "Caverna do velho", "Dungeon 1", "Luta contra Ganon"],
    duvidas: [
      { pergunta: "Como conseguir a espada branca?", chaves: ["espada branca", "white sword"], resposta: "Ela fica numa caverna no alto de uma cachoeira, ao norte do mapa. O velho só entrega se você tiver pelo menos 5 corações." },
      { pergunta: "Onde fica a espada mágica?", chaves: ["espada magica", "espada mágica", "magical sword", "cemiterio", "cemitério"], resposta: "Fica escondida embaixo de um túmulo no cemitério. É preciso ter pelo menos 12 corações." },
      { pergunta: "Como entrar na dungeon 7?", chaves: ["dungeon 7", "nivel 7", "nível 7", "lago", "flauta", "recorder"], resposta: "Pegue a flauta (recorder) na dungeon 5 e toque na frente do lago certo. A água seca e revela a entrada." },
      { pergunta: "Como derrotar o Ganon?", chaves: ["ganon", "chefe final"], resposta: "Acerte Ganon com a espada até ele parar e mudar de cor. Nesse momento, atire uma flecha de prata. As flechas de prata ficam na própria dungeon 9." }
    ],
    assistente: [
      { pergunta: "Onde pego a primeira espada?", chaves: ["primeira espada", "espada de madeira", "comeco", "inicio", "sem espada", "velho"], resposta: "Logo na tela inicial, entre na caverna que fica acima do Link. O velho entrega a espada de madeira." },
      { pergunta: "Como achar passagens secretas?", chaves: ["secreta", "secreto", "bomba", "parede", "escondido"], resposta: "Jogue bombas nas paredes das dungeons e nas pedras do mapa, queime arbustos com a vela e empurre blocos. Muitas entradas ficam escondidas assim." },
      { pergunta: "Para que serve a vela?", chaves: ["vela", "candle", "arbusto", "escuro"], resposta: "A vela ilumina salas escuras nas dungeons e queima arbustos, revelando escadas e cavernas escondidas." },
      { pergunta: "O que fazer com os Like Likes?", chaves: ["like like", "escudo sumiu", "comeu o escudo"], resposta: "Eles engolem o Link e comem o escudo mágico. Ataque de longe ou mate rápido para não perder o escudo." },
      { pergunta: "Como jogar a Second Quest?", chaves: ["second quest", "segunda missao", "segunda aventura", "nome zelda"], resposta: "Termine o jogo uma vez ou crie um arquivo com o nome ZELDA. A Second Quest tem dungeons em lugares diferentes e mais difíceis." },
      { pergunta: "Quantas dungeons o jogo tem?", chaves: ["quantas dungeons", "quantas fases", "dungeons", "fases"], resposta: "São nove: oito com os pedaços da Triforce e a nona, na Death Mountain, onde está o Ganon." },
      { pergunta: "Para que serve o bumerangue?", chaves: ["bumerangue", "boomerang"], resposta: "Ele paralisa inimigos por alguns segundos e busca itens de longe." },
      { pergunta: "Para que serve a escada?", chaves: ["escada", "ladder", "buraco", "atravessar"], resposta: "A escada deixa o Link atravessar buracos e trechos de água de um bloco de largura." },
      { pergunta: "Como conseguir rupias?", chaves: ["rupia", "rupias", "dinheiro", "comprar"], resposta: "Derrote inimigos e procure cavernas secretas com bombas e com a vela. Em algumas, um personagem dá rupias para você." },
      { pergunta: "Como recuperar vida?", chaves: ["recuperar vida", "pocao", "poção", "fada", "carta", "curar"], resposta: "Pegue corações e fadas. Com a carta que o velho entrega, a velha das cavernas passa a vender poções." },
      { pergunta: "Em que linha do tempo este jogo fica?", chaves: ["linha do tempo", "timeline", "cronologia", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "Pelo livro oficial Hyrule Historia (2011), Zelda 1 fica na linha do tempo em que o herói foi derrotado, depois de A Link to the Past." },
      { pergunta: "O que é a Triforce?", chaves: ["triforce", "triangulo", "triangulos"], resposta: "É uma relíquia sagrada formada por três triângulos: Poder, Sabedoria e Coragem. Neste jogo, Link junta os oito pedaços da Triforce da Sabedoria." },
      { pergunta: "O que o velho diz na primeira caverna?", chaves: ["frase", "velho diz", "perigoso", "sozinho"], resposta: "A frase famosa, traduzida, é: \"É perigoso ir sozinho! Leve isto.\" E ele entrega a espada." },
      { pergunta: "Por que o cartucho era dourado?", chaves: ["dourado", "cartucho", "salvar no cartucho", "bateria", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Curiosidade: nos EUA o jogo saiu num cartucho dourado e foi um dos primeiros com bateria para salvar o progresso." },
      { pergunta: "Onde fica a dungeon 9?", chaves: ["dungeon 9", "nivel 9", "death mountain"], resposta: "Na Death Mountain. A entrada só libera quem já juntou os oito pedaços da Triforce." },
      { pergunta: "Para que serve o anel azul?", chaves: ["anel azul", "blue ring", "anel"], resposta: "Ele reduz o dano que o Link recebe. É vendido numa loja e custa caro, então junte rupias antes." },
<<<<<<< HEAD
      { pergunta: "Como derrotar o Aquamentus?", chaves: ["aquamentus", "dragao", "chefe da dungeon 1"], resposta: "É o dragão da dungeon 1. Desvie das três bolas de fogo e acerte a cabeça dele com a espada." },
      { pergunta: "Quantos corações o Link pode ter?", chaves: ["quantos coracoes", "maximo de coracoes", "coracoes"], resposta: "Até 16 corações, juntando os containers dos chefes e os que ficam escondidos pelo mapa." },
      { pergunta: "Qual é a música mais famosa do Zelda?", chaves: ["musica famosa", "tema", "overworld"], resposta: "O tema do mundo aberto (Overworld Theme), composto por Koji Kondo. Ele virou a música símbolo da série e aparece em vários jogos depois." },
      { pergunta: "Quem compôs a música do Zelda?", chaves: ["quem compos", "compositor", "koji kondo"], resposta: "Koji Kondo, o mesmo compositor das músicas do Super Mario Bros." }
=======
      { pergunta: "Como derrotar o Aquamentus?", chaves: ["aquamentus", "dragao", "chefe da dungeon 1"], resposta: "É o dragão da dungeon 1. Desvie das três bolas de fogo e acerte a cabeça dele com a espada." }
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    ]
  },
  {
    id: "zelda2",
    nome: "Zelda II: The Adventure of Link",
    apelidos: ["zelda 2", "zelda ii", "adventure of link"],
    console: "NES",
    ano: 1987,
    empresa: "Nintendo",
    genero: "Ação e RPG",
    cor: "#8C6A1E",
    capa: "ZELDA II",
    vilao: "os seguidores de Ganon, que querem usar o sangue do Link para revivê-lo",
    personagens: ["Link", "Princesa Zelda", "Dark Link", "Thunderbird"],
    piadas: ["O Error se apresenta dizendo que é um erro. Pelo menos é honesto, coisa rara hoje em dia.", "Zelda II é tão difícil que até o Link precisou de experiência antes de arrumar emprego de herói.", "Zelda II é tão difícil que até o Game Over pede desculpa."],
    prologo: "Alguns anos depois da derrota de Ganon, Link descobre uma marca da Triforce na mão. Uma outra princesa Zelda, de muito tempo atrás, está presa num sono mágico, e só a Triforce da Coragem pode acordá-la.",
    historia: [
      "A Triforce da Coragem está no Grande Palácio. Para abrir o caminho, Link precisa colocar cristais nas estátuas de seis palácios espalhados por Hyrule, enquanto os seguidores de Ganon tentam usar o sangue de Link para revivê-lo.",
      "O jogo mistura mapa visto de cima com fases em visão lateral, tem níveis de experiência e magias aprendidas nas cidades. No fim, Link enfrenta o Thunderbird e a própria sombra, o Dark Link."
    ],
    imagens: ["Mapa do mundo", "Cidade de Rauru", "Palácio", "Dark Link"],
    duvidas: [
      { pergunta: "Onde aprendo as magias?", chaves: ["magia", "magias", "feitiço", "spell"], resposta: "Cada cidade tem um velho sábio que ensina uma magia, como Shield em Rauru e Jump em Ruto. Algumas cidades pedem que você resolva uma tarefa antes." },
      { pergunta: "Como vencer o Thunderbird?", chaves: ["thunderbird", "passaro", "pássaro"], resposta: "Use a magia Thunder logo no começo da luta. Sem ela, o Thunderbird não recebe dano." },
      { pergunta: "Como vencer o Dark Link?", chaves: ["dark link", "sombra"], resposta: "Uma estratégia conhecida é ficar no canto esquerdo da sala, agachado, atacando sempre que ele chega perto." }
    ],
    assistente: [
      { pergunta: "Como subir de nível?", chaves: ["nivel", "level", "experiencia", "xp"], resposta: "Derrotando inimigos você junta pontos de experiência. Quando completa a barra, escolhe se quer melhorar ataque, magia ou vida." },
      { pergunta: "Onde pego a vela?", chaves: ["vela", "candle", "caverna escura", "escuro"], resposta: "A vela fica no primeiro palácio, o Parapa Palace. Sem ela, as cavernas ficam escuras." },
      { pergunta: "O que acontece no Game Over?", chaves: ["game over", "morri", "perdi"], resposta: "Você volta ao começo, no palácio do norte, e perde a experiência que estava juntando para o próximo nível. Os níveis já conquistados ficam." },
      { pergunta: "Como funciona a magia Fairy?", chaves: ["fairy", "fada", "voar", "porta trancada"], resposta: "Ela transforma o Link numa fada que voa e passa pelo buraco da fechadura das portas, sem precisar de chave." },
      { pergunta: "Como aprender os golpes para baixo e para cima?", chaves: ["golpe para baixo", "golpe para cima", "downthrust", "upthrust", "ataque para baixo"], resposta: "Os dois são ensinados por cavaleiros: o golpe para baixo em Mido e o golpe para cima em Darunia." },
      { pergunta: "Onde fica o martelo?", chaves: ["martelo", "hammer", "pedra", "pedras"], resposta: "Numa caverna da Death Mountain. Ele quebra as pedras que bloqueiam caminhos no mapa." },
      { pergunta: "Para que serve a flauta?", chaves: ["flauta", "flute", "river devil"], resposta: "Ela afasta o River Devil, o monstro que bloqueia uma passagem no mapa." },
      { pergunta: "Para que servem as botas?", chaves: ["botas", "boots", "agua", "andar na agua"], resposta: "As botas deixam o Link andar sobre a água no mapa." },
      { pergunta: "Quem é o Error?", chaves: ["error", "ruto"], resposta: "É um morador de Ruto famoso pela frase em que se apresenta com esse nome. Ele dá uma dica sobre outro personagem." },
      { pergunta: "Onde fica o Grande Palácio?", chaves: ["grande palacio", "great palace", "ultimo palacio"], resposta: "No Vale da Morte, no extremo leste do mapa. Ele só abre depois que os cristais estão nos seis palácios." },
      { pergunta: "Qual a piada por trás do Error?", chaves: ["error", "bagu", "piada", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "Curiosidade: o Error tem um amigo chamado Bagu, que soa como \"bug\" em japonês. Erro e bug, uma piada de programador." },
      { pergunta: "Como recuperar magia?", chaves: ["recuperar magia", "magia acabou", "jarro", "pote"], resposta: "Pegue os jarros azuis que alguns inimigos deixam cair. Nas cidades, uma moradora também recupera sua magia." },
      { pergunta: "Quem é a Zelda adormecida?", chaves: ["zelda adormecida", "dormindo", "primeira zelda", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Pela história do jogo, é a primeira princesa Zelda, posta para dormir por um feiticeiro. Desde então, todas as princesas da família recebem o nome dela." },
      { pergunta: "Por que esse Zelda é tão diferente?", chaves: ["diferente", "estranho", "experiencia", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Foi uma experiência da Nintendo: fases em visão lateral, níveis de experiência e cidades com moradores. A série voltou ao estilo do primeiro jogo depois." },
      { pergunta: "Para que serve a magia Shield?", chaves: ["shield", "escudo magico", "defesa"], resposta: "Ela diminui o dano que o Link recebe por um tempo. É a primeira magia, aprendida em Rauru." },
      { pergunta: "Quem é o Bagu?", chaves: ["bagu", "ponte", "bilhete"], resposta: "É o amigo do Error, que mora escondido na floresta. Ele dá um bilhete que convence o guarda a deixar o Link atravessar a ponte." }
    ]
  },
  {
    id: "alttp",
    nome: "The Legend of Zelda: A Link to the Past",
    apelidos: ["link to the past", "alttp"],
    console: "Super Nintendo",
    ano: 1991,
    empresa: "Nintendo",
    genero: "Ação e aventura",
    cor: "#3D7A2A",
    capa: "A LINK TO THE PAST",
<<<<<<< HEAD
    musica: { arquivo: "audio/alttp.mp3", titulo: "Overworld Theme" },
    video: { titulo: "Como pegar a Master Sword", pergunta: "Onde pego a Master Sword?", arquivo: "video/alttp-master-sword.mp4", capa: "video/alttp-master-sword.jpg" },
=======
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    vilao: "o mago Agahnim e, por trás dele, Ganon",
    personagens: ["Link", "Princesa Zelda", "Sahasrahla", "Agahnim", "Ganon"],
    piadas: ["O Link vira coelho no Mundo Sombrio. Eu viro coelho é na segunda-feira de manhã, tchê.", "Quatro garrafas pra guardar fada. Eu tenho quatro garrafas também, mas é de chimarrão.", "O tio do Link sai na chuva com espada e escudo e fala 'não sai de casa'. Clássico tio gaúcho."],
    prologo: "O mago Agahnim tomou o poder em Hyrule e está mandando as descendentes dos Sete Sábios para outro mundo. Numa noite de chuva, a princesa Zelda chama Link por telepatia, pedindo ajuda.",
    historia: [
      "Link resgata Zelda do castelo e parte atrás dos três pingentes (Coragem, Poder e Sabedoria) para tirar a Master Sword da pedra nos Bosques Perdidos.",
      "Depois de enfrentar Agahnim, Link vai parar no Mundo Sombrio, onde precisa libertar as sete donzelas presas em cristais antes do confronto final com Ganon na Pirâmide."
    ],
    imagens: ["Castelo de Hyrule", "Bosques Perdidos", "Mundo Sombrio", "Pirâmide"],
    duvidas: [
      { pergunta: "Onde pego a Master Sword?", chaves: ["master sword", "espada", "pingente", "pingentes"], resposta: "Junte os três pingentes das primeiras dungeons e vá ao pedestal no fundo dos Bosques Perdidos, a noroeste do mapa." },
      { pergunta: "Por que o Link vira coelho?", chaves: ["coelho", "moon pearl", "perola", "pérola"], resposta: "No Mundo Sombrio, Link vira coelho se não tiver a Moon Pearl. Ela fica na Tower of Hera, a terceira dungeon." },
      { pergunta: "Como derrotar o Ganon?", chaves: ["ganon", "chefe final", "flecha de prata"], resposta: "Na fase final ele apaga as tochas e fica invisível. Acenda as tochas com a lanterna ou o bastão de fogo e acerte com as flechas de prata, que você ganha da fada da Pirâmide." }
    ],
    assistente: [
      { pergunta: "Onde pego a Pegasus Boots?", chaves: ["pegasus", "bota", "botas", "correr"], resposta: "Depois do primeiro pingente, fale com o Sahasrahla, que fica escondido a leste de Kakariko. Ele entrega as botas." },
      { pergunta: "Onde fica o Espelho Mágico?", chaves: ["espelho", "mirror", "voltar ao mundo da luz"], resposta: "Um velho perdido na Death Mountain entrega o espelho depois que você leva ele até em casa. O espelho leva do Mundo Sombrio de volta ao Mundo da Luz." },
      { pergunta: "Como melhorar a espada?", chaves: ["melhorar espada", "tempered", "golden", "espada dourada", "ferreiro"], resposta: "Leve o sapo do Mundo Sombrio até os ferreiros de Kakariko para ganhar a Tempered Sword. A Golden Sword vem da fada da Pirâmide, jogando a espada na fonte." },
      { pergunta: "Como entrar no Misery Mire e no Turtle Rock?", chaves: ["misery mire", "turtle rock", "medalhao", "medalhoes"], resposta: "As duas entradas precisam de medalhões (Bombos, Ether ou Quake). Qual medalhão abre cada uma muda de jogo para jogo." },
      { pergunta: "Como ganhar mais corações?", chaves: ["coracao", "coracoes", "heart", "pedaco"], resposta: "Cada chefe dá um coração inteiro. Pelo mapa há pedaços de coração escondidos: quatro pedaços formam um coração novo." },
      { pergunta: "Onde fica o Hookshot?", chaves: ["hookshot", "gancho"], resposta: "No Swamp Palace, no Mundo Sombrio." },
      { pergunta: "Como viajar rápido pelo mapa?", chaves: ["viajar", "flauta", "ocarina", "passaro", "teleporte"], resposta: "Leve a flauta ao lugar certo em Kakariko para acordar o pássaro. Depois, tocar a flauta chama o pássaro, que leva o Link a vários pontos do mapa." },
      { pergunta: "Como aprender a nadar?", chaves: ["nadar", "nadadeira", "flippers", "zora"], resposta: "Compre as nadadeiras (Flippers) com o Rei Zora, na cachoeira do nordeste. Custam 500 rupias." },
      { pergunta: "Como pegar o Book of Mudora?", chaves: ["book of mudora", "livro", "ler"], resposta: "Ele fica numa estante da biblioteca de Kakariko. Dê um encontrão nela correndo com as Pegasus Boots." },
      { pergunta: "Quem é o Sahasrahla?", chaves: ["sahasrahla", "anciao", "sabio"], resposta: "É um ancião descendente dos sábios, que orienta o Link na busca pelos pingentes." },
      { pergunta: "Onde fica o martelo?", chaves: ["martelo", "hammer"], resposta: "No Palace of Darkness, a primeira dungeon do Mundo Sombrio." },
      { pergunta: "A Link to the Past vem antes do Zelda 1?", chaves: ["linha do tempo", "timeline", "cronologia", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "Sim. Pela cronologia oficial do Hyrule Historia, A Link to the Past acontece antes do Zelda 1 e do Zelda II." },
      { pergunta: "Onde pego a rede de pegar insetos?", chaves: ["rede", "inseto", "net", "fada na garrafa"], resposta: "Com o menino doente em Kakariko. A rede serve para pegar fadas e guardar nas garrafas." },
      { pergunta: "Quantas garrafas existem?", chaves: ["garrafa", "garrafas", "bottle"], resposta: "Quatro. Elas guardam fadas e poções, que salvam o Link quando a vida acaba." },
      { pergunta: "O que é a sala do Chris Houlihan?", chaves: ["chris houlihan", "sala secreta", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Curiosidade: é uma sala secreta com rupias, batizada com o nome de um garoto que ganhou um concurso de uma revista da Nintendo." },
      { pergunta: "O que fazem os medalhões?", chaves: ["medalhao", "bombos", "ether", "quake"], resposta: "Cada um ataca todos os inimigos da tela: Bombos com fogo, Ether com gelo e raios e Quake com um terremoto. Também abrem algumas entradas." },
<<<<<<< HEAD
      { pergunta: "Onde pego a lanterna?", chaves: ["lanterna", "lamp", "luz", "escuro"], resposta: "Num baú dentro da casa do Link, logo no começo. Ela ilumina os lugares escuros e acende tochas." },
      { pergunta: "O que são os Bosques Perdidos?", chaves: ["bosques perdidos", "lost woods", "floresta"], resposta: "É a floresta a noroeste de Hyrule, cheia de neblina e ladrões. No fundo dela fica o pedestal da Master Sword." },
      { pergunta: "Qual música do jogo eu posso ouvir aqui?", chaves: ["musica do jogo", "trilha sonora", "trilha", "ouvir", "tocar musica"], resposta: "Aqui no site dá para ouvir o Overworld Theme. É só clicar no botão da nota musical, no canto inferior direito da tela." }
=======
      { pergunta: "Onde pego a lanterna?", chaves: ["lanterna", "lamp", "luz", "escuro"], resposta: "Num baú dentro da casa do Link, logo no começo. Ela ilumina os lugares escuros e acende tochas." }
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    ]
  },
  {
    id: "sotn",
    nome: "Castlevania: Symphony of the Night",
    apelidos: ["symphony of the night", "sotn", "castlevania"],
    console: "PlayStation",
    ano: 1997,
    empresa: "Konami",
    genero: "Ação e exploração",
    cor: "#5B2A6E",
    capa: "SYMPHONY OF THE NIGHT",
<<<<<<< HEAD
    musica: { arquivo: "audio/sotn.mp3", titulo: "The Tragic Prince (arranjo de Akira Yamaoka)" },
=======
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    vilao: "o sacerdote Shaft, que quer trazer Drácula de volta",
    personagens: ["Alucard", "Maria Renard", "Richter Belmont", "Shaft", "Drácula"],
    piadas: ["O Alucard descobriu que o castelo do pai tinha um andar de cabeça pra baixo. Imagina o preço dessa reforma.", "Drácula diz que o homem é um monte de segredos. O meu segredo é que eu ainda não achei os 200,6%.", "Alucard é Dracula ao contrário. Meu nome ao contrário é Oiév, e nem por isso viro vampiro."],
    prologo: "Em 1797, quatro anos depois de Richter Belmont derrotar Drácula, Richter desaparece e o castelo do vampiro volta a surgir. Alucard, filho de Drácula, acorda do sono para descobrir o que aconteceu.",
    historia: [
      "Alucard explora o castelo, enfrenta dezenas de chefes e encontra Maria Renard, que procura por Richter.",
      "Ele descobre que Richter está sendo controlado pelo sacerdote Shaft, que quer trazer Drácula de volta. A segunda metade do jogo acontece num castelo invertido."
    ],
    imagens: ["Entrada do castelo", "Biblioteca", "Torre do relógio", "Castelo invertido"],
    duvidas: [
      { pergunta: "Como chegar ao castelo invertido?", chaves: ["castelo invertido", "invertido", "holy glasses", "oculos", "óculos"], resposta: "Pegue o Anel de Ouro e o Anel de Prata e vá à sala do relógio, onde a Maria entrega os Holy Glasses. Equipe os óculos na luta contra o Richter e destrua o orbe verde que flutua sobre ele." },
      { pergunta: "Por que o jogo acabou depois do Richter?", chaves: ["richter", "final ruim", "acabou"], resposta: "Se você derrotar o Richter sem os Holy Glasses, recebe o final ruim. Para continuar, é preciso usar os óculos e atacar o orbe." },
      { pergunta: "Até quantos por cento dá pra completar?", chaves: ["porcentagem", "por cento", "200"], resposta: "Explorando os dois castelos inteiros, o mapa chega a 200,6%." }
    ],
    assistente: [
      { pergunta: "Qual a espada mais forte?", chaves: ["espada", "crissaegrim", "arma forte", "melhor arma"], resposta: "A Crissaegrim é a favorita de muita gente. Ela cai do inimigo Schmoo, nas catacumbas do castelo invertido, e é rara." },
      { pergunta: "Como virar morcego, lobo ou névoa?", chaves: ["morcego", "lobo", "nevoa", "transformar", "forma"], resposta: "Alucard ganha cada forma ao achar a relíquia correspondente (Soul of Bat, Soul of Wolf, Form of Mist) explorando o castelo." },
      { pergunta: "Como salvar o jogo?", chaves: ["salvar", "save", "caixao"], resposta: "Procure as salas de salvamento, com um caixão. Elas também recuperam toda a vida." },
      { pergunta: "Para que servem os familiares?", chaves: ["familiar", "familiares", "fada", "demonio ajudante"], resposta: "São ajudantes que seguem o Alucard, como a fada e o demônio. Você ganha as cartas deles explorando e equipa no menu de relíquias." },
      { pergunta: "Como jogar com o Richter?", chaves: ["jogar com richter", "modo richter", "nome richter"], resposta: "Depois de terminar o jogo, comece um arquivo novo com o nome RICHTER." },
      { pergunta: "Onde compro itens?", chaves: ["comprar", "loja", "bibliotecario", "librarian"], resposta: "Com o Bibliotecário, na Long Library. Ele vende itens e equipamentos." },
      { pergunta: "Quem é a Maria?", chaves: ["maria", "maria renard"], resposta: "É Maria Renard, que entra no castelo atrás do Richter e ajuda o Alucard em alguns momentos." },
      { pergunta: "Quem roubou meus equipamentos no começo?", chaves: ["morte", "death", "equipamento", "roubou"], resposta: "Foi a Morte. Logo na entrada do castelo ela tira os equipamentos poderosos do Alucard." },
      { pergunta: "O nome Alucard tem algum segredo?", chaves: ["alucard", "nome", "dracula ao contrario", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "Tem: Alucard é Dracula escrito de trás para frente." },
      { pergunta: "Qual o final verdadeiro?", chaves: ["final verdadeiro", "melhor final", "final bom"], resposta: "Depois de salvar o Richter, termine o castelo invertido e derrote o Drácula no centro dele." },
      { pergunta: "Dá pra jogar com a Maria?", chaves: ["jogar com maria", "maria jogavel", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Não na versão original de PlayStation. Ela é jogável em outras versões, como a de Sega Saturn e a do PSP." },
      { pergunta: "O Alucard já apareceu antes?", chaves: ["alucard antes", "castlevania iii", "primeira aparicao", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Sim. Ele estreou em Castlevania III: Dracula's Curse, do NES, ajudando um Belmont contra o próprio pai." },
      { pergunta: "O que são as relíquias?", chaves: ["reliquia", "reliquias", "habilidade", "pulo duplo"], resposta: "São itens que dão habilidades novas ao Alucard, como o pulo duplo e as transformações. Elas abrem caminhos no castelo." },
<<<<<<< HEAD
      { pergunta: "Quem é a Lisa?", chaves: ["lisa", "mae do alucard"], resposta: "É a mãe do Alucard, morta acusada de bruxaria. A morte dela é o motivo da fúria do Drácula contra a humanidade." },
      { pergunta: "Qual música do jogo eu posso ouvir aqui?", chaves: ["musica do jogo", "trilha sonora", "trilha", "ouvir", "tocar musica"], resposta: "Aqui no site dá para ouvir The Tragic Prince. É só clicar no botão da nota musical, no canto inferior direito da tela." },
      { pergunta: "Quem é o Shaft?", chaves: ["shaft", "sacerdote"], resposta: "É o sacerdote das trevas que controla o Richter e quer trazer o Drácula de volta. É ele quem planeja tudo por trás da volta do castelo." }
=======
      { pergunta: "Quem é a Lisa?", chaves: ["lisa", "mae do alucard"], resposta: "É a mãe do Alucard, morta acusada de bruxaria. A morte dela é o motivo da fúria do Drácula contra a humanidade." }
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    ]
  },
  {
    id: "chrono",
    nome: "Chrono Trigger",
    apelidos: ["chrono trigger"],
    console: "Super Nintendo",
    ano: 1995,
    empresa: "Square",
    genero: "RPG",
    cor: "#1F6E8C",
    capa: "CHRONO TRIGGER",
<<<<<<< HEAD
    musica: { arquivo: "audio/chrono.mp3", titulo: "Corridors of Time" },
=======
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    vilao: "Lavos, a criatura que destrói o mundo em 1999",
    personagens: ["Crono", "Marle", "Lucca", "Frog", "Robo", "Ayla", "Magus"],
    piadas: ["O Crono não fala nada o jogo inteiro e todo mundo segue ele. Liderança de verdade é isso aí.", "Viajam pelo tempo inteiro e ninguém pensou em voltar no dia da prova pra estudar mais.", "O Crono morre e o jogo continua. Primeiro protagonista que tirou folga no meio do expediente."],
    prologo: "No ano 1000, durante a Feira do Milênio, Crono conhece Marle. Um teste da máquina de teletransporte da Lucca dá errado, abre um portal e manda Marle para o passado.",
    historia: [
      "Crono e Lucca vão atrás dela e acabam descobrindo que, em 1999, uma criatura chamada Lavos destrói o mundo.",
      "O grupo viaja entre a pré-história, a idade média, o futuro e outras eras, reunindo aliados como Frog, Robo e Ayla para mudar a história."
    ],
    imagens: ["Feira do Milênio", "Fim do Tempo", "Futuro em ruínas", "Batalha contra Lavos"],
    duvidas: [
      { pergunta: "Como trazer o Crono de volta?", chaves: ["crono", "reviver", "morreu", "death peak", "clone"], resposta: "Fale com o Gaspar no Fim do Tempo para receber o Chrono Trigger, ganhe o clone do Crono na tenda do Norstein Bekkler, na Feira do Milênio, e suba o Death Peak." },
      { pergunta: "Como enfrentar o Lavos a qualquer momento?", chaves: ["lavos", "balde", "bucket"], resposta: "Use o balde que fica no Fim do Tempo. Ele leva direto à batalha contra o Lavos e é assim que se liberam vários finais diferentes." },
      { pergunta: "Como funcionam as técnicas duplas?", chaves: ["tecnica", "técnica", "dupla", "tripla", "tech"], resposta: "Quando dois personagens aprendem certas técnicas individuais, eles ganham ataques combinados. Com o trio certo, aparecem as técnicas triplas." }
    ],
    assistente: [
      { pergunta: "Como conseguir a Masamune?", chaves: ["masamune", "espada do frog", "sonho", "dreamstone"], resposta: "Pegue o cabo e a lâmina, consiga a Dreamstone na pré-história e leve tudo ao Melchior para consertar a espada." },
      { pergunta: "Como recrutar o Magus?", chaves: ["magus", "recrutar"], resposta: "Mais à frente na história, você encontra o Magus no North Cape. Se escolher não lutar, ele entra para o grupo." },
      { pergunta: "O que é o New Game+?", chaves: ["new game", "new game+", "jogar de novo"], resposta: "Depois de terminar, dá para recomeçar mantendo níveis e itens. É assim que se veem os outros finais." },
      { pergunta: "Quantos finais o jogo tem?", chaves: ["finais", "final", "finais diferentes"], resposta: "Vários. O final muda conforme o momento em que você derrota o Lavos, principalmente usando o balde do Fim do Tempo no New Game+." },
      { pergunta: "O que é o Epoch?", chaves: ["epoch", "maquina do tempo", "nave"], resposta: "É a máquina do tempo que voa. Com ela você escolhe a era para onde quer ir." },
      { pergunta: "Quem ensina magia?", chaves: ["magia", "magias", "spekkio"], resposta: "O Spekkio, no Fim do Tempo, ensina magia ao grupo." },
      { pergunta: "Quem é o Gaspar?", chaves: ["gaspar", "velho", "fim do tempo"], resposta: "É o velho que fica no Fim do Tempo e dá dicas sobre o que fazer." },
      { pergunta: "Quem é o Frog?", chaves: ["frog", "sapo", "glenn"], resposta: "É um cavaleiro chamado Glenn, transformado em sapo pelo Magus." },
      { pergunta: "Como pegar a espada Rainbow?", chaves: ["rainbow", "arco-iris", "melhor espada", "espada do crono"], resposta: "Encontre o Rainbow Shell e leve ao Melchior. Ele forja a Rainbow, uma das melhores espadas do Crono." },
      { pergunta: "Quem criou o Chrono Trigger?", chaves: ["dream team", "criador", "toriyama", "sakaguchi", "horii", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "Curiosidade: foi o chamado \"Dream Team\", com Hironobu Sakaguchi (Final Fantasy), Yuji Horii (Dragon Quest) e os desenhos de Akira Toriyama (Dragon Ball)." },
      { pergunta: "Chrono Trigger tem continuação?", chaves: ["continuacao", "chrono cross", "sequencia", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Tem: Chrono Cross, de 2000, para PlayStation. Ele se passa no mesmo mundo, anos depois." },
      { pergunta: "Quem são o Gaspar, o Melchior e o Belthasar?", chaves: ["melchior", "belthasar", "gurus", "tres sabios", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "São os três Gurus do reino de Zeal, espalhados pelo tempo. Os nomes vêm dos três reis magos." },
      { pergunta: "Onde fica a Ayla?", chaves: ["ayla", "pre-historia"], resposta: "Ela vive na pré-história, em 65.000.000 a.C., e entra no grupo durante a passagem por lá." },
      { pergunta: "Quem é o Robo?", chaves: ["robo", "robô", "prometheus"], resposta: "É um robô encontrado em ruínas no futuro e consertado pela Lucca. Ele vira um dos aliados mais fiéis do grupo." },
      { pergunta: "Quem é a Lucca?", chaves: ["lucca", "inventora"], resposta: "É a inventora amiga do Crono. Foi a máquina de teletransporte dela que abriu o primeiro portal no tempo." },
      { pergunta: "Quem é a Schala?", chaves: ["schala", "princesa", "irma do magus"], resposta: "É a princesa de Zeal e irmã do Magus. O destino dela é um dos mistérios que continuam no Chrono Cross." },
<<<<<<< HEAD
      { pergunta: "A Kid do Chrono Cross tem ligação com a Schala?", chaves: ["kid", "chrono cross", "ligacao", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Atenção, spoiler do Chrono Cross: tem. A Kid é revelada como um clone da Schala." },
      { pergunta: "Qual música do jogo eu posso ouvir aqui?", chaves: ["musica do jogo", "trilha sonora", "trilha", "ouvir", "tocar musica"], resposta: "Aqui no site dá para ouvir Corridors of Time. É só clicar no botão da nota musical, no canto inferior direito da tela." },
      { pergunta: "O que é a Feira do Milênio?", chaves: ["feira", "milenio", "millennial fair"], resposta: "É a festa do ano 1000 em Guardia, onde o jogo começa. Lá dá para jogar minigames, ganhar Silver Points e conhecer a Marle." },
      { pergunta: "Quem compôs a trilha do Chrono Trigger?", chaves: ["compos", "compositor", "trilha", "mitsuda"], resposta: "Yasunori Mitsuda compôs a maior parte, com ajuda de Nobuo Uematsu (de Final Fantasy) e Noriko Matsueda." }
=======
      { pergunta: "A Kid do Chrono Cross tem ligação com a Schala?", chaves: ["kid", "chrono cross", "ligacao", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Atenção, spoiler do Chrono Cross: tem. A Kid é revelada como um clone da Schala." }
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    ]
  },
  {
    id: "megaman4",
    nome: "Mega Man 4",
    apelidos: ["mega man", "megaman"],
    console: "NES",
    ano: 1991,
    empresa: "Capcom",
    genero: "Plataforma e ação",
    cor: "#2456A6",
    capa: "MEGA MAN 4",
    vilao: "o Dr. Wily, que obrigou o Dr. Cossack a atacar",
    personagens: ["Mega Man", "Rush", "Proto Man", "Dr. Light", "Dr. Cossack", "Kalinka", "Dr. Wily"],
    piadas: ["O Mega Man pega a arma de cada chefe que derrota. Se fosse aqui no bairro já tava na delegacia.", "Oito chefes, oito fraquezas... e a minha fraqueza é um churrasco no domingo.", "O Dr. Wily perde todo jogo e sempre volta. Persistência de vendedor de consórcio."],
    prologo: "Um ano depois da última derrota do Dr. Wily, o cientista russo Dr. Cossack desafia o Dr. Light e manda oito Robot Masters atacarem a cidade.",
    historia: [
      "Mega Man enfrenta Bright Man, Toad Man, Drill Man, Pharaoh Man, Ring Man, Dust Man, Dive Man e Skull Man, ganhando a arma de cada um.",
      "Na cidadela de Cossack, descobre que o cientista foi obrigado a lutar porque o Dr. Wily sequestrou sua filha, Kalinka. Depois do resgate, a última fase é a fortaleza de Wily. É o primeiro jogo com o Mega Buster carregado."
    ],
    imagens: ["Seleção de chefes", "Fase do Pharaoh Man", "Cidadela de Cossack", "Fortaleza de Wily"],
    duvidas: [
      { pergunta: "Qual a ordem dos chefes?", chaves: ["ordem", "chefes", "robot master", "fraqueza"], resposta: "Uma ordem comum é: Toad Man, Bright Man, Pharaoh Man, Ring Man, Dust Man, Skull Man, Dive Man e Drill Man. Cada um é fraco contra a arma do anterior." },
      { pergunta: "Qual a fraqueza do Toad Man?", chaves: ["toad", "sapo"], resposta: "Drill Bomb. Mas ele também é fácil de vencer só com o Mega Buster: atire antes dele começar a dança da chuva." },
      { pergunta: "Como carregar o tiro?", chaves: ["carregar", "mega buster", "tiro carregado"], resposta: "Segure o botão de tiro por alguns segundos e solte. O tiro carregado causa bem mais dano." }
    ],
    assistente: [
      { pergunta: "Qual a fraqueza de cada chefe?", chaves: ["fraqueza", "bright", "pharaoh", "ring", "dust", "skull", "dive", "drill"], resposta: "Bright Man: Rain Flush. Pharaoh Man: Flash Stopper. Ring Man: Pharaoh Shot. Dust Man: Ring Boomerang. Skull Man: Dust Crusher. Dive Man: Skull Barrier. Drill Man: Dive Missile. Toad Man: Drill Bomb." },
      { pergunta: "Para que serve o E-Tank?", chaves: ["e-tank", "etank", "tanque", "energia"], resposta: "Ele recupera toda a vida do Mega Man. Guarde para os chefes da fortaleza do Wily." },
      { pergunta: "O que é o Rush?", chaves: ["rush", "cachorro", "rush coil", "rush jet", "rush marine"], resposta: "É o cachorro robô do Mega Man. O Rush Coil vem desde o começo, e os outros modos são liberados ao longo do jogo." },
      { pergunta: "Quem sequestrou a Kalinka?", chaves: ["kalinka", "cossack", "historia"], resposta: "Foi o Dr. Wily. Ele obrigou o Dr. Cossack a atacar a cidade. O Proto Man resgata a menina." },
      { pergunta: "Quantas fases o jogo tem?", chaves: ["quantas fases", "fases", "quantos chefes"], resposta: "São oito fases de Robot Masters, depois a cidadela do Dr. Cossack e por último a fortaleza do Dr. Wily." },
      { pergunta: "Tem itens escondidos?", chaves: ["escondido", "itens", "wire", "balloon"], resposta: "Sim. Algumas fases escondem itens de apoio, como o Wire e o Balloon, que ajudam a alcançar lugares altos." },
      { pergunta: "Quem é o Proto Man?", chaves: ["proto man", "protoman", "irmao"], resposta: "É o primeiro robô criado pelo Dr. Light, uma espécie de irmão mais velho do Mega Man." },
      { pergunta: "Quem é o Eddie?", chaves: ["eddie", "flip-top", "caixinha"], resposta: "É um robozinho que aparece em algumas fases e solta um item para você. Ele estreou neste jogo." },
      { pergunta: "Qual o nome do Mega Man no Japão?", chaves: ["rock", "roll", "japao", "nome japones", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "Lá ele se chama Rock, e a irmã se chama Roll. Juntos: rock and roll." },
      { pergunta: "Quem é o Dr. Light?", chaves: ["dr light", "light", "criador"], resposta: "É o cientista que criou o Mega Man e que ele defende contra os ataques do Wily e do Cossack." },
      { pergunta: "O jogo tem senha?", chaves: ["senha", "password", "continuar"], resposta: "Tem. Em vez de salvar, o jogo dá uma senha em forma de grade de pontos para você continuar depois." },
      { pergunta: "Quem criou os Robot Masters?", chaves: ["quem criou", "concurso", "fas criaram", "desenho", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Curiosidade: a Capcom fez concursos com os fãs, e os chefes do Mega Man 4 vieram de desenhos enviados por eles." },
      { pergunta: "Como passar dos espinhos?", chaves: ["espinho", "espinhos"], resposta: "Espinhos matam na hora. Use o Rush Coil ou o Rush Jet para passar por cima, ou espere o ritmo certo das plataformas." },
      { pergunta: "Qual a arma mais útil?", chaves: ["melhor arma", "arma mais util", "pharaoh shot"], resposta: "Muita gente considera a Pharaoh Shot a mais útil: dá para carregar e mirar em várias direções." },
<<<<<<< HEAD
      { pergunta: "Quem é o Dr. Wily?", chaves: ["wily", "dr wily", "cientista malvado"], resposta: "É o cientista rival do Dr. Light e o vilão de quase todos os Mega Man clássicos." },
      { pergunta: "Quem é o Dr. Cossack?", chaves: ["quem e o cossack", "dr cossack", "russo"], resposta: "É o cientista russo que parece ser o vilão no começo. Ele só atacou porque o Dr. Wily sequestrou a filha dele, a Kalinka." }
=======
      { pergunta: "Quem é o Dr. Wily?", chaves: ["wily", "dr wily", "cientista malvado"], resposta: "É o cientista rival do Dr. Light e o vilão de quase todos os Mega Man clássicos." }
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    ]
  },
  {
    id: "ff1",
    nome: "Final Fantasy",
    apelidos: ["final fantasy 1", "final fantasy i", "ff1", "primeiro final fantasy"],
    console: "NES",
    ano: 1987,
    empresa: "Square",
    genero: "RPG",
    cor: "#3A3F8F",
    capa: "FINAL FANTASY",
<<<<<<< HEAD
    musica: { arquivo: "audio/ff1.mp3", titulo: "Matoya's Cave (versão Pixel Remaster)" },
=======
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    vilao: "Garland, que no fim vira Chaos",
    personagens: ["os quatro Guerreiros da Luz", "Garland", "Bahamut", "os Demônios Elementais"],
    piadas: ["Quatro guerreiros sem nome escolhidos pela profecia. Igual time de várzea: aparece quem tá disponível.", "O Garland ficou preso num ciclo de 2000 anos. Eu fico preso é no ciclo de acordar, trabalhar e dormir.", "O Black Mage tem um chapéu enorme e um rosto que ninguém vê. Mistério maior que o meu saldo no fim do mês."],
    prologo: "O mundo está mergulhado em trevas e os quatro orbes elementais perderam o brilho. Uma antiga profecia diz que quatro Guerreiros da Luz vão aparecer para salvar o mundo.",
    historia: [
      "Os quatro guerreiros chegam ao reino de Cornelia, resgatam a princesa das mãos do cavaleiro Garland e partem para devolver a luz aos orbes.",
      "Para isso, enfrentam os quatro Demônios Elementais: Lich, Marilith, Kraken e Tiamat. No fim, descobrem que Garland viajou dois mil anos para o passado e se tornou Chaos."
    ],
    imagens: ["Cornelia", "Navio", "Templo do Caos", "Batalha"],
    duvidas: [
      { pergunta: "Quais classes escolher?", chaves: ["classe", "classes", "grupo", "time"], resposta: "Você escolhe 4 entre 6 classes: Warrior, Thief, Monk, Red Mage, White Mage e Black Mage. Um grupo equilibrado é Warrior, Monk, White Mage e Black Mage." },
      { pergunta: "Como melhorar as classes?", chaves: ["promoção", "promocao", "rat’s tail", "rabo", "bahamut", "upgrade"], resposta: "Pegue o Rat’s Tail no Castle of Ordeals e leve ao dragão Bahamut. Ele promove todos os personagens para as classes avançadas." },
      { pergunta: "Como conseguir o navio?", chaves: ["navio", "barco", "piratas", "bikke"], resposta: "Em Pravoka, derrote o pirata Bikke e seu bando. Ele entrega o navio." }
    ],
    assistente: [
      { pergunta: "Como conseguir a canoa?", chaves: ["canoa", "rio"], resposta: "Fale com o sábio em Crescent Lake depois de derrotar o Lich. Ele entrega a canoa." },
      { pergunta: "Como conseguir a aeronave?", chaves: ["aeronave", "airship", "floater", "voar", "deserto"], resposta: "Pegue o Floater na Ice Cave e use no deserto ao sul de Crescent Lake. A aeronave sobe da areia." },
      { pergunta: "Como comprar magias?", chaves: ["magia", "magias", "comprar magia"], resposta: "Magias são compradas em lojas. Cada mago só aprende três magias de cada nível, então escolha bem." },
      { pergunta: "Como voltar ao passado no final?", chaves: ["passado", "templo do caos", "alaude", "lute"], resposta: "Com os quatro orbes acesos, use o Alaúde na entrada do Templo do Caos. Ele leva ao passado, onde está o Garland." },
      { pergunta: "Como salvar o jogo?", chaves: ["salvar", "save", "pousada", "estalagem"], resposta: "Nas estalagens das cidades. No mapa, também dá para salvar usando tenda ou cabana." },
      { pergunta: "Como acordar o príncipe elfo?", chaves: ["principe", "elfo", "acordar", "matoya"], resposta: "Devolva o cristal (o olho) para a bruxa Matoya. Ela dá a erva que acorda o príncipe." },
      { pergunta: "Para que serve a Mystic Key?", chaves: ["mystic key", "chave", "porta trancada"], resposta: "Ela abre as portas trancadas que você encontrou pelo caminho." },
      { pergunta: "Por que o jogo se chama Final Fantasy?", chaves: ["por que final fantasy", "nome do jogo", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "Conta a história mais famosa que Hironobu Sakaguchi pensava em largar os games se o jogo fracassasse. A versão é bem difundida, mas existem outras explicações para o nome." },
      { pergunta: "Como vencer o chefe final?", chaves: ["chefe final", "chaos", "ultimo chefe"], resposta: "O chefe final é o Chaos, no Templo do Caos do passado. Ele usa magias fortes, então chegue com o grupo em nível alto, use magias de proteção e mantenha alguém curando." },
      { pergunta: "Qual a fraqueza dos Demônios Elementais?", chaves: ["fraqueza", "lich", "marilith", "kraken", "tiamat"], resposta: "Lich é fraco contra fogo, Marilith contra gelo e Kraken contra raio. Tiamat não tem fraqueza marcada." },
      { pergunta: "O que é o loop do Garland?", chaves: ["loop", "ciclo", "2000 anos", "garland", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "O Garland mandou os Demônios Elementais ao futuro, e eles o mandam de volta ao passado, num ciclo de 2000 anos que o mantém vivo como Chaos. Os heróis quebram esse ciclo." },
      { pergunta: "Onde fica o Lich?", chaves: ["lich", "caverna da terra", "earth cave"], resposta: "No fundo da Caverna da Terra. Leve magias de fogo, porque ele é fraco contra fogo." },
<<<<<<< HEAD
      { pergunta: "Quem é o Astos?", chaves: ["astos", "coroa", "elfo negro"], resposta: "É o rei dos elfos negros. Ele engana o grupo pedindo uma coroa e depois revela quem é de verdade." },
      { pergunta: "Qual música do jogo eu posso ouvir aqui?", chaves: ["musica do jogo", "trilha sonora", "trilha", "ouvir", "tocar musica"], resposta: "Aqui no site dá para ouvir Matoya's Cave. É só clicar no botão da nota musical, no canto inferior direito da tela." },
      { pergunta: "Onde fica Pravoka?", chaves: ["pravoka", "cidade do porto"], resposta: "É a cidade portuária a leste de Cornelia, do outro lado da ponte. É lá que estão os piratas do Bikke." },
      { pergunta: "Quem é o Bikke?", chaves: ["bikke", "pirata"], resposta: "É o capitão pirata que aterroriza Pravoka. Depois de perder a luta, ele entrega o navio para o grupo." },
      { pergunta: "Quem é a Matoya?", chaves: ["matoya", "bruxa", "vassoura"], resposta: "É uma bruxa cega que mora numa caverna ao norte de Pravoka, cercada de vassouras que falam. Ela perdeu o cristal, o olho dela, e em troca dá a erva que acorda o príncipe elfo." },
      { pergunta: "Quem compôs a música do Final Fantasy?", chaves: ["quem compos", "compositor", "uematsu"], resposta: "Nobuo Uematsu, que depois fez a trilha de vários outros Final Fantasy." }
=======
      { pergunta: "Quem é o Astos?", chaves: ["astos", "coroa", "elfo negro"], resposta: "É o rei dos elfos negros. Ele engana o grupo pedindo uma coroa e depois revela quem é de verdade." }
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    ]
  },
  {
    id: "ff7",
    nome: "Final Fantasy VII",
    apelidos: ["final fantasy 7", "final fantasy vii", "ff7", "ffvii"],
    console: "PlayStation",
    ano: 1997,
    empresa: "Square",
    genero: "RPG",
    cor: "#2F4F6F",
    capa: "FINAL FANTASY VII",
    vilao: "Sephiroth, com a Shinra como inimiga ao longo da história",
    personagens: ["Cloud", "Tifa", "Barret", "Aerith", "Red XIII", "Yuffie", "Cait Sith", "Vincent", "Cid"],
    piadas: ["O Cloud diz que não tem interesse em nada, mas carrega uma espada do tamanho de uma porta. Interesse em academia ele tem.", "Até hoje tem guri esperando um jeito de reviver a Aerith. Eu também tô esperando, bah.", "O Barret tem uma metralhadora no braço e mesmo assim é o pai mais carinhoso do jogo."],
    prologo: "Em Midgar, a empresa Shinra suga a energia vital do planeta, a Mako, com seus reatores. Cloud Strife, ex-SOLDIER, aceita um serviço do grupo rebelde AVALANCHE para explodir um desses reatores.",
    historia: [
      "O que começa como um ataque à Shinra vira uma perseguição a Sephiroth, um lendário SOLDIER que quer usar a Black Materia para invocar o Meteoro e se tornar um deus.",
      "Ao lado de Tifa, Barret, Aerith e outros aliados, Cloud viaja pelo mundo e descobre a verdade sobre o próprio passado."
    ],
    imagens: ["Midgar", "Gold Saucer", "Cidade dos Antigos", "Cratera do Norte"],
    duvidas: [
      { pergunta: "Como conseguir a Knights of the Round?", chaves: ["knights", "round", "invocação", "invocacao", "knights of the round"], resposta: "Fica numa ilha a nordeste do mapa, que só dá para alcançar com o chocobo dourado." },
      { pergunta: "Como recrutar o Vincent?", chaves: ["vincent", "mansão", "mansao", "caixao", "caixão"], resposta: "Na mansão Shinra, em Nibelheim, abra o cofre (é preciso descobrir a combinação) para pegar a chave do porão. O Vincent está dormindo num caixão lá embaixo." },
      { pergunta: "Como recrutar a Yuffie?", chaves: ["yuffie", "ninja"], resposta: "Ela aparece em batalhas aleatórias nas florestas. Depois de vencer, não salve antes de falar com ela e responda as perguntas de forma que ela aceite ir junto." }
    ],
    assistente: [
      { pergunta: "Como conseguir o chocobo dourado?", chaves: ["chocobo dourado", "gold chocobo", "chocobo", "cruzar"], resposta: "Cruzando chocobos na fazenda: azul com verde dá um preto (usando noz Carob), e o preto com um chocobo 'wonderful' dá o dourado (usando noz Zeio)." },
      { pergunta: "Dá pra salvar a Aerith?", chaves: ["aerith", "salvar aerith", "reviver"], resposta: "Não. A morte dela faz parte da história e não muda com nenhuma escolha." },
      { pergunta: "Onde pegar o Omnislash?", chaves: ["omnislash", "limite", "limit break"], resposta: "É o último limite do Cloud. Troque pontos de batalha no Battle Square, do Gold Saucer." },
      { pergunta: "Como enfrentar as WEAPONs opcionais?", chaves: ["weapon", "ruby", "emerald", "ultimate"], resposta: "Ruby e Emerald WEAPON são chefes opcionais bem difíceis. Chegue com níveis altos e matérias fortes, como Knights of the Round e Mime." },
      { pergunta: "O que é Materia?", chaves: ["materia", "magia", "magias"], resposta: "São esferas encaixadas nas armas e armaduras. Elas dão magias e habilidades e ficam mais fortes ganhando AP." },
      { pergunta: "Como funciona o Limit Break?", chaves: ["limit", "limite", "barra"], resposta: "A barra de limite enche quando o personagem toma dano. Cheia, ele pode usar um golpe especial." },
      { pergunta: "Como chegar ao Gold Saucer?", chaves: ["gold saucer", "parque", "teleferico"], resposta: "Pegue o teleférico em North Corel." },
      { pergunta: "Quantos discos o jogo tem?", chaves: ["discos", "cd", "quantos"], resposta: "Três discos na versão de PlayStation." },
      { pergunta: "Quem é o Zack?", chaves: ["zack", "soldier"], resposta: "Zack Fair era um SOLDIER e amigo do Cloud. Ele é peça-chave para entender o passado do Cloud." },
      { pergunta: "Como funciona o encontro no Gold Saucer?", chaves: ["encontro", "date", "gold saucer", "roda gigante"], resposta: "Quem acompanha o Cloud na roda-gigante depende de quanto cada personagem gosta dele, conforme suas escolhas de diálogo." },
      { pergunta: "Como pegar a Ultima Weapon do Cloud?", chaves: ["ultima weapon", "espada final", "melhor arma do cloud"], resposta: "Derrote a Ultimate WEAPON. A espada mais forte do Cloud fica com você depois da luta." },
      { pergunta: "Dá pra reviver a Aerith com algum truque?", chaves: ["reviver aerith", "truque", "boato aerith", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "É um dos boatos mais famosos dos games, mas é só boato: nunca existiu jeito oficial de trazer a Aerith de volta na versão original." },
      { pergunta: "O Cloud foi mesmo SOLDIER?", chaves: ["cloud soldier", "memoria", "foi soldier", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Atenção, spoiler: não. Boa parte das lembranças dele vinham do Zack. A verdade aparece no Lifestream." },
      { pergunta: "O que mostra a cena depois dos créditos?", chaves: ["depois dos creditos", "500 anos", "cena final", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "O Red XIII, com filhotes, olhando para as ruínas de Midgar tomadas pela natureza, 500 anos depois." },
      { pergunta: "Como funcionam as corridas de chocobo?", chaves: ["corrida", "chocobo racing"], resposta: "Ficam no Gold Saucer. Com um chocobo bem treinado, você sobe de categoria e ganha prêmios." },
      { pergunta: "Quem é o Cait Sith?", chaves: ["cait sith", "gato", "reeve"], resposta: "Atenção, spoiler: é um gato robô controlado pelo Reeve, da Shinra, que começa como espião e depois ajuda o grupo de verdade." },
      { pergunta: "A Jenova é a mãe do Sephiroth?", chaves: ["jenova", "mae do sephiroth", "lucrecia", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Ele acredita que sim, mas a mãe biológica é a cientista Lucrecia. Isso aparece numa cena opcional ligada ao Vincent." },
      { pergunta: "Quem é o Barret?", chaves: ["barret", "braco", "arma"], resposta: "É o líder do AVALANCHE, com uma arma no lugar do braço. Ele luta para dar um futuro melhor à filha, Marlene." },
<<<<<<< HEAD
      { pergunta: "Quem é a Tifa?", chaves: ["tifa", "7th heaven", "amiga de infancia"], resposta: "É a amiga de infância do Cloud, lutadora e dona do bar 7th Heaven, esconderijo do AVALANCHE." },
      { pergunta: "O FF7 saiu só para PlayStation?", chaves: ["playstation", "console", "plataforma", "porque playstation", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Curiosidade: a série era da Nintendo até então, mas a Square escolheu o PlayStation porque o CD cabia muito mais conteúdo que o cartucho do Nintendo 64." }
=======
      { pergunta: "Quem é a Tifa?", chaves: ["tifa", "7th heaven", "amiga de infancia"], resposta: "É a amiga de infância do Cloud, lutadora e dona do bar 7th Heaven, esconderijo do AVALANCHE." }
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    ]
  },
  {
    id: "dkc2",
    nome: "Donkey Kong Country 2: Diddy’s Kong Quest",
    apelidos: ["donkey kong", "dkc2", "diddy"],
    console: "Super Nintendo",
    ano: 1995,
    empresa: "Rare",
    genero: "Plataforma",
    cor: "#7A4A1E",
    capa: "DONKEY KONG COUNTRY 2",
    vilao: "Kaptain K. Rool",
    personagens: ["Diddy Kong", "Dixie Kong", "Cranky Kong", "Funky Kong", "Wrinkly Kong", "Swanky Kong"],
    piadas: ["O Donkey Kong foi sequestrado e quem foi salvar foi o sobrinho com a namorada. Família boa é assim.", "O Cranky cobra pelas dicas. Esse aí entendeu o mercado antes de todo mundo.", "A Dixie gira o cabelo e plana. Eu giro o cabelo e só fico tonto."],
    prologo: "Kaptain K. Rool sequestrou Donkey Kong e levou para a Crocodile Isle. Diddy e a namorada, Dixie, partem para resgatá-lo.",
    historia: [
      "A dupla atravessa navios piratas, vulcões, pântanos e um parque de diversões abandonado, cada mundo com um chefe no fim.",
      "Dixie consegue planar girando o rabo de cavalo e Diddy é mais rápido. No fim, eles enfrentam K. Rool na nave Flying Krock."
    ],
    imagens: ["Gangplank Galleon", "Crocodile Cauldron", "Krazy Kremland", "Flying Krock"],
    duvidas: [
      { pergunta: "Para que servem as Kremkoins?", chaves: ["kremkoin", "kremkoins", "klubba", "lost world", "mundo perdido"], resposta: "Elas ficam nas fases bônus. Entregue a Klubba para abrir o caminho até o Lost World, o mundo secreto." },
      { pergunta: "Como chegar a 102%?", chaves: ["102", "100", "porcentagem", "completar"], resposta: "É preciso passar todas as fases, achar todas as fases bônus e derrotar o chefe do Lost World." },
      { pergunta: "Onde ficam as DK Coins?", chaves: ["dk coin", "moeda", "moedas"], resposta: "Há uma moeda DK grande escondida em cada fase. Elas contam no ranking do Cranky." }
    ],
    assistente: [
      { pergunta: "Quem são os animais ajudantes?", chaves: ["animal", "animais", "rambi", "squawks", "enguarde", "squitter", "rattly"], resposta: "Rambi (rinoceronte), Squawks (papagaio), Enguarde (peixe-espada), Squitter (aranha) e Rattly (cobra). Cada um aparece em fases específicas." },
      { pergunta: "Para que serve o Funky?", chaves: ["funky", "viajar", "avião"], resposta: "O Funky's Flights leva a dupla de volta a mundos já visitados." },
      { pergunta: "Como salvar o jogo?", chaves: ["salvar", "save", "wrinkly", "kong kollege"], resposta: "Salve no Kong Kollege da Wrinkly. Depois do primeiro save, cada salvamento custa moedas banana." },
      { pergunta: "Como derrotar o K. Rool?", chaves: ["k. rool", "k rool", "chefe final", "rool"], resposta: "Quando ele atirar, pegue a bala de canhão que cair e arremesse de volta no bacamarte dele." },
      { pergunta: "Como jogar um Kong no outro?", chaves: ["jogar", "arremessar", "carregar", "team"], resposta: "Aperte o botão de troca para um Kong subir no outro. Assim dá para arremessar o parceiro em inimigos ou em lugares altos." },
      { pergunta: "Para que serve o barril de estrela?", chaves: ["barril", "estrela", "checkpoint", "meio da fase"], resposta: "É o ponto de controle. Se você perder, volta dali." },
      { pergunta: "Quem são o Cranky e o Swanky?", chaves: ["cranky", "swanky", "quiz"], resposta: "O Cranky dá dicas em troca de moedas banana. O Swanky apresenta um jogo de perguntas com prêmios." },
      { pergunta: "O Cranky é o Donkey Kong original?", chaves: ["cranky", "original", "avo", "arcade", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "Pela história contada pela Rare, sim: o Cranky seria o Donkey Kong do fliperama de 1981, e o Donkey Kong atual seria neto dele." },
      { pergunta: "Por que os gráficos parecem 3D?", chaves: ["graficos", "3d", "pre-renderizado", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Curiosidade: a Rare criou os modelos em 3D em computadores potentes e transformou tudo em imagens 2D para o Super Nintendo." },
      { pergunta: "Quem fez a trilha sonora?", chaves: ["trilha", "musica", "david wise", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "O compositor principal é David Wise. A trilha é considerada uma das melhores do Super Nintendo." },
      { pergunta: "Quem é o Klubba?", chaves: ["klubba", "quiosque", "pedagio"], resposta: "É o Kremling grandalhão que guarda o caminho para o Lost World. Ele cobra Kremkoins para deixar você passar." },
      { pergunta: "Quem é a Dixie?", chaves: ["dixie", "namorada", "planar"], resposta: "É a namorada do Diddy. Ela gira o rabo de cavalo para planar e ainda dá para usar o cabelo como arma." },
      { pergunta: "Quem é o Kaptain K. Rool?", chaves: ["kaptain", "k rool", "pirata"], resposta: "É o Rei K. Rool vestido de pirata. Ele sequestra o Donkey Kong e é o chefe final." },
<<<<<<< HEAD
      { pergunta: "Como ganhar vidas?", chaves: ["vida", "vidas", "balao", "kong"], resposta: "Pegue os balões vermelhos e junte as letras K-O-N-G em cada fase. As bananas também dão vida a cada 100." },
      { pergunta: "Quem é o Funky Kong?", chaves: ["funky", "surfista", "aviao"], resposta: "É o Kong surfista que tem um serviço de voo. Com ele, a dupla viaja para mundos já visitados." }
=======
      { pergunta: "Como ganhar vidas?", chaves: ["vida", "vidas", "balao", "kong"], resposta: "Pegue os balões vermelhos e junte as letras K-O-N-G em cada fase. As bananas também dão vida a cada 100." }
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    ]
  },
  {
    id: "s3k",
    nome: "Sonic 3 & Knuckles",
    apelidos: ["sonic"],
    console: "Mega Drive",
    ano: 1994,
    empresa: "Sega",
    genero: "Plataforma",
    cor: "#1E5FB3",
    capa: "SONIC 3 & KNUCKLES",
<<<<<<< HEAD
    musica: { arquivo: "audio/s3k.mp3", titulo: "The Doomsday Zone" },
=======
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    vilao: "o Dr. Robotnik",
    personagens: ["Sonic", "Tails", "Knuckles", "Dr. Robotnik"],
    piadas: ["O Knuckles caiu na conversa do Robotnik. Esse aí comprava até terreno na lua.", "O jogo veio dividido em dois cartuchos. Igual eu no fim do mês: metade num lugar, metade no outro.", "O Robotnik faz um robô gigante por jogo. Com esse dinheiro já tinha comprado a ilha."],
    prologo: "Depois de Sonic 2, a nave Death Egg caiu na Angel Island. O Dr. Robotnik engana Knuckles, guardião da ilha, dizendo que Sonic quer roubar a Master Emerald.",
    historia: [
      "Sonic e Tails atravessam as zonas da ilha enquanto Knuckles atrapalha o caminho. Com o tempo, Knuckles descobre que foi enganado.",
      "A combinação dos dois cartuchos junta as duas metades da história e adiciona a campanha do Knuckles."
    ],
    imagens: ["Angel Island", "Hydrocity", "Special Stage", "Death Egg"],
    duvidas: [
      { pergunta: "Como entrar nos Special Stages?", chaves: ["special stage", "esmeralda", "esmeraldas", "anel gigante"], resposta: "Procure os anéis gigantes escondidos nas fases e pule dentro deles. Em cada special stage você ganha uma Esmeralda do Caos." },
      { pergunta: "Como virar Hyper Sonic?", chaves: ["hyper", "super emerald", "super esmeralda", "hidden palace"], resposta: "Depois das 7 Esmeraldas do Caos, novos special stages aparecem. Leve as esmeraldas ao Hidden Palace para transformá-las em Super Esmeraldas." },
      { pergunta: "Como chegar à Doomsday Zone?", chaves: ["doomsday", "final verdadeiro"], resposta: "Jogando com o Sonic, consiga todas as Super Esmeraldas. A Doomsday Zone aparece depois da última fase." }
    ],
    assistente: [
      { pergunta: "Para que servem os escudos?", chaves: ["escudo", "escudos", "fogo", "agua", "raio", "bolha"], resposta: "O de fogo dá uma arrancada no ar, o de água faz quicar e respirar embaixo d'água, e o de raio dá pulo duplo e puxa anéis. Aperte pulo duas vezes no ar." },
      { pergunta: "Como passar o barril da Carnival Night?", chaves: ["barril", "carnival night", "carnival"], resposta: "Fique em cima do barril e aperte para cima e para baixo no ritmo. Ele vai balançando até descer." },
      { pergunta: "Como entrar nos bônus de estrelas?", chaves: ["bonus", "estrela", "checkpoint"], resposta: "Passe por um checkpoint com 50 anéis ou mais. Surgem estrelas girando: pule nelas." },
      { pergunta: "Como jogar com o Knuckles?", chaves: ["knuckles", "jogar com", "personagem"], resposta: "Na tela de seleção do jogo salvo, escolha o Knuckles. Ele plana e escala paredes, e passa por caminhos diferentes." },
      { pergunta: "Como fazer o spin dash?", chaves: ["spin dash", "arrancada", "carregar"], resposta: "Segure para baixo, aperte pulo algumas vezes e solte o direcional." },
      { pergunta: "Como virar Super Sonic?", chaves: ["super sonic", "dourado", "amarelo"], resposta: "Junte as 7 Esmeraldas do Caos, tenha 50 anéis e aperte pulo duas vezes no ar." },
      { pergunta: "Como o Tails voa?", chaves: ["tails", "voar", "segundo jogador"], resposta: "Jogando com o Tails, pule e aperte pulo de novo. Com dois controles, o segundo jogador controla ele." },
      { pergunta: "Quem é o Knuckles?", chaves: ["knuckles", "equidna", "guardiao"], resposta: "É o guardião da Master Emerald, enganado pelo Robotnik no começo da história." },
      { pergunta: "O Michael Jackson fez música para o Sonic 3?", chaves: ["michael jackson", "musica", "trilha", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "É uma das histórias mais famosas dos games. A Sega nunca confirmou oficialmente, mas músicos que trabalharam com ele já disseram que ele participou da trilha." },
      { pergunta: "Por que o jogo veio em dois cartuchos?", chaves: ["dois cartuchos", "dividido", "cartucho", "lock-on", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "O jogo ficou grande e caro demais para um cartucho só e foi dividido. O cartucho do Sonic & Knuckles encaixa em cima do Sonic 3 e junta as duas partes." },
      { pergunta: "O Tails e o Knuckles têm forma Super?", chaves: ["super tails", "hyper knuckles", "super knuckles"], resposta: "Têm. Com as Super Esmeraldas, o Tails vira Super Tails e o Knuckles vira Hyper Knuckles." },
      { pergunta: "O Knuckles é o último da espécie?", chaves: ["ultimo equidna", "equidna", "especie", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Pela história da série, ele é o último descendente do povo equidna que vivia na Angel Island." },
      { pergunta: "Qual a primeira fase?", chaves: ["primeira fase", "primeira zona", "angel island"], resposta: "A Angel Island Zone, uma floresta que pega fogo no meio da fase." },
      { pergunta: "Quem é o Tails?", chaves: ["tails", "raposa"], resposta: "É a raposa de duas caudas, amigo do Sonic. Ele gira as caudas para voar e carregar o Sonic." },
<<<<<<< HEAD
      { pergunta: "O que é o Hidden Palace?", chaves: ["hidden palace", "templo"], resposta: "É o templo da Master Emerald, escondido na Angel Island. É lá que as esmeraldas viram Super Esmeraldas." },
      { pergunta: "Sonic 3 saiu no Brasil?", chaves: ["brasil", "tectoy"], resposta: "Saiu. No Brasil, os jogos e o Mega Drive eram distribuídos pela Tectoy." },
      { pergunta: "Qual música do jogo eu posso ouvir aqui?", chaves: ["musica do jogo", "trilha sonora", "trilha", "ouvir", "tocar musica"], resposta: "Aqui no site dá para ouvir The Doomsday Zone. É só clicar no botão da nota musical, no canto inferior direito da tela." },
      { pergunta: "Quem compôs a música do Sonic 3?", chaves: ["compos", "compositor", "musica do sonic"], resposta: "A trilha teve vários compositores da Sega e de fora. Existe uma história famosa de que o Michael Jackson participou, mas a Sega nunca confirmou oficialmente." }
=======
      { pergunta: "O que é o Hidden Palace?", chaves: ["hidden palace", "templo"], resposta: "É o templo da Master Emerald, escondido na Angel Island. É lá que as esmeraldas viram Super Esmeraldas." }
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    ]
  },
  {
    id: "starfox",
    nome: "Star Fox",
    apelidos: ["star fox", "starfox"],
    console: "Super Nintendo",
    ano: 1993,
    empresa: "Nintendo",
    genero: "Tiro em 3D",
    cor: "#3E4A63",
    capa: "STAR FOX",
    vilao: "Andross",
    personagens: ["Fox McCloud", "Falco", "Peppy", "Slippy", "General Pepper", "Andross"],
    piadas: ["O Peppy dá conselho o tempo inteiro. É o tio do churrasco, só que no espaço.", "O Slippy vive sendo perseguido. Mais fácil ele dirigir um Uno do que uma Arwing.", "O Slippy pede socorro mais que eu ligando pro suporte da internet."],
    prologo: "O cientista Andross foi expulso de Corneria e agora ataca o sistema Lylat do planeta Venom. O General Pepper chama a equipe Star Fox.",
    historia: [
      "Fox McCloud, Falco, Peppy e Slippy pilotam as naves Arwing por planetas e campos de asteroides até chegar a Venom.",
      "Foi um dos primeiros jogos em 3D poligonal no console, graças ao chip Super FX dentro do cartucho."
    ],
    imagens: ["Corneria", "Campo de asteroides", "Sector X", "Venom"],
    duvidas: [
      { pergunta: "Qual rota escolher?", chaves: ["rota", "dificuldade", "nivel", "nível", "caminho"], resposta: "O jogo tem três rotas: a 1 é a mais fácil, a 2 é média e a 3 é a mais difícil. Todas terminam em Venom." },
      { pergunta: "Como girar a nave?", chaves: ["girar", "barrel roll", "rolar"], resposta: "Aperte L ou R duas vezes rápido. O giro desvia alguns tiros." },
      { pergunta: "Por que meus colegas sumiram?", chaves: ["colega", "falco", "peppy", "slippy", "equipe"], resposta: "Se um colega perder toda a energia, ele sai da missão por um tempo. Atire nos inimigos que estão perseguindo eles." }
    ],
    assistente: [
      { pergunta: "Como recuperar o escudo?", chaves: ["escudo", "energia", "vida", "anel"], resposta: "Passe pelos anéis de suprimento e pegue os itens que aparecem quando você destrói certos inimigos." },
      { pergunta: "Como ter tiro duplo?", chaves: ["tiro duplo", "laser", "twin"], resposta: "Pegue o item de laser azul. Ele melhora o tiro da Arwing." },
      { pergunta: "Como usar as bombas?", chaves: ["bomba", "bombas", "nova"], resposta: "As bombas são limitadas e causam muito dano em área. Guarde para chefes ou grupos grandes." },
      { pergunta: "Quem é o Andross?", chaves: ["andross", "chefe final", "venom"], resposta: "É o cientista que foi exilado em Venom e comanda o ataque ao sistema Lylat. É o chefe final das três rotas." },
      { pergunta: "O que é o chip Super FX?", chaves: ["super fx", "chip", "3d", "graficos"], resposta: "É um chip dentro do cartucho que permitiu os gráficos em 3D no Super Nintendo." },
      { pergunta: "Quem são os pilotos?", chaves: ["pilotos", "equipe", "time"], resposta: "Fox McCloud lidera, com Falco, Peppy e Slippy nas outras Arwings." },
      { pergunta: "Quem é cada piloto?", chaves: ["fox", "falco", "peppy", "slippy", "raposa", "sapo", "coelho"], resposta: "Fox é a raposa líder, Falco é o falcão, Peppy é o coelho veterano e Slippy é o sapo mecânico da equipe." },
      { pergunta: "Existe Star Fox 2?", chaves: ["star fox 2", "continuacao", "cancelado"], resposta: "Foi feito para o Super Nintendo, mas cancelado na época. Só saiu oficialmente em 2017, no Super Nintendo Classic." },
      { pergunta: "De onde veio a ideia da raposa?", chaves: ["raposa", "ideia", "inspiracao", "fushimi", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "Curiosidade: o Miyamoto se inspirou no santuário Fushimi Inari, em Kyoto, cheio de estátuas de raposa e portões em sequência, como os arcos que a nave atravessa." },
      { pergunta: "O que é a Arwing?", chaves: ["arwing", "nave"], resposta: "É a nave usada pela equipe Star Fox. Ela atira lasers, solta bombas e gira para desviar de ataques." },
      { pergunta: "Quem fez o Star Fox com a Nintendo?", chaves: ["argonaut", "quem fez", "desenvolvido", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Curiosidade: a britânica Argonaut ajudou a desenvolver o jogo e o chip Super FX." },
      { pergunta: "Como vencer o Andross?", chaves: ["andross", "chefe final"], resposta: "Ataque os pontos que ficam expostos quando ele abre o rosto e desvie das peças que ele lança. Bombas ajudam muito." },
      { pergunta: "Quem é o General Pepper?", chaves: ["pepper", "general"], resposta: "É o comandante do exército de Corneria, que chama a equipe Star Fox para enfrentar o Andross." },
<<<<<<< HEAD
      { pergunta: "Quem é o Falco?", chaves: ["falco", "falcao"], resposta: "É o falcão da equipe, o piloto mais habilidoso e mais convencido do grupo." },
      { pergunta: "Quem é o Peppy?", chaves: ["quem e o peppy", "coelho", "veterano"], resposta: "É o coelho veterano da equipe, o mais experiente. Ele vive dando conselhos durante as fases." }
=======
      { pergunta: "Quem é o Falco?", chaves: ["falco", "falcao"], resposta: "É o falcão da equipe, o piloto mais habilidoso e mais convencido do grupo." }
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    ]
  },
  {
    id: "smetroid",
    nome: "Super Metroid",
    apelidos: ["metroid"],
    console: "Super Nintendo",
    ano: 1994,
    empresa: "Nintendo",
    genero: "Ação e exploração",
    cor: "#7A2E2E",
    capa: "SUPER METROID",
    vilao: "a Mother Brain, com Ridley e os Piratas Espaciais",
    personagens: ["Samus Aran", "Ridley", "Kraid", "Mother Brain", "o filhote de Metroid"],
    piadas: ["A Samus passa o jogo sozinha num planeta cheio de monstro e ninguém pergunta se ela tá bem.", "O filhote de Metroid acha que a Samus é mãe dele. Pelo menos não pede mesada.", "Quando a Samus tirou a armadura, ninguém se surpreendeu com a competência. Só com o cabelo."],
    prologo: "Samus Aran entrega o último filhote de Metroid para cientistas na colônia espacial Ceres. Pouco depois, ela recebe um pedido de socorro: Ridley atacou a estação e roubou o filhote.",
    historia: [
      "Samus segue Ridley até o planeta Zebes, onde os Piratas Espaciais reconstruíram a base.",
      "Ela explora o planeta, ganha melhorias na armadura e enfrenta os chefes até o confronto final com a Mother Brain."
    ],
    imagens: ["Estação Ceres", "Crateria", "Norfair", "Tourian"],
    duvidas: [
      { pergunta: "Como fazer o wall jump?", chaves: ["wall jump", "parede", "pular parede"], resposta: "Dê um pulo girando na direção da parede, aperte o direcional para o lado contrário e pule de novo no momento em que encostar. Os bichinhos Etecoons mostram o movimento." },
      { pergunta: "Como fazer o Shinespark?", chaves: ["shinespark", "speed booster", "carregar"], resposta: "Com o Speed Booster, corra até brilhar e aperte para baixo. Depois pule em qualquer direção." },
      { pergunta: "Como salvar os animais no final?", chaves: ["animais", "etecoons", "dachora", "final"], resposta: "Na fuga final, volte à sala onde estão os Etecoons e a Dachora e abra o caminho para eles antes de ir para a nave." }
    ],
    assistente: [
      { pergunta: "Onde fica o Varia Suit?", chaves: ["varia", "traje", "calor"], resposta: "Fica no Brinstar, depois de derrotar o Kraid. Ele protege do calor de Norfair." },
      { pergunta: "Onde fica o Grapple Beam?", chaves: ["grapple", "gancho"], resposta: "Em Norfair, depois de derrotar o Crocomire." },
      { pergunta: "Como derrotar o Draygon?", chaves: ["draygon", "maridia"], resposta: "Quando ele te agarrar, use o Grapple Beam nos canhões elétricos das paredes. A descarga passa para ele." },
      { pergunta: "Como vencer a Mother Brain?", chaves: ["mother brain", "chefe final", "tourian"], resposta: "Na última fase da luta, o Metroid gigante aparece para ajudar e a Samus ganha o Hyper Beam." },
      { pergunta: "Como salvar o jogo?", chaves: ["salvar", "save", "estacao"], resposta: "Use as estações de salvamento espalhadas pelo planeta. Também dá para salvar na nave." },
      { pergunta: "Como abrir as portas coloridas?", chaves: ["porta", "portas", "vermelha", "verde", "amarela"], resposta: "Azul abre com tiro, vermelha com cinco mísseis, verde com um super míssil e amarela com uma power bomb." },
      { pergunta: "Onde fica o Morph Ball?", chaves: ["morph ball", "bola", "virar bola"], resposta: "Logo no começo, em Brinstar." },
      { pergunta: "Onde fica o Speed Booster?", chaves: ["speed booster", "correr"], resposta: "Em Norfair." },
      { pergunta: "Onde enfrento o Ridley?", chaves: ["ridley", "dragao"], resposta: "No covil dele, na parte mais funda de Norfair." },
      { pergunta: "Onde fica o Screw Attack?", chaves: ["screw attack", "pulo giratorio"], resposta: "Na parte mais funda de Norfair." },
      { pergunta: "Onde fica o Space Jump?", chaves: ["space jump", "pulo infinito"], resposta: "Em Maridia, depois de derrotar o Draygon." },
      { pergunta: "De onde vem o nome Metroid?", chaves: ["nome", "metroid significa", "metro", "android", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "É a junção de \"metro\" com \"android\"." },
      { pergunta: "A Samus sempre foi mulher?", chaves: ["samus mulher", "mulher", "revelacao", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "Sim. No primeiro Metroid isso só era revelado no final, quando ela tirava a armadura. Foi uma das grandes surpresas dos games na época." },
      { pergunta: "Por que o filhote de Metroid segue a Samus?", chaves: ["filhote", "mae", "segue", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "No Metroid II, ele nasceu na frente da Samus e passou a acreditar que ela era a mãe dele." },
      { pergunta: "Por que o jogo é famoso em speedrun?", chaves: ["speedrun", "rapido", "zerar rapido", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Curiosidade: o mapa permite pegar itens fora de ordem e usar técnicas como o wall jump. Por isso é um dos jogos mais populares em speedrun." },
      { pergunta: "Quem é o Kraid?", chaves: ["kraid", "chefe gigante"], resposta: "É um chefe gigante que fica no fundo do Brinstar. Depois de derrotá-lo você chega ao Varia Suit." },
      { pergunta: "Quem é a Mother Brain?", chaves: ["mother brain", "cerebro"], resposta: "É o cérebro gigante que comanda os Piratas Espaciais em Zebes. Ela fica em Tourian, a última área." },
<<<<<<< HEAD
      { pergunta: "Onde fica o Plasma Beam?", chaves: ["plasma", "plasma beam"], resposta: "Em Maridia. É um dos tiros mais fortes do jogo e atravessa os inimigos." },
      { pergunta: "Quem é o Crocomire?", chaves: ["crocomire"], resposta: "É um chefe de Norfair que você empurra para trás com tiros até ele cair na lava. Depois dele você pega o Grapple Beam." }
=======
      { pergunta: "Onde fica o Plasma Beam?", chaves: ["plasma", "plasma beam"], resposta: "Em Maridia. É um dos tiros mais fortes do jogo e atravessa os inimigos." }
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    ]
  },
  {
    id: "smas",
    nome: "Super Mario All-Stars",
    apelidos: ["mario all-stars", "all-stars", "all stars", "mario bros", "mario 3", "lost levels"],
    console: "Super Nintendo",
    ano: 1993,
    empresa: "Nintendo",
    genero: "Plataforma",
    cor: "#C62B2B",
    capa: "MARIO ALL-STARS",
    vilao: "Bowser (e Wart, no Super Mario Bros. 2)",
    personagens: ["Mario", "Luigi", "Princesa Peach", "Toad", "Bowser"],
    piadas: ["O Mario já foi encanador, médico, piloto e tenista. E eu aqui sem conseguir trocar o chuveiro.", "O Mario 2 era tudo um sonho. Igual o meu plano de ficar rico na locadora.", "Os Koopalings transformam os reis em bichos. Até hoje o rei sapo cobra indenização."],
    prologo: "Coletânea com os quatro primeiros Mario do NES refeitos com gráficos e som de Super Nintendo: Super Mario Bros., The Lost Levels, Super Mario Bros. 2 e Super Mario Bros. 3.",
    historia: [
      "No primeiro jogo, Bowser sequestra a Princesa Peach. Em The Lost Levels, a história é a mesma, mas bem mais difícil. Em Super Mario Bros. 2, o vilão é Wart, no mundo de Subcon.",
      "Em Super Mario Bros. 3, os Koopalings roubam os cetros dos reis de cada mundo. A coletânea também permite salvar o progresso, o que não existia nas versões originais."
    ],
    imagens: ["Menu da coletânea", "Mundo 1-1", "Subcon", "Mundo 3"],
    duvidas: [
      { pergunta: "Onde fica a warp zone do 1-2?", chaves: ["warp", "warp zone", "1-2", "cano"], resposta: "No fim da fase 1-2, suba no teto e corra por cima até o fim. Lá estão os canos para os mundos 2, 3 e 4." },
      { pergunta: "Como pegar o primeiro apito no Mario 3?", chaves: ["apito", "whistle", "1-3"], resposta: "Na fase 1-3, fique agachado em cima do bloco branco por alguns segundos. O Mario cai atrás do cenário e chega a uma casa com o apito." },
      { pergunta: "Dá pra salvar o jogo?", chaves: ["salvar", "save"], resposta: "Sim. A coletânea salva o progresso em cada um dos quatro jogos." }
    ],
    assistente: [
      { pergunta: "Onde fica a warp zone do 4-2?", chaves: ["4-2", "warp 4", "pe de feijao", "vinha"], resposta: "Na fase 4-2, quebre os blocos do alto para fazer crescer um pé de feijão. Ele leva a uma warp zone para os mundos 6, 7 e 8." },
      { pergunta: "Como ganhar vidas infinitas no 3-1?", chaves: ["vida", "vidas", "3-1", "infinitas"], resposta: "No fim da fase 3-1, na escada, pule repetidamente no casco de um Koopa encostado no degrau." },
      { pergunta: "Qual personagem escolher no Mario 2?", chaves: ["mario 2", "personagem", "luigi", "peach", "toad"], resposta: "O Luigi pula mais alto, a Peach flutua por alguns segundos e o Toad arranca vegetais mais rápido. O Mario é equilibrado." },
      { pergunta: "Como derrotar o Wart?", chaves: ["wart", "chefe final"], resposta: "Jogue os vegetais que saem da máquina dentro da boca dele, quando ela estiver aberta." },
      { pergunta: "O que é o cogumelo venenoso?", chaves: ["venenoso", "cogumelo roxo", "lost levels"], resposta: "No The Lost Levels, o cogumelo venenoso machuca o Mario. Ele parece um power-up, então fique de olho." },
      { pergunta: "Como funcionam os apitos no Mario 3?", chaves: ["apito", "apitos", "warp whistle"], resposta: "O apito leva para a Warp Zone, de onde dá para pular para mundos mais à frente. São três no jogo." },
      { pergunta: "Como voar com o rabo de guaxinim?", chaves: ["voar", "guaxinim", "rabo", "folha"], resposta: "Corra até encher a barra P e aperte pulo várias vezes." },
      { pergunta: "Onde está o sapato do Kuribo?", chaves: ["sapato", "kuribo", "bota"], resposta: "Na fase 5-3 do Super Mario Bros. 3. É o único lugar onde aparece." },
      { pergunta: "Qual a diferença do Luigi no Lost Levels?", chaves: ["luigi", "lost levels", "pula mais"], resposta: "O Luigi pula mais alto, mas escorrega mais na hora de parar." },
      { pergunta: "Como virar estátua com o Tanooki?", chaves: ["tanooki", "estatua", "estátua"], resposta: "Com o traje Tanooki, aperte para baixo e o botão B. O Mario vira estátua e fica invencível por alguns segundos." },
      { pergunta: "O Mario 2 foi um sonho?", chaves: ["sonho", "mario 2 sonho", "diferente", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "Foi. No final do Super Mario Bros. 2, o Mario acorda na cama. O jogo é diferente porque nasceu como outro jogo no Japão, o Doki Doki Panic." },
      { pergunta: "O Mario 3 é uma peça de teatro?", chaves: ["teatro", "peca", "cortina", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Curiosidade: sim. O jogo começa com uma cortina subindo, e os blocos parecem parafusados no cenário, como num palco." },
      { pergunta: "Como chegar ao Mundo 9 do Lost Levels?", chaves: ["mundo 9", "world 9"], resposta: "Termine o Lost Levels sem usar nenhuma warp zone." },
      { pergunta: "Quem é o Wart?", chaves: ["wart", "sapo"], resposta: "É o sapo vilão do Super Mario Bros. 2. Ele odeia vegetais, e é assim que se vence ele." },
      { pergunta: "Quem são os Koopalings?", chaves: ["koopalings", "filhos do bowser"], resposta: "São sete Koopas que trabalham para o Bowser. No Mario 3, cada um toma o castelo de um mundo." }
    ]
  },
  {
    id: "earthbound",
    nome: "EarthBound",
    apelidos: ["earthbound", "earth bound"],
    console: "Super Nintendo",
    ano: 1994,
    empresa: "Nintendo / Ape",
    genero: "RPG",
    cor: "#C2577A",
    capa: "EARTHBOUND",
    vilao: "Giygas, com Pokey atrapalhando pelo caminho",
    personagens: ["Ness", "Paula", "Jeff", "Poo", "Pokey", "Buzz Buzz"],
    piadas: ["O pai do Ness só aparece pelo telefone e depositando dinheiro. Igual pai de guri que foi estudar fora.", "O Ness ataca com taco de beisebol e ioiô. Na minha época isso era o kit completo da vila.", "No EarthBound tem um táxi possuído como inimigo. Igual corrida de madrugada em dia de chuva."],
    prologo: "Um meteorito cai perto da casa de Ness, em Onett. De dentro dele sai Buzz Buzz, uma criatura do futuro que avisa: uma força chamada Giygas vai destruir o mundo.",
    historia: [
      "Ness precisa visitar oito santuários e gravar as melodias na Sound Stone. No caminho, ganha a companhia de Paula, Jeff e Poo.",
      "O jogo se passa num mundo parecido com os Estados Unidos dos anos 90, com humor estranho e inimigos como hippies e táxis possuídos."
    ],
    imagens: ["Onett", "Twoson", "Fourside", "Batalha contra Giygas"],
    duvidas: [
      { pergunta: "Como derrotar o Giygas?", chaves: ["giygas", "chefe final", "pray", "rezar"], resposta: "Na fase final, use o comando Pray da Paula várias vezes. Ataques comuns não resolvem." },
      { pergunta: "Como salvar o jogo?", chaves: ["salvar", "save", "telefone", "pai"], resposta: "Ligue para o pai do Ness em qualquer telefone. Ele salva o jogo e também deposita dinheiro na conta." },
      { pergunta: "Por que o Ness fica com saudade?", chaves: ["saudade", "homesick", "mãe", "mae"], resposta: "É o status Homesick. Ligue para a mãe do Ness para resolver." }
    ],
    assistente: [
      { pergunta: "Como derrotar o Master Belch?", chaves: ["belch", "master belch"], resposta: "Use o Fly Honey na luta. Ele fica distraído e para de se defender." },
      { pergunta: "O que é a Sound Stone?", chaves: ["sound stone", "santuario", "santuarios", "melodia"], resposta: "É a pedra que grava as melodias dos oito santuários. Juntar as oito é o objetivo principal do Ness." },
      { pergunta: "Como sair rápido de uma caverna?", chaves: ["sair", "exit mouse", "caverna", "dungeon"], resposta: "Use o Exit Mouse. Ele leva o grupo de volta à entrada." },
      { pergunta: "Onde guardo itens sobrando?", chaves: ["guardar", "inventario", "escargo"], resposta: "Ligue para o Escargo Express. Eles guardam os itens e entregam quando você pedir." },
      { pergunta: "Como ganhar dinheiro?", chaves: ["dinheiro", "grana", "caixa eletronico", "atm"], resposta: "Seu pai deposita dinheiro conforme você derrota inimigos. Saque nos caixas eletrônicos." },
      { pergunta: "Quem são os Mr. Saturn?", chaves: ["saturn", "mr saturn"], resposta: "São criaturinhas simpáticas que vivem no Saturn Valley e ajudam o grupo." },
      { pergunta: "Como curar o grupo?", chaves: ["curar", "cura", "hotel", "hospital", "vida"], resposta: "Durma nos hotéis, vá ao hospital ou use o PSI Lifeup." },
      { pergunta: "Quem é o Pokey?", chaves: ["pokey", "vizinho"], resposta: "É o vizinho do Ness, que começa como um garoto chato e acaba se aliando aos vilões." },
      { pergunta: "Por que o Jeff não usa PSI?", chaves: ["jeff", "psi", "conserta"], resposta: "O Jeff não tem poderes. Ele luta com aparelhos e itens e consegue consertar objetos quebrados." },
      { pergunta: "O que é Magicant?", chaves: ["magicant", "mente", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "É um mundo dentro da mente do Ness, que ele visita para enfrentar o lado sombrio de si mesmo." },
      { pergunta: "Por que a luta contra o Giygas é tão assustadora?", chaves: ["giygas assustador", "medo", "assustador", "trauma", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "O criador, Shigesato Itoi, contou que se inspirou numa cena de filme que o traumatizou quando era criança." },
      { pergunta: "Giygas já apareceu antes?", chaves: ["giegue", "mother 1", "giygas antes", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Sim. Ele é o Giegue do primeiro Mother, que nunca saiu oficialmente fora do Japão na época." },
      { pergunta: "Como o jogo se chama no Japão?", chaves: ["japao", "mother 2", "nome japones", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Mother 2. É a continuação do Mother, do Famicom." },
      { pergunta: "Quem é o Buzz Buzz?", chaves: ["buzz buzz", "abelha"], resposta: "É uma abelha do futuro que sai do meteorito e avisa o Ness sobre o Giygas." },
      { pergunta: "Quem é a Paula?", chaves: ["paula", "reza"], resposta: "É uma garota de Twoson com poderes psíquicos. O comando de rezar dela é a chave da luta final." },
<<<<<<< HEAD
      { pergunta: "Quem é o Poo?", chaves: ["poo", "dalaam", "principe"], resposta: "É o príncipe de Dalaam, mestre em artes marciais e em poderes PSI. É o último a entrar no grupo." },
      { pergunta: "Quem é o Jeff?", chaves: ["quem e o jeff", "inventor", "genio"], resposta: "É o garoto inventor do grupo. Ele estuda num colégio interno em Winters e luta com aparelhos que ele mesmo conserta." },
      { pergunta: "O que é Onett?", chaves: ["onett", "cidade natal"], resposta: "É a cidade natal do Ness, onde o meteorito cai e a aventura começa." }
=======
      { pergunta: "Quem é o Poo?", chaves: ["poo", "dalaam", "principe"], resposta: "É o príncipe de Dalaam, mestre em artes marciais e em poderes PSI. É o último a entrar no grupo." }
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    ]
  },
  {
    id: "bof",
    nome: "Breath of Fire",
    apelidos: ["breath of fire"],
    console: "Super Nintendo",
    ano: 1993,
    empresa: "Capcom",
    genero: "RPG",
    cor: "#B5551F",
    capa: "BREATH OF FIRE",
    vilao: "o Império dos Dragões Negros",
    personagens: ["Ryu", "Nina", "Bo", "Karn", "Gobi", "Ox", "Mogu", "Bleu", "Sara"],
    piadas: ["O Ryu vira dragão e ainda gasta AP. Até dragão hoje em dia paga taxa.", "Oito heróis no grupo e ninguém sabe cozinhar. No meu grupo o assador é o mais importante.", "O Ryu é um dragão e ainda precisa comprar poção na loja. Inflação chega até pros lendários."],
    prologo: "O Império dos Dragões Negros quer reunir as chaves da deusa Tyr para dominar o mundo. A vila de Ryu, do clã dos Dragões da Luz, é atacada e sua irmã Sara é levada.",
    historia: [
      "Ryu parte para enfrentar o Império e, no caminho, reúne companheiros como Nina, Bo, Karn, Gobi, Ox, Mogu e Bleu.",
      "Ao longo da aventura, Ryu aprende a se transformar em dragão e descobre a verdade sobre a deusa por trás do Império."
    ],
    imagens: ["Vila de Ryu", "Mapa do mundo", "Transformação em dragão", "Castelo do Império"],
    duvidas: [
      { pergunta: "Quem pode entrar no grupo?", chaves: ["grupo", "personagens", "companheiros", "time"], resposta: "Oito personagens: Ryu, Nina, Bo, Karn, Gobi, Ox, Mogu e Bleu. Cada um tem uma habilidade útil fora das batalhas." },
      { pergunta: "O que são as fusões do Karn?", chaves: ["karn", "fusão", "fusao", "fundir"], resposta: "O Karn aprende a se fundir com outros personagens do grupo, criando formas mais fortes." },
      { pergunta: "Como o Ryu vira dragão?", chaves: ["dragão", "dragao", "transformação", "transformacao"], resposta: "Ele aprende novas formas de dragão em pontos específicos da história. As transformações gastam AP." }
    ],
    assistente: [
      { pergunta: "Dá pra pescar?", chaves: ["pescar", "pesca", "peixe"], resposta: "Sim. Há pontos de pesca no mapa onde dá para pescar com vara e isca." },
      { pergunta: "Quem é o vilão?", chaves: ["vilao", "imperio", "dragoes negros", "myria", "tyr"], resposta: "O Império dos Dragões Negros. Por trás dele está a deusa que ele serve." },
      { pergunta: "O que são as chaves da deusa?", chaves: ["chave", "chaves", "deusa"], resposta: "São seis chaves que o Império procura para abrir o caminho até a deusa. Ryu tenta chegar a elas primeiro." },
      { pergunta: "Quem é a Nina?", chaves: ["nina", "princesa", "asas"], resposta: "É uma princesa alada de Wyndia, especialista em magia de cura e ataque." },
      { pergunta: "Quem é a Sara?", chaves: ["sara", "irma"], resposta: "É a irmã do Ryu, levada pelo Império no começo do jogo." },
      { pergunta: "De que clã o Ryu é?", chaves: ["cla", "dragao da luz", "ryu"], resposta: "Do clã dos Dragões da Luz." },
      { pergunta: "Quem é o Gobi?", chaves: ["gobi", "peixe", "mercador"], resposta: "É um mercador peixe-homem que consegue se transformar num peixe gigante para levar o grupo pelo fundo do mar." },
      { pergunta: "Quem é o Bo?", chaves: ["quem e o bo", "arco", "cacador"], resposta: "É um caçador meio cachorro que luta com arco." },
      { pergunta: "A Bleu é obrigatória?", chaves: ["bleu", "deis", "opcional"], resposta: "Não. A Bleu é uma feiticeira opcional, que só entra no grupo se você for atrás dela." },
      { pergunta: "O Ryu e a Nina aparecem em outros jogos?", chaves: ["outros jogos", "serie", "sequencia", "breath of fire 2", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "Sim. Um Ryu e uma Nina aparecem em todos os jogos da série, mas são personagens diferentes em cada um." },
      { pergunta: "Qual o objetivo do Ryu?", chaves: ["objetivo", "missao", "fazer"], resposta: "Enfrentar o Império dos Dragões Negros, reunir as chaves da deusa antes deles e resgatar a irmã, Sara." },
      { pergunta: "Quem lançou nos EUA?", chaves: ["eua", "americano", "squaresoft", "lancou", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Curiosidade: o jogo é da Capcom, mas foi a Squaresoft que publicou nos Estados Unidos." },
      { pergunta: "Como ganhar dinheiro?", chaves: ["dinheiro", "ouro", "gold", "grana"], resposta: "Derrotando inimigos e vendendo itens e peixes que você pesca." },
<<<<<<< HEAD
      { pergunta: "O jogo é difícil?", chaves: ["dificil", "dificuldade", "treinar", "nivel"], resposta: "As batalhas aleatórias são frequentes. Vale a pena treinar um pouco antes de cada chefe." },
      { pergunta: "Quem é o Karn?", chaves: ["quem e o karn", "ladrao"], resposta: "É um ladrão que abre fechaduras e desarma armadilhas. Mais tarde aprende a se fundir com outros personagens." }
=======
      { pergunta: "O jogo é difícil?", chaves: ["dificil", "dificuldade", "treinar", "nivel"], resposta: "As batalhas aleatórias são frequentes. Vale a pena treinar um pouco antes de cada chefe." }
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    ]
  },
  {
    id: "tmnt",
    nome: "TMNT IV: Turtles in Time",
    apelidos: ["tartarugas", "turtles", "tmnt"],
    console: "Super Nintendo",
    ano: 1992,
    empresa: "Konami",
    genero: "Beat ’em up",
    cor: "#3F8A2E",
    capa: "TURTLES IN TIME",
    vilao: "o Destruidor, junto com Krang",
    personagens: ["Leonardo", "Michelangelo", "Donatello", "Raphael", "April O'Neil", "Destruidor", "Krang"],
    piadas: ["Quatro tartarugas ninja comendo pizza. A única coisa realista desse jogo é a pizza.", "O Destruidor roubou a Estátua da Liberdade. Eu não consigo nem levar a churrasqueira no carro.", "O Destruidor rouba a Estátua da Liberdade e a cidade manda quatro adolescentes resolverem. Prioridades."],
    prologo: "Enquanto as tartarugas assistem TV, o Destruidor rouba a Estátua da Liberdade. Quando elas vão atrás dele, Krang abre um portal e manda as quatro para outras épocas.",
    historia: [
      "Leonardo, Michelangelo, Donatello e Raphael lutam na pré-história, num navio pirata, no Velho Oeste e no futuro tentando voltar para casa.",
      "Saiu primeiro nos fliperamas em 1991 e ganhou a versão de Super Nintendo em 1992, com fases e chefes novos."
    ],
    imagens: ["Ruas de Nova York", "Pré-história", "Navio pirata", "Technodrome"],
    duvidas: [
      { pergunta: "Como vencer o Destruidor no Technodrome?", chaves: ["destruidor", "shredder", "technodrome", "tela"], resposta: "Nessa luta, pegue os soldados do Clã do Pé e arremesse na direção da tela. É o único jeito de causar dano." },
      { pergunta: "Quantas pessoas podem jogar?", chaves: ["jogadores", "multiplayer", "dois", "quatro"], resposta: "Até 2 no Super Nintendo e até 4 no fliperama." },
      { pergunta: "Qual tartaruga é a melhor?", chaves: ["melhor", "tartaruga", "personagem"], resposta: "Donatello tem mais alcance com o bastão. Michelangelo e Raphael são mais rápidos. Leonardo é equilibrado." }
    ],
    assistente: [
      { pergunta: "Como usar o golpe especial?", chaves: ["especial", "golpe especial", "giro"], resposta: "Aperte ataque e pulo juntos. O golpe acerta tudo em volta, mas gasta um pouco de vida." },
      { pergunta: "Quais modos de jogo existem?", chaves: ["modos", "time trial", "versus", "modo"], resposta: "Na versão de Super Nintendo, além da história, existem o Time Trial e o Versus." },
      { pergunta: "Quem são os chefes?", chaves: ["chefes", "chefe", "krang", "bebop", "rocksteady", "slash", "leatherhead"], resposta: "Entre eles estão Krang, Bebop, Rocksteady, Leatherhead, Slash, Tokka, Rahzar e o próprio Destruidor." },
      { pergunta: "Qual a diferença do fliperama para o Super Nintendo?", chaves: ["fliperama", "arcade", "diferenca", "super nintendo"], resposta: "A versão de Super Nintendo tem fases e chefes novos, além da famosa luta em que você arremessa inimigos na tela." },
      { pergunta: "Como recuperar vida?", chaves: ["vida", "pizza", "energia", "curar"], resposta: "Pegue as pizzas que aparecem pelas fases." },
      { pergunta: "Para quais épocas as tartarugas vão?", chaves: ["epoca", "epocas", "era", "tempo"], resposta: "Pré-história, um navio pirata, o Velho Oeste e o futuro, até chegar ao Technodrome." },
      { pergunta: "Quem é a April?", chaves: ["april", "reporter"], resposta: "April O'Neil é a repórter amiga das tartarugas. No começo do jogo ela aparece na TV." },
      { pergunta: "Quem é o Krang?", chaves: ["krang", "cerebro"], resposta: "É um alienígena em forma de cérebro que vive dentro de um corpo robótico e ajuda o Destruidor." },
      { pergunta: "Por que as tartarugas têm nomes de artistas?", chaves: ["nomes", "artistas", "renascimento", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "Os nomes vêm de quatro artistas do Renascimento italiano: Leonardo da Vinci, Michelangelo, Donatello e Rafael." },
      { pergunta: "Quem é o Splinter?", chaves: ["splinter", "mestre", "rato"], resposta: "É o mestre das tartarugas, um rato que ensinou artes marciais a elas." },
      { pergunta: "Qual a frase famosa do Michelangelo?", chaves: ["frase", "cowabunga", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "\"Cowabunga!\". É o grito de comemoração dele." },
      { pergunta: "Turtles in Time tem remake?", chaves: ["remake", "re-shelled", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Tem: Turtles in Time Re-Shelled, de 2009, para Xbox 360 e PlayStation 3, baseado na versão de fliperama." },
      { pergunta: "Quem é o Leatherhead?", chaves: ["leatherhead", "jacare", "jacaré"], resposta: "É um jacaré mutante, um dos chefes que as tartarugas enfrentam." },
<<<<<<< HEAD
      { pergunta: "Quem é o Destruidor?", chaves: ["quem e o destruidor", "shredder", "cla do pe", "lider"], resposta: "É o líder do Clã do Pé e o maior inimigo das tartarugas e do mestre Splinter." },
      { pergunta: "Quem são Bebop e Rocksteady?", chaves: ["bebop", "rocksteady"], resposta: "São os capangas mutantes do Destruidor: Bebop é um javali e Rocksteady é um rinoceronte." },
      { pergunta: "Quem é o Splinter no jogo?", chaves: ["splinter aparece", "mestre splinter"], resposta: "O mestre Splinter aparece na história como o mentor das tartarugas. É por causa dele que elas sabem artes marciais." }
=======
      { pergunta: "Quem é o Destruidor?", chaves: ["quem e o destruidor", "shredder", "cla do pe", "lider"], resposta: "É o líder do Clã do Pé e o maior inimigo das tartarugas e do mestre Splinter." }
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    ]
  },
  {
    id: "mgs",
    nome: "Metal Gear Solid",
    apelidos: ["metal gear solid", "mgs1", "mgs 1", "shadow moses"],
    console: "PlayStation",
    ano: 1998,
    empresa: "Konami",
    genero: "Ação furtiva",
    cor: "#3B4A3A",
    capa: "METAL GEAR SOLID",
    vilao: "Liquid Snake, líder da FOXHOUND",
    personagens: ["Solid Snake", "Meryl", "Otacon", "Coronel Campbell", "Revolver Ocelot", "Liquid Snake"],
    piadas: ["O Snake se esconde numa caixa de papelão e ninguém percebe. Eu tentei na fila do banco e não deu certo.", "O Psycho Mantis lê o teu memory card. Ainda bem que ele não viu meus saves de Barbie.", "O guarda vê pegada na neve e diz 'deve ter sido o vento'. Melhor segurança do Alasca."],
    prologo: "A unidade FOXHOUND se rebela e toma a ilha de Shadow Moses, no Alasca, ameaçando lançar uma ogiva nuclear. Solid Snake é chamado de volta da aposentadoria para invadir a base sozinho.",
    historia: [
      "Snake precisa resgatar reféns e descobrir o que é o Metal Gear REX, um tanque bípede capaz de lançar armas nucleares.",
      "No caminho, enfrenta os membros da FOXHOUND, como Revolver Ocelot, Psycho Mantis, Sniper Wolf e Liquid Snake."
    ],
    imagens: ["Doca de Shadow Moses", "Heliporto", "Psycho Mantis", "Metal Gear REX"],
    duvidas: [
      { pergunta: "Como vencer o Psycho Mantis?", chaves: ["mantis", "psycho", "mente"], resposta: "Ele lê os comandos do controle. Tire o controle da porta 1 e conecte na porta 2." },
      { pergunta: "Qual a frequência da Meryl?", chaves: ["meryl", "frequencia", "frequência", "codec"], resposta: "Está na parte de trás da caixa do CD, numa foto do jogo: 140.15." },
      { pergunta: "O que muda na tortura do Ocelot?", chaves: ["tortura", "ocelot", "final"], resposta: "Se você resistir até o fim, a Meryl sobrevive. Se desistir, ela morre e o final muda, com Otacon acompanhando Snake." }
    ],
    assistente: [
      { pergunta: "Como vencer o Revolver Ocelot?", chaves: ["revolver", "ocelot luta", "fios"], resposta: "Fique longe dos fios com C4 que cercam o Baker no meio da sala e atire no Ocelot quando ele estiver recarregando." },
      { pergunta: "Como vencer a Sniper Wolf?", chaves: ["sniper wolf", "wolf", "psg1", "diazepam"], resposta: "Pegue o rifle PSG1 no arsenal e use Diazepam para firmar a mira." },
      { pergunta: "Como derrotar o tanque?", chaves: ["tanque", "tank"], resposta: "Use granadas de chaff para atrapalhar o canhão e jogue granadas comuns na escotilha." },
      { pergunta: "Como vencer o Metal Gear REX?", chaves: ["rex", "metal gear rex"], resposta: "Na primeira fase, acerte o radar (radome) com mísseis Stinger." },
      { pergunta: "O que ganho no final?", chaves: ["bandana", "camuflagem", "recompensa", "segunda vez"], resposta: "Com o final da Meryl, você ganha a bandana de munição infinita. Com o final do Otacon, ganha a camuflagem ótica." },
      { pergunta: "Como passar pelo chão elétrico?", chaves: ["chao eletrico", "eletrico", "nikita", "painel"], resposta: "Guie um míssil Nikita até o painel de controle e destrua ele para desligar a energia." },
      { pergunta: "O que é o cartão PAL?", chaves: ["pal", "cartao", "chave"], resposta: "É a chave de ativação do REX. Ela muda de forma com a temperatura: é preciso esquentar e esfriar o cartão." },
      { pergunta: "Como usar o codec?", chaves: ["codec", "radio", "ligar"], resposta: "Aperte Select para abrir o rádio e falar com a equipe." },
      { pergunta: "Quem é o Otacon?", chaves: ["otacon", "hal", "emmerich"], resposta: "Hal Emmerich, o Otacon, é o cientista que ajudou a criar o Metal Gear REX e passa a ajudar o Snake." },
      { pergunta: "Quem é o Ninja?", chaves: ["ninja", "gray fox", "cyborg"], resposta: "É o Gray Fox, antigo companheiro do Snake, agora transformado em ciborgue." },
      { pergunta: "Como passar pelas câmeras?", chaves: ["camera", "cameras", "câmeras", "chaff"], resposta: "Use granadas de chaff. Elas desligam câmeras e aparelhos eletrônicos por alguns segundos." },
      { pergunta: "O Psycho Mantis lê o memory card mesmo?", chaves: ["memory card", "ler mente", "mantis le", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "Lê. Se tiver save de outros jogos da Konami no memory card, ele comenta sobre eles na luta." },
      { pergunta: "Como fugir da cela?", chaves: ["fugir", "cela", "ketchup"], resposta: "Um jeito famoso: deite no chão e use o ketchup para fingir que está sangrando. O guarda abre a cela para ver." },
      { pergunta: "Quem é a Mei Ling?", chaves: ["mei ling", "salvar", "save"], resposta: "É quem salva o jogo pelo Codec. Ela também conta provérbios a cada save." },
      { pergunta: "Quem é o Coronel Campbell?", chaves: ["campbell", "coronel"], resposta: "É o ex-comandante do Snake, que o chama de volta e o orienta pelo Codec." },
      { pergunta: "De quem o Solid e o Liquid são clones?", chaves: ["clone", "clones", "big boss", "irmaos", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Atenção, spoiler: os dois são clones do Big Boss, criados num projeto chamado Les Enfants Terribles." },
      { pergunta: "Quem é o Revolver Ocelot?", chaves: ["revolver", "ocelot", "pistoleiro"], resposta: "É o pistoleiro da FOXHOUND famoso por girar o revólver. Ele aparece em vários jogos da série." },
<<<<<<< HEAD
      { pergunta: "Quem é a Sniper Wolf?", chaves: ["quem e a sniper wolf", "sniper wolf", "atiradora", "lobos"], resposta: "É a atiradora de elite da FOXHOUND, que vive cercada de lobos. A luta contra ela é um dos momentos mais lembrados do jogo." },
      { pergunta: "Quantos discos o Metal Gear Solid tem?", chaves: ["discos", "cd", "quantos discos"], resposta: "Dois discos na versão de PlayStation. Na metade do jogo, ele pede para trocar o disco." }
=======
      { pergunta: "Quem é a Sniper Wolf?", chaves: ["quem e a sniper wolf", "sniper wolf", "atiradora", "lobos"], resposta: "É a atiradora de elite da FOXHOUND, que vive cercada de lobos. A luta contra ela é um dos momentos mais lembrados do jogo." }
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    ]
  },
  {
    id: "mgs3",
    nome: "Metal Gear Solid 3: Snake Eater",
    apelidos: ["snake eater", "mgs3", "mgs 3", "metal gear solid 3", "metal gear 3"],
    console: "PlayStation 2",
    ano: 2004,
    empresa: "Konami",
    genero: "Ação furtiva",
    cor: "#4A5A2A",
    capa: "SNAKE EATER",
<<<<<<< HEAD
    musica: { arquivo: "audio/mgs3.mp3", titulo: "Snake Eater" },
=======
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    vilao: "o coronel Volgin, com a The Boss do lado dele",
    personagens: ["Naked Snake", "The Boss", "EVA", "Major Zero", "Ocelot", "Volgin", "Sokolov"],
    piadas: ["O Snake come cobra, sapo e cogumelo, e depois reclama da comida do quartel.", "O The End morre de velhice se tu esperar uma semana. É o único chefe que perde pra preguiça.", "O Snake pega resfriado e espirra no meio da missão secreta. Até espião sofre com o inverno."],
    prologo: "Em 1964, em plena Guerra Fria, o agente Naked Snake é mandado à União Soviética para resgatar um cientista. A missão dá errado quando sua mentora, The Boss, troca de lado.",
    historia: [
      "Na Operação Snake Eater, Snake volta à selva soviética para impedir o coronel Volgin e destruir o Shagohod, um tanque capaz de lançar mísseis nucleares.",
      "O jogo se passa na floresta, então caçar comida, cuidar dos ferimentos e usar camuflagem são parte da sobrevivência. Os chefes são a Unidade Cobra, comandada pela The Boss."
    ],
    imagens: ["Selva de Tselinoyarsk", "Ponte de corda", "Groznyj Grad", "Campo de flores"],
    duvidas: [
      { pergunta: "Como vencer o The End sem lutar?", chaves: ["the end", "atirador", "sniper", "velho"], resposta: "Salve o jogo durante a luta e só volte a jogar depois de mais de uma semana. Ele morre de velhice." },
      { pergunta: "Morri no rio do The Sorrow. E agora?", chaves: ["sorrow", "rio", "morri", "revival"], resposta: "É parte da luta. Na tela de Game Over, use a Revival Pill e continue." },
      { pergunta: "Como funciona a camuflagem?", chaves: ["camuflagem", "camo", "índice", "indice"], resposta: "O número no canto da tela mostra o quanto você está escondido. Troque a roupa e a pintura do rosto de acordo com o terreno." }
    ],
    assistente: [
      { pergunta: "Dá pra zerar sem matar ninguém?", chaves: ["sem matar", "nao matar", "tranquilizante", "mk22"], resposta: "Sim. Use a pistola tranquilizante Mk22 e a luta corpo a corpo (CQC). No rio do The Sorrow aparecem os fantasmas de quem você matou." },
      { pergunta: "Como curar ferimentos?", chaves: ["curar", "cura", "ferimento", "sangrando"], resposta: "No menu Cure, trate cada ferimento com o item certo, como atadura, desinfetante ou tala." },
      { pergunta: "Como recuperar a stamina?", chaves: ["stamina", "fome", "comer", "comida"], resposta: "Coma. Cace animais e colha plantas pela selva. Alguns alimentos estragam com o tempo." },
      { pergunta: "Para que serve a Fake Death Pill?", chaves: ["fake death", "fingir de morto", "pilula"], resposta: "Ela faz o Snake fingir que morreu. Útil para escapar de uma cela ou de um perigo." },
      { pergunta: "O que é CQC?", chaves: ["cqc", "luta", "corpo a corpo"], resposta: "É a luta corpo a corpo do Snake: agarrar, derrubar e interrogar inimigos usando a faca e a pistola juntas." },
      { pergunta: "Como trocar a camuflagem?", chaves: ["trocar", "roupa", "uniforme", "pintura"], resposta: "Pelo menu de camuflagem, escolha a roupa e a pintura do rosto. Combine com o terreno onde você está." },
      { pergunta: "Quem é a EVA?", chaves: ["eva", "espia"], resposta: "É uma agente que ajuda o Snake durante a missão, levando informações e equipamentos." },
      { pergunta: "Quem é o Major Zero?", chaves: ["zero", "major", "comandante", "radio"], resposta: "É o comandante da unidade FOX, que orienta o Snake pelo rádio." },
      { pergunta: "Quem é o Big Boss?", chaves: ["big boss"], resposta: "É o próprio Naked Snake. Ele recebe o título de Big Boss no final do jogo." },
      { pergunta: "Como passar em Groznyj Grad sem ser descoberto?", chaves: ["groznyj", "disfarce", "raikov", "mascara"], resposta: "Use a máscara e o uniforme do Raikov. Com o disfarce, os guardas deixam o Snake circular pela base." },
      { pergunta: "A The Boss traiu mesmo os Estados Unidos?", chaves: ["traiu", "traicao", "the boss traidora", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "Atenção, spoiler: não. A deserção dela fazia parte de uma missão secreta, e ela aceitou morrer como traidora." },
      { pergunta: "O Ocelot tem ligação com a The Boss?", chaves: ["ocelot filho", "filho", "mae do ocelot", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "Tem. A série revela que o Ocelot é filho da The Boss com o The Sorrow." },
      { pergunta: "O que ganho ao terminar?", chaves: ["terminar", "recompensa", "patriot"], resposta: "Ao terminar, você ganha o Patriot, a arma da The Boss, com munição infinita." },
      { pergunta: "A abertura parece filme do James Bond?", chaves: ["james bond", "abertura", "musica tema", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Curiosidade: parece de propósito. A música tema e a abertura imitam o estilo dos filmes de espionagem dos anos 60." },
      { pergunta: "Quem é o Volgin?", chaves: ["volgin", "coronel volgin", "eletricidade"], resposta: "É o coronel soviético que controla eletricidade com o corpo e quer usar o Shagohod." },
<<<<<<< HEAD
      { pergunta: "O que é a Unidade Cobra?", chaves: ["unidade cobra", "cobra", "the pain", "the fear", "the fury"], resposta: "É o grupo de elite comandado pela The Boss: The Pain, The Fear, The End, The Fury e The Sorrow. Cada um é chefe numa parte do jogo." },
      { pergunta: "Qual música do jogo eu posso ouvir aqui?", chaves: ["musica do jogo", "trilha sonora", "trilha", "ouvir", "tocar musica"], resposta: "Aqui no site dá para ouvir Snake Eater. É só clicar no botão da nota musical, no canto inferior direito da tela." },
      { pergunta: "Quem canta a música Snake Eater?", chaves: ["quem canta", "cantora", "snake eater musica", "cynthia"], resposta: "É a cantora Cynthia Harrell. A música imita as aberturas dos filmes de espionagem dos anos 60." }
=======
      { pergunta: "O que é a Unidade Cobra?", chaves: ["unidade cobra", "cobra", "the pain", "the fear", "the fury"], resposta: "É o grupo de elite comandado pela The Boss: The Pain, The Fear, The End, The Fury e The Sorrow. Cada um é chefe numa parte do jogo." }
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    ]
  },
  {
    id: "conker",
    nome: "Conker's Bad Fur Day",
    apelidos: ["conker", "conkers", "bad fur day", "esquilo"],
    console: "Nintendo 64",
    ano: 2001,
    empresa: "Rare",
    genero: "Plataforma e aventura",
    cor: "#A8481E",
    capa: "CONKER'S BAD FUR DAY",
    vilao: "o Panther King, com a ajuda do Professor von Kriplespac",
    personagens: ["Conker", "Berri", "Panther King", "Professor von Kriplespac", "Gregg, o Ceifador", "Birdy", "Franky"],
    piadas: ["O Conker saiu do bar e se perdeu. Por isso que eu sempre volto de carona com a patroa.", "Um chefe feito de cocô que canta ópera. Nem o Véio esperava essa.", "Ursinhos de pelúcia do mal no It's War. Depois dessa, nunca mais confiei nos brinquedos da minha prima."],
    prologo: "Depois de uma noite de bebedeira no bar, Conker, um esquilo vermelho, tenta voltar para casa e para a namorada, Berri, mas acorda perdido e de ressaca num lugar que não conhece.",
    historia: [
      "Enquanto isso, o Panther King descobre que a perna da sua mesa está quebrada e o leite vive derramando. A solução, segundo o Professor von Kriplespac, é usar um esquilo vermelho como perna da mesa, e os capangas saem atrás do Conker.",
      "A aventura é dividida em capítulos, como Windy, Sloprano, Uga Buga e It's War, e faz paródias de filmes como O Resgate do Soldado Ryan e Matrix. Ao contrário de outros jogos da Rare, é feito para adultos, com palavrões e humor pesado."
    ],
    imagens: ["Windy", "Sloprano", "Uga Buga", "It's War"],
    duvidas: [
      { pergunta: "Como vencer o Great Mighty Poo?", chaves: ["great mighty poo", "poo", "papel higienico", "opera", "sloprano", "coco", "canta"], resposta: "Enquanto ele canta, pegue os rolos de papel higiênico e arremesse dentro da boca dele. Fique se mexendo para não ser atingido." },
      { pergunta: "Para que servem os botões B no chão?", chaves: ["botao b", "b pad", "contexto", "item", "plataforma b"], resposta: "São pontos de ação. Fique em cima e aperte B: o Conker pega o item certo para aquele lugar, como uma arma, um estilingue ou uma bebida." },
      { pergunta: "Como ganhar vidas?", chaves: ["vida extra", "vidas", "rabo", "cauda", "gregg", "ceifador"], resposta: "Cada vida é uma cauda de esquilo. Elas ficam espalhadas pelas fases, e o Gregg, o Ceifador, explica como funciona logo no começo." }
    ],
    assistente: [
      { pergunta: "Como recuperar energia?", chaves: ["energia", "chocolate", "curar", "vida"], resposta: "Coma os pedaços de chocolate que aparecem pelo caminho." },
      { pergunta: "Por que o Panther King quer o Conker?", chaves: ["panther", "rei", "mesa", "leite"], resposta: "A mesa dele está com a perna quebrada e o leite sempre derrama. Ele quer um esquilo vermelho para servir de perna da mesa." },
      { pergunta: "O jogo é para crianças?", chaves: ["crianca", "criancas", "infantil", "idade", "classificacao"], resposta: "Não. Apesar do visual fofo, tem palavrões, violência e humor adulto. Nos Estados Unidos, saiu com classificação para maiores." },
      { pergunta: "Tem remake?", chaves: ["remake", "xbox", "live and reloaded", "reloaded"], resposta: "Sim. Conker: Live & Reloaded saiu em 2005 para o Xbox, com gráficos novos e multiplayer online." },
      { pergunta: "Para que serve o dinheiro?", chaves: ["dinheiro", "grana", "cash", "pagar"], resposta: "O Conker junta maços de dinheiro pelas fases e usa para pagar personagens que liberam o caminho." },
      { pergunta: "Tem multiplayer?", chaves: ["multiplayer", "jogar junto", "amigos", "versus"], resposta: "Sim. Tem vários modos para até quatro jogadores, separados da história principal." },
      { pergunta: "Quais são os capítulos?", chaves: ["capitulos", "capitulo", "fases", "mundos"], resposta: "Entre eles estão Hungover, Windy, Barn Boys, Bats Tower, Sloprano, Uga Buga, Spooky, It's War e Heist." },
      { pergunta: "O que acontece no final?", chaves: ["final", "acaba", "termina", "berri"], resposta: "Atenção, spoiler: o Conker vira rei, mas a Berri morre no último capítulo, e ele não consegue trazê-la de volta." },
      { pergunta: "O Conker sempre foi um jogo adulto?", chaves: ["infantil", "comeco", "twelve tales", "mudou", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato", "segredo dos fas"], resposta: "Não. Ele começou como um jogo infantil chamado Twelve Tales: Conker 64. Depois a Rare mudou tudo para o humor adulto." },
      { pergunta: "Quem é a Berri?", chaves: ["berri", "namorada"], resposta: "É a namorada do Conker. Ele passa o jogo inteiro tentando voltar para casa, onde ela está esperando." },
      { pergunta: "O Conker apareceu em outro jogo antes?", chaves: ["diddy kong racing", "outro jogo", "apareceu antes", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Sim. Ele era um dos personagens jogáveis do Diddy Kong Racing, de 1997, com visual bem infantil." },
      { pergunta: "Quem é o Gregg?", chaves: ["gregg", "ceifador", "morte"], resposta: "É o Ceifador, que explica ao Conker como funcionam as vidas no jogo." },
      { pergunta: "Quem é o Professor von Kriplespac?", chaves: ["professor", "kriplespac", "cientista"], resposta: "É o cientista que trabalha para o Panther King e manda os capangas atrás do Conker." },
      { pergunta: "Quem é o Birdy?", chaves: ["birdy", "espantalho"], resposta: "É um espantalho que aparece logo no começo e ensina o Conker a usar os botões de contexto." },
      { pergunta: "O que é o capítulo It's War?", chaves: ["its war", "guerra", "tediz"], resposta: "É uma paródia de filmes de guerra, em que o Conker luta contra os Tediz, ursinhos de pelúcia do mal." }
    ]
  },
  {
    id: "oot",
    nome: "The Legend of Zelda: Ocarina of Time",
    apelidos: ["ocarina of time", "ocarina", "oot", "zelda 64"],
    console: "Nintendo 64",
    ano: 1998,
    empresa: "Nintendo",
    genero: "Ação e aventura",
    cor: "#2E6B4A",
    capa: "OCARINA OF TIME",
<<<<<<< HEAD
    musica: { arquivo: "audio/oot.mp3", titulo: "Gerudo Valley" },
=======
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    vilao: "Ganondorf, o rei dos Gerudo",
    personagens: ["Link", "Navi", "Princesa Zelda", "Sheik", "Ganondorf", "Saria", "Impa"],
    piadas: ["A Navi grita 'Hey! Listen!' o jogo inteiro. É a primeira fada com notificação ativada.", "O Link dormiu sete anos e acordou adulto. Eu durmo sete horas e acordo cansado.", "O Link quebra todo pote de Hyrule e ninguém chama a polícia."],
    prologo: "Link é o único garoto da floresta Kokiri sem uma fada, até que Navi aparece. A Grande Árvore Deku, amaldiçoada por Ganondorf, conta que ele quer as Pedras Espirituais para abrir o Reino Sagrado e pegar a Triforce.",
    historia: [
      "Ainda criança, Link junta as três Pedras Espirituais e tira a Master Sword do pedestal, mas acaba abrindo o caminho para Ganondorf e dorme por sete anos.",
      "Adulto, ele encontra Hyrule dominada, desperta os Sábios nos templos da Floresta, do Fogo, da Água, da Sombra e do Espírito e enfrenta Ganondorf no castelo dele."
    ],
    imagens: ["Floresta Kokiri", "Campo de Hyrule", "Templo da Água", "Castelo de Ganon"],
    duvidas: [
      { pergunta: "Como passar do Templo da Água?", chaves: ["templo da agua", "water temple", "agua", "botas de ferro"], resposta: "Use as Botas de Ferro para afundar e toque a Canção de Ninar da Zelda nos símbolos da Triforce. Isso muda o nível da água, que tem três alturas diferentes." },
      { pergunta: "Onde pego a Ocarina do Tempo?", chaves: ["ocarina do tempo", "pegar ocarina", "fosso"], resposta: "Quando a Zelda foge do castelo, ela joga a ocarina no fosso da entrada da cidade. Mergulhe lá para pegar." },
      { pergunta: "Como derrotar o Ganondorf e o Ganon?", chaves: ["ganondorf", "ganon", "chefe final"], resposta: "Contra o Ganondorf, rebata as bolas de energia com a espada e acerte com flechas de luz. Contra o Ganon, ataque o rabo dele. Depois de recuperar a Master Sword, dê o golpe final." }
    ],
    assistente: [
      { pergunta: "Como virar adulto e voltar a ser criança?", chaves: ["adulto", "crianca", "voltar no tempo", "templo do tempo"], resposta: "No Templo do Tempo: coloque a Master Sword no pedestal para voltar a ser criança e tire de novo para virar adulto." },
      { pergunta: "Como conseguir a Epona?", chaves: ["epona", "cavalo", "lon lon"], resposta: "Aprenda a Canção da Epona com a Malon quando criança. Adulto, vença a corrida do Ingo no Rancho Lon Lon e fuja pulando o muro." },
      { pergunta: "Para que servem as músicas da ocarina?", chaves: ["musica", "musicas", "cancao", "cancoes", "ocarina"], resposta: "Algumas abrem caminhos e mudam o tempo, como a Canção das Tempestades. Outras teletransportam o Link até os templos, como o Minueto da Floresta." },
      { pergunta: "Quem é a Sheik?", chaves: ["sheik"], resposta: "Atenção, spoiler: é a própria princesa Zelda disfarçada, escondida do Ganondorf durante os sete anos." },
      { pergunta: "Quantas Skulltulas douradas existem?", chaves: ["skulltula", "skulltulas", "aranha dourada"], resposta: "São 100. A família amaldiçoada de Kakariko dá recompensas conforme você junta." },
      { pergunta: "Como pegar a Biggoron Sword?", chaves: ["biggoron", "espada grande", "troca"], resposta: "Faça a sequência de trocas de itens como adulto, que termina no Biggoron, no alto da Montanha da Morte. Ele forja a espada mais forte do jogo." },
      { pergunta: "Quem é a Navi?", chaves: ["navi", "fada", "hey listen"], resposta: "É a fada que acompanha o Link e dá dicas. Ficou famosa pelo 'Hey! Listen!'." },
      { pergunta: "O jogo dividiu a linha do tempo?", chaves: ["linha do tempo", "timeline", "cronologia", "divide", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Sim, pela cronologia oficial. O final do Ocarina of Time divide a história de Zelda em três linhas do tempo diferentes." },
      { pergunta: "O Skull Kid do Majora's Mask é o mesmo daqui?", chaves: ["skull kid", "majora", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "É uma teoria bem popular entre os fãs: o Skull Kid amigo do Link na floresta seria o mesmo que pega a máscara em Majora's Mask." },
      { pergunta: "Onde pego o Hookshot?", chaves: ["hookshot", "gancho", "dampe"], resposta: "Já adulto, vença a corrida contra o fantasma do Dampé no cemitério de Kakariko." },
      { pergunta: "Quem é a Saria?", chaves: ["saria", "amiga"], resposta: "É a amiga de infância do Link na floresta Kokiri. É ela quem ensina a Canção da Saria e, mais tarde, se revela uma das Sábias." },
      { pergunta: "Onde fica o Escudo Espelhado?", chaves: ["escudo espelhado", "mirror shield", "espelho"], resposta: "No Templo do Espírito. Ele reflete a luz do sol para abrir caminhos e rebate alguns ataques mágicos." },
<<<<<<< HEAD
      { pergunta: "Existe uma linha do tempo em que o Link perde?", chaves: ["link perde", "heroi derrotado", "linha do tempo", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Existe, pela cronologia oficial. Numa das três linhas, o Link é derrotado pelo Ganon, e é nela que se passam A Link to the Past e o primeiro Zelda." },
      { pergunta: "Quem é a Impa?", chaves: ["impa", "sheikah"], resposta: "É a guardiã da princesa Zelda, da tribo Sheikah. Ela ajuda a Zelda a fugir do castelo e depois se revela a Sábia da Sombra." },
      { pergunta: "Quem é o Ganondorf?", chaves: ["quem e o ganondorf", "rei dos gerudo", "gerudo"], resposta: "É o rei dos Gerudo, um povo do deserto. Ele finge lealdade ao rei de Hyrule enquanto planeja pegar a Triforce." },
      { pergunta: "Como vencer o Morpha?", chaves: ["morpha", "chefe da agua", "tentaculo"], resposta: "É o chefe do Templo da Água, um núcleo dentro de um tentáculo de água. Puxe o núcleo para fora com o Hookshot e ataque com a espada." },
      { pergunta: "Por que o cartucho do Ocarina era dourado?", chaves: ["dourado", "cartucho dourado", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Curiosidade: a edição de colecionador do Ocarina of Time saiu num cartucho dourado, igual ao do primeiro Zelda no NES." },
      { pergunta: "Qual música do jogo eu posso ouvir aqui?", chaves: ["musica do jogo", "trilha sonora", "trilha", "ouvir", "tocar musica"], resposta: "Aqui no site dá para ouvir Gerudo Valley. É só clicar no botão da nota musical, no canto inferior direito da tela." }
=======
      { pergunta: "Existe uma linha do tempo em que o Link perde?", chaves: ["link perde", "heroi derrotado", "linha do tempo", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Existe, pela cronologia oficial. Numa das três linhas, o Link é derrotado pelo Ganon, e é nela que se passam A Link to the Past e o primeiro Zelda." }
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    ]
  },
  {
    id: "mm",
    nome: "The Legend of Zelda: Majora's Mask",
    apelidos: ["majora's mask", "majoras mask", "majora"],
    console: "Nintendo 64",
    ano: 2000,
    empresa: "Nintendo",
    genero: "Ação e aventura",
    cor: "#6B2E7A",
    capa: "MAJORA'S MASK",
    vilao: "a Máscara de Majora, que possui o Skull Kid",
    personagens: ["Link", "Skull Kid", "Tatl", "Tael", "Vendedor de Máscaras"],
    piadas: ["A lua cai em três dias e ninguém em Clock Town cancela a festa. Isso que é compromisso com o evento.", "O Link volta no tempo e perde as rupias. É o primeiro jogo que te ensina a usar banco.", "Três dias pro fim do mundo e o carteiro ainda entrega carta no horário. Isso que é servidor dedicado."],
    prologo: "Procurando a Navi, Link é atacado pelo Skull Kid, que usa a Máscara de Majora. Ele rouba a Epona e a ocarina, transforma o Link num Deku e o leva para Termina, onde a lua vai cair em três dias.",
    historia: [
      "O jogo funciona num ciclo de 72 horas. Tocando a Canção do Tempo, Link volta para o primeiro dia, mantendo as máscaras e os itens principais.",
      "Ele precisa despertar os quatro Gigantes nos templos do pântano, da montanha, do oceano e do vale para segurar a lua."
    ],
    imagens: ["Clock Town", "Lua", "Pântano", "Templo de Pedra"],
    duvidas: [
      { pergunta: "Como voltar ao primeiro dia?", chaves: ["voltar no tempo", "primeiro dia", "cancao do tempo", "song of time"], resposta: "Toque a Canção do Tempo. Você mantém as máscaras e os itens principais, mas perde as rupias que não estiverem no banco e a munição." },
      { pergunta: "Como deixar o tempo mais lento?", chaves: ["lento", "devagar", "inverter", "tempo"], resposta: "Toque a Canção do Tempo de trás para frente. O relógio passa a andar mais devagar." },
      { pergunta: "Para que servem as máscaras de transformação?", chaves: ["mascara", "mascaras", "deku", "goron", "zora", "transformacao"], resposta: "As máscaras Deku, Goron e Zora transformam o Link e dão habilidades diferentes, como planar, rolar rápido e nadar." }
    ],
    assistente: [
      { pergunta: "Como ganhar a máscara Fierce Deity?", chaves: ["fierce deity", "mascara final", "melhor mascara"], resposta: "Junte todas as outras máscaras e entregue para as crianças que aparecem dentro da lua, no final." },
      { pergunta: "Onde guardo rupias?", chaves: ["banco", "guardar rupias", "rupia"], resposta: "No banco de Clock Town. O dinheiro guardado lá não some quando você volta no tempo." },
      { pergunta: "Quem são os Gigantes?", chaves: ["gigantes", "gigante"], resposta: "São os quatro guardiões de Termina. Juntos, eles conseguem segurar a lua." },
      { pergunta: "Para que serve o caderno dos Bombers?", chaves: ["caderno", "bombers", "notebook"], resposta: "Ele anota os moradores e os problemas deles, com horários. Ajuda a organizar as missões dentro dos três dias." },
      { pergunta: "Quanto tempo dura o ciclo de verdade?", chaves: ["quanto tempo", "72 horas", "minutos"], resposta: "Os três dias do jogo passam em cerca de 54 minutos reais, se você não desacelerar o tempo." },
      { pergunta: "O Link está morto em Majora's Mask?", chaves: ["morto", "morreu", "luto", "estagios", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "É uma das teorias mais famosas: Termina seria um lugar entre a vida e a morte, e cada região representaria uma fase do luto. A Nintendo nunca confirmou." },
      { pergunta: "Quem é a Tatl?", chaves: ["tatl", "tael", "fada"], resposta: "É a fada que acompanha o Link nesse jogo. O irmão dela, Tael, fica com o Skull Kid." },
      { pergunta: "O Skull Kid é o mesmo do Ocarina of Time?", chaves: ["skull kid", "mesmo", "ocarina of time", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "É uma teoria bem popular: o Skull Kid que vivia nos Bosques Perdidos e ficou amigo do Link no Ocarina of Time seria o mesmo. O jogo dá a entender, mas a Nintendo nunca confirmou de forma clara." },
      { pergunta: "Onde pego o Hookshot?", chaves: ["hookshot", "gancho", "piratas"], resposta: "Na Fortaleza dos Piratas, na Grande Baía." },
      { pergunta: "Por que o Majora's Mask foi feito tão rápido?", chaves: ["rapido", "feito rapido", "motor", "reaproveitou", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Curiosidade: ele foi feito em cerca de um ano, reaproveitando o motor e muitos modelos do Ocarina of Time." },
<<<<<<< HEAD
      { pergunta: "Onde pego a Máscara do Coelho?", chaves: ["mascara do coelho", "coelho", "bunny hood"], resposta: "No Rancho Romani, com o Grog. Ajude a transformar os pintinhos em galinhas adultas e ele entrega a máscara." },
      { pergunta: "Quem é o Vendedor de Máscaras?", chaves: ["vendedor", "mascaras felizes", "happy mask"], resposta: "É o misterioso vendedor que teve a Máscara de Majora roubada pelo Skull Kid. Ele ensina a Canção da Cura ao Link e pede a máscara de volta." },
      { pergunta: "Como sair do Pântano envenenado?", chaves: ["pantano", "veneno", "agua envenenada"], resposta: "A água do pântano é venenosa até você derrotar o chefe do Templo de Woodfall. Antes disso, use a forma Deku para pular pelas flores e atravessar sem encostar na água." },
      { pergunta: "Quem é o Skull Kid?", chaves: ["quem e o skull kid", "skull kid"], resposta: "É um garoto da floresta que achou a Máscara de Majora e foi dominado por ela. No fundo, ele só se sentia sozinho e abandonado pelos amigos." }
=======
      { pergunta: "Onde pego a Máscara do Coelho?", chaves: ["mascara do coelho", "coelho", "bunny hood"], resposta: "No Rancho Romani, com o Grog. Ajude a transformar os pintinhos em galinhas adultas e ele entrega a máscara." }
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    ]
  },
  {
    id: "sm64",
    nome: "Super Mario 64",
    apelidos: ["super mario 64", "mario 64", "sm64"],
    console: "Nintendo 64",
    ano: 1996,
    empresa: "Nintendo",
    genero: "Plataforma 3D",
    cor: "#C62B2B",
    capa: "SUPER MARIO 64",
    vilao: "Bowser",
    personagens: ["Mario", "Princesa Peach", "Bowser", "Toad", "Lakitu", "Yoshi"],
    piadas: ["A Peach chamou o Mario pra comer bolo e ele passou o jogo inteiro pulando dentro de quadros. Até hoje ninguém viu esse bolo.", "O Mario pula três vezes seguidas e eu canso subindo um lance de escada.", "O Mario fez a Peach esperar com o bolo o jogo inteiro. Até hoje ela esquenta no micro-ondas."],
    prologo: "A Princesa Peach convida o Mario para comer um bolo no castelo. Quando ele chega, descobre que o Bowser tomou o lugar, prendeu a princesa e escondeu as Power Stars dentro dos quadros.",
    historia: [
      "O Mario entra nos quadros, que são mundos inteiros em 3D, e junta estrelas para abrir novas portas do castelo.",
      "Ele enfrenta o Bowser três vezes até resgatar a Peach. O jogo foi lançado junto com o Nintendo 64 e é o primeiro Mario em 3D."
    ],
    imagens: ["Castelo da Peach", "Bob-omb Battlefield", "Cool, Cool Mountain", "Bowser in the Sky"],
    duvidas: [
      { pergunta: "Como passar da escada sem fim?", chaves: ["escada", "escada sem fim", "infinita"], resposta: "Você precisa de pelo menos 70 estrelas. Com menos, a escada nunca termina." },
      { pergunta: "Quantas estrelas existem?", chaves: ["quantas estrelas existem", "120", "total de estrelas", "todas as estrelas"], resposta: "São 120 Power Stars no total." },
      { pergunta: "Como derrotar o Bowser?", chaves: ["bowser", "chefe final", "rabo"], resposta: "Corra por trás, pegue o Bowser pelo rabo, gire com o analógico e arremesse nas bombas em volta da arena." }
    ],
    assistente: [
      { pergunta: "Como encontrar o Yoshi?", chaves: ["yoshi"], resposta: "Junte as 120 estrelas e use o canhão perto do castelo para chegar ao telhado. O Yoshi está lá esperando." },
      { pergunta: "Como liberar o boné de asa?", chaves: ["bone de asa", "wing cap", "voar", "interruptor vermelho"], resposta: "No saguão do castelo, olhe para a luz do sol no chão. Você vai para a torre do interruptor vermelho, que libera o boné de asa." },
      { pergunta: "Como liberar o boné de metal e o invisível?", chaves: ["bone de metal", "metal cap", "invisivel", "vanish", "interruptor verde", "interruptor azul"], resposta: "O interruptor verde (metal) fica num caminho escondido no Hazy Maze Cave. O azul (invisível) fica embaixo do fosso do castelo." },
      { pergunta: "Como fazer o pulo triplo?", chaves: ["pulo triplo", "pular alto", "pulo"], resposta: "Corra e pule três vezes seguidas no ritmo certo. Também dá para pular na parede (wall kick)." },
      { pergunta: "Quem controla a câmera?", chaves: ["camera", "lakitu", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Curiosidade: dentro da história, a câmera é operada por um Lakitu que segue o Mario." },
      { pergunta: "O Luigi está escondido no jogo?", chaves: ["luigi", "l is real", "2401", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Era uma lenda famosa por causa de uma placa ilegível no castelo. O Luigi não é jogável no original, mas em 2020 encontraram um modelo dele em arquivos vazados da Nintendo." },
      { pergunta: "Onde fica o coelho MIPS?", chaves: ["mips", "coelho"], resposta: "No porão do castelo. Ele aparece depois de 15 estrelas e de novo depois de 50. Cada vez que você pega ele, ganha uma estrela." },
      { pergunta: "Quem é o Toad?", chaves: ["toad", "cogumelo"], resposta: "É o ajudante da Peach. Vários Toads espalhados pelo castelo dão dicas e alguns entregam estrelas." },
      { pergunta: "Por que o controle do N64 tem analógico?", chaves: ["analogico", "controle", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Curiosidade: o Super Mario 64 foi pensado junto com o controle do Nintendo 64, e o analógico permitia andar devagar ou correr, coisa nova na época." },
<<<<<<< HEAD
      { pergunta: "Como ganhar vidas extras?", chaves: ["vida extra", "vidas", "cogumelo verde", "moedas"], resposta: "Pegue os cogumelos verdes e junte moedas: a cada 50 moedas numa fase, você ganha uma vida." },
      { pergunta: "Quem é o Lakitu?", chaves: ["quem e o lakitu", "nuvem", "cameraman"], resposta: "É a tartaruga que anda numa nuvem. No Mario 64 ele é o \"cinegrafista\" que segura a câmera do jogo." },
      { pergunta: "Por que o Mario 64 é tão importante?", chaves: ["importante", "primeiro 3d", "revolucionou", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Curiosidade: ele mostrou como fazer um jogo de plataforma em 3D com câmera livre e controle analógico. Muitos jogos depois seguiram esse modelo." },
      { pergunta: "Quem é o Bowser?", chaves: ["quem e o bowser", "rei koopa", "tartaruga"], resposta: "É o rei dos Koopas e o vilão de sempre do Mario. No Mario 64 ele tomou o castelo da Peach e escondeu as estrelas nos quadros." }
=======
      { pergunta: "Como ganhar vidas extras?", chaves: ["vida extra", "vidas", "cogumelo verde", "moedas"], resposta: "Pegue os cogumelos verdes e junte moedas: a cada 50 moedas numa fase, você ganha uma vida." }
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    ]
  },
  {
    id: "ac",
    nome: "Animal Crossing (Dōbutsu no Mori)",
    apelidos: ["animal crossing", "dobutsu no mori", "doubutsu no mori"],
    console: "Nintendo 64",
    ano: 2001,
    empresa: "Nintendo",
    genero: "Simulação de vida",
    cor: "#5A9E3A",
    capa: "ANIMAL CROSSING",
    vilao: "ninguém de verdade, a não ser a dívida da casa com o Tom Nook, como brincam os fãs",
    personagens: ["Tom Nook", "K.K. Slider", "Mr. Resetti", "os vizinhos animais"],
    piadas: ["O Tom Nook te dá uma casa e uma dívida no mesmo dia. Esse aí é gerente de banco disfarçado de guaxinim.", "O Resetti briga contigo por desligar sem salvar. Igual meu pai quando eu desligava a TV sem tirar o videogame da tomada.", "No Animal Crossing tu acorda com uma dívida e um vizinho querendo trocar camiseta. Igual a vida adulta, só que com bicho."],
    prologo: "Você chega de trem a uma vila habitada por animais falantes. O Tom Nook, dono da loja, arruma uma casa para você, mas agora tem que trabalhar para pagar.",
    historia: [
      "Não existe um final ou um objetivo fixo. O jogo segue o relógio de verdade: dia e noite, estações e datas especiais mudam a vila.",
      "Saiu no Japão em 2001 para Nintendo 64, com o nome Dōbutsu no Mori. O resto do mundo conheceu a série pela versão de GameCube, lançada nos EUA em 2002."
    ],
    imagens: ["Chegada de trem", "Vila", "Loja do Tom Nook", "Casa do jogador"],
    duvidas: [
      { pergunta: "Como pagar a casa?", chaves: ["pagar", "divida", "casa", "dinheiro"], resposta: "Venda frutas, peixes, insetos e outros itens na loja do Tom Nook e pague a dívida aos poucos. Depois de quitar, ele oferece ampliar a casa." },
      { pergunta: "O jogo segue o horário real?", chaves: ["horario", "relogio", "tempo real", "noite"], resposta: "Segue. O cartucho tem um relógio interno, então o dia, a noite e as estações acompanham o tempo de verdade." },
      { pergunta: "Quem é o Mr. Resetti?", chaves: ["resetti", "toupeira", "salvar", "desligar"], resposta: "É a toupeira que aparece para dar bronca quando você desliga o jogo sem salvar." }
    ],
    assistente: [
      { pergunta: "O que dá pra fazer na vila?", chaves: ["o que fazer", "fazer na vila", "atividades"], resposta: "Pescar, pegar insetos, desenterrar fósseis, conversar com os vizinhos, decorar a casa e participar dos eventos." },
      { pergunta: "Quando o K.K. Slider toca?", chaves: ["k.k.", "kk", "slider", "musica"], resposta: "O K.K. Slider, o cachorro violonista, aparece para tocar nas noites de sábado." },
      { pergunta: "Como ganhar mais dinheiro?", chaves: ["mais dinheiro", "ficar rico", "sinos", "bells"], resposta: "Pesque e venda peixes raros, e venda as frutas das árvores. Plantar mais árvores frutíferas ajuda bastante." },
      { pergunta: "O Tom Nook é vilão?", chaves: ["tom nook", "nook", "vilao", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "É uma brincadeira famosa dos fãs: como ele vive cobrando a dívida da casa, virou o 'vilão capitalista' da série. Na história, ele é só um comerciante gente boa." },
      { pergunta: "A versão de GameCube tinha jogos de NES?", chaves: ["nes", "gamecube", "jogos de nes", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Curiosidade: tinha. Na versão de GameCube dava para ganhar móveis que eram jogos de NES jogáveis." },
      { pergunta: "Os vizinhos vão embora?", chaves: ["vizinho", "vizinhos", "mudar", "embora"], resposta: "De vez em quando um vizinho se muda e outro chega no lugar. Conversar com eles com frequência ajuda a manter os favoritos." },
      { pergunta: "Quem é o K.K. Slider?", chaves: ["quem e o kk", "cachorro", "violao"], resposta: "É um cachorro músico que toca violão. Se você pedir, ele toca uma música e te dá uma cópia para ouvir em casa." },
<<<<<<< HEAD
      { pergunta: "Os peixes mudam?", chaves: ["peixe", "peixes", "pescar", "pesca"], resposta: "Mudam. Alguns só aparecem em certas estações e horários, então vale pescar em momentos diferentes." },
      { pergunta: "O que está escrito na capa japonesa?", chaves: ["capa", "japones", "escrito", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Curiosidade: o título どうぶつの森 (Dōbutsu no Mori) quer dizer \"Floresta dos Animais\". A capa imita um cartão-postal com selos." }
=======
      { pergunta: "Os peixes mudam?", chaves: ["peixe", "peixes", "pescar", "pesca"], resposta: "Mudam. Alguns só aparecem em certas estações e horários, então vale pescar em momentos diferentes." }
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    ]
  },
  {
    id: "goldeneye",
    nome: "GoldenEye 007",
    apelidos: ["goldeneye", "golden eye", "007"],
    console: "Nintendo 64",
    ano: 1997,
    empresa: "Rare",
    genero: "Tiro em primeira pessoa",
    cor: "#8A6A1E",
    capa: "GOLDENEYE 007",
    vilao: "Alec Trevelyan, o ex-agente 006, líder da organização Janus",
    personagens: ["James Bond", "Natalya", "Alec Trevelyan", "Xenia Onatopp", "Boris", "General Ourumov"],
    piadas: ["No multiplayer, quem escolhia o Oddjob era expulso da sala. Regra da casa.", "O James Bond usa o relógio como menu de pausa. Eu uso o meu só pra ver que tô atrasado.", "O Boris grita 'eu sou invencível' e logo depois perde. Igual eu antes da prova."],
    prologo: "Baseado no filme 007 Contra GoldenEye, de 1995. Na primeira missão, James Bond invade uma fábrica de armas químicas em Arkhangelsk junto com o agente 006, Alec Trevelyan, que parece morrer na operação.",
    historia: [
      "Anos depois, o satélite GoldenEye, capaz de desligar qualquer aparelho eletrônico, é roubado pela organização Janus.",
      "Bond passa por Severnaya, São Petersburgo e Cuba, descobre quem está por trás da Janus e enfrenta o vilão numa antena gigante."
    ],
    imagens: ["Represa", "Fábrica de Arkhangelsk", "São Petersburgo", "Antena em Cuba"],
    duvidas: [
      { pergunta: "Como pular da represa?", chaves: ["represa", "dam", "bungee", "pular"], resposta: "Complete os objetivos e vá até a plataforma na ponta da represa. Ali o Bond salta de bungee jump, como no filme." },
      { pergunta: "Como liberar os cheats?", chaves: ["cheat", "cheats", "codigo", "trapaca"], resposta: "Termine certas fases abaixo de um tempo-limite, em dificuldades específicas. Cada cheat liberado aparece no menu." },
      { pergunta: "Qual a diferença entre as dificuldades?", chaves: ["dificuldade", "agent", "00 agent", "007"], resposta: "Agent, Secret Agent e 00 Agent. Nas mais difíceis, aparecem mais objetivos em cada fase. O modo 007, personalizado, é liberado depois de terminar tudo no 00 Agent." }
    ],
    assistente: [
      { pergunta: "Como funciona o multiplayer?", chaves: ["multiplayer", "4 jogadores", "tela dividida", "amigos"], resposta: "Até quatro jogadores em tela dividida. É um dos multiplayers mais lembrados do Nintendo 64." },
      { pergunta: "Por que ninguém deixa jogar com o Oddjob?", chaves: ["oddjob", "baixinho", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Por ser bem baixinho, ele é mais difícil de acertar. Muita gente proibia ele no multiplayer." },
      { pergunta: "Quais são as fases bônus?", chaves: ["bonus", "aztec", "egyptian", "egito"], resposta: "São Aztec e Egyptian. Elas são liberadas terminando o jogo nas dificuldades mais altas." },
      { pergunta: "Onde fica a Golden Gun?", chaves: ["golden gun", "arma dourada"], resposta: "Na fase bônus Egyptian. No multiplayer, ela mata com um tiro só." },
      { pergunta: "Dá pra dirigir o tanque?", chaves: ["tanque", "dirigir"], resposta: "Dá. Numa das fases de São Petersburgo o Bond pega um tanque e sai pelas ruas, como no filme." },
      { pergunta: "Como o jogo virou um clássico?", chaves: ["classico", "famoso", "rare", "teoria", "teorias", "curiosidade", "curiosidades", "lenda", "boato"], resposta: "Curiosidade: foi feito por uma equipe pequena da Rare, com pouca experiência em jogos de tiro, e virou referência para os jogos de tiro em console." },
      { pergunta: "Quem é a Xenia Onatopp?", chaves: ["xenia", "onatopp"], resposta: "É a capanga da Janus que luta usando as pernas. Ela aparece como inimiga em algumas fases." },
      { pergunta: "Quem é a Natalya?", chaves: ["natalya", "programadora"], resposta: "É a programadora russa que sobrevive ao ataque em Severnaya e ajuda o Bond com os computadores." },
<<<<<<< HEAD
      { pergunta: "Quem é o Boris?", chaves: ["boris", "invencivel"], resposta: "É o programador que trai os russos e ajuda a Janus. Ele vive gritando que é invencível." },
      { pergunta: "Quem é o General Ourumov?", chaves: ["ourumov", "general"], resposta: "É o general russo que trabalha com a Janus e ajuda a roubar o satélite GoldenEye." },
      { pergunta: "Quem é o Alec Trevelyan?", chaves: ["alec", "trevelyan", "006"], resposta: "É o ex-agente 006, amigo do Bond que parecia ter morrido na primeira missão. Atenção, spoiler: ele é o chefe da Janus." }
=======
      { pergunta: "Quem é o Boris?", chaves: ["boris", "invencivel"], resposta: "É o programador que trai os russos e ajuda a Janus. Ele vive gritando que é invencível." }
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    ]
  }
];
