/*
  Jogo Véio - jogoveio.com
  Arquivo: assistente.js
  Descrição: Assistente Véio. Procura a resposta por palavras-chave e por palavras parecidas
  nas dúvidas do jogo, nas respostas extras e nas informações gerais (ano, empresa, vilão...).
<<<<<<< HEAD
  Também reconhece quando a pergunta cita outro jogo do site e entende palavras digitadas
  com pequenos erros (distância de Levenshtein). O Google é o último recurso.
  Também conta piadas sobre o jogo quando o usuário pede e, quando perguntam "o que você sabe",
  lista todas as perguntas que conhece (dicas e teorias), sem as piadas.
=======
  Também reconhece quando a pergunta cita outro jogo do site. O Google é o último recurso.
  Também conta piadas sobre o jogo quando o usuário pede.
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
  Antes de responder, o Véio "pensa" por 0,8 segundo, mostrando a churrasqueira animada.
  Autores: Vinicius Vidal e Rafael Chiminello
  Disciplina: Desenvolvimento Front-End para Web - Universidade Positivo - 2026
*/

const mensagens = document.getElementById("mensagens");
const formAssistente = document.getElementById("form-assistente");
const campoPergunta = document.getElementById("pergunta");

const palavrasIgnoradas = [
  "como", "onde", "qual", "quais", "quem", "que", "para", "pra", "com", "sem", "uma", "uns", "umas",
  "dos", "das", "por", "mais", "isso", "esse", "essa", "este", "esta", "tem", "ter", "fazer", "faco",
  "consigo", "conseguir", "achar", "acho", "pegar", "pego", "jogo", "voce", "vc", "tu", "eu", "meu",
  "minha", "nao", "sim", "ele", "ela", "the", "and", "quando", "porque", "pq", "fica", "ficar", "ser",
  "sao", "tenho", "preciso", "quero", "sobre", "depois", "antes", "aqui", "dar", "vou", "vai"
];

const piadasGerais = [
  "Na minha época, o tutorial era o primo mais velho dizendo: me dá que eu passo pra ti.",
  "Fita que não pegava a gente assoprava. Dizem que nem ajudava, mas que dava fé, dava.",
  "O chefe mais difícil dos anos 90 era a mãe gritando: desliga esse videogame que vai dar choque!",
  "Locadora era assim: tu alugava na sexta e na segunda descobria que outro guri tinha apagado teu save.",
  "Memory card cheio era o fim do mundo. Tinha que escolher qual jogo ia morrer.",
  "Controle com fio curto era pra gente aprender a jogar sentado no chão, colado na TV."
];

let jogoAtual = null;
let ultimaPiada = "";
let assistentePronto = false;
let pensando = false;
const TEMPO_PENSANDO = 800;

function normalizar(texto) {
  return String(texto)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9+\- ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function palavrasUteis(texto) {
  const lista = [];
  for (const palavra of normalizar(texto).split(" ")) {
    if (palavra.length >= 3 && !palavrasIgnoradas.includes(palavra)) {
      lista.push(palavra);
    }
  }
  return lista;
}

function contem(texto, trecho) {
  const t = normalizar(trecho);
  return t.length > 0 && (" " + texto + " ").includes(" " + t);
}

function fatosDoJogo(jogo) {
<<<<<<< HEAD
  const fatos = [
=======
  return [
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    { pergunta: "Quando o jogo saiu?", chaves: ["ano", "quando saiu", "lancamento", "lancado", "lancou", "data"], resposta: jogo.nome + " saiu em " + jogo.ano + " para " + jogo.console + "." },
    { pergunta: "Quem fez o jogo?", chaves: ["empresa", "quem fez", "quem criou", "desenvolvedora", "produtora", "criador", "fabricante"], resposta: jogo.nome + " foi feito pela " + jogo.empresa + "." },
    { pergunta: "Em qual console ele roda?", chaves: ["console", "plataforma", "videogame", "roda", "onde jogar"], resposta: "A versão deste guia é a de " + jogo.console + "." },
    { pergunta: "Que tipo de jogo é?", chaves: ["genero", "tipo de jogo", "estilo", "categoria"], resposta: jogo.nome + " é um jogo de " + jogo.genero.toLowerCase() + "." },
    { pergunta: "Qual é a história?", chaves: ["historia", "enredo", "trama", "resumo", "sobre o que"], resposta: jogo.prologo + " " + jogo.historia[0] },
    { pergunta: "Como o jogo começa?", chaves: ["como comeca", "comeco da historia", "prologo", "inicio da historia"], resposta: jogo.prologo },
    { pergunta: "Quem é o vilão?", chaves: ["vilao", "vilaos", "antagonista", "malvado", "inimigo principal"], resposta: "O vilão é " + jogo.vilao + "." },
    { pergunta: "Quais são os personagens?", chaves: ["personagens", "personagem", "protagonista", "heroi", "quem eu controlo"], resposta: "Os principais são: " + jogo.personagens.join(", ") + "." }
  ];
<<<<<<< HEAD
  if (jogo.video) {
    fatos.push({ pergunta: "Tem vídeo com alguma dica?", chaves: ["video", "assistir", "tem video"], resposta: "Tem! Tem um vídeo mostrando " + jogo.video.titulo.toLowerCase() + ". Ele também aparece aqui na página, dentro da dúvida \"" + jogo.video.pergunta + "\".", link: jogo.video.arquivo });
  }
  return fatos;
}

function linkDoVideo(jogo, item) {
  if (item.link) {
    return item.link;
  }
  if (jogo.video && jogo.video.pergunta === item.pergunta) {
    return jogo.video.arquivo;
  }
  return null;
=======
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
}

function baseDoJogo(jogo) {
  return jogo.duvidas.concat(jogo.assistente, fatosDoJogo(jogo));
}

<<<<<<< HEAD
function distancia(a, b) {
  const linhaAnterior = [];
  for (let j = 0; j <= b.length; j++) {
    linhaAnterior.push(j);
  }
  for (let i = 1; i <= a.length; i++) {
    const linhaAtual = [i];
    for (let j = 1; j <= b.length; j++) {
      const troca = a[i - 1] === b[j - 1] ? 0 : 1;
      linhaAtual.push(Math.min(linhaAnterior[j] + 1, linhaAtual[j - 1] + 1, linhaAnterior[j - 1] + troca));
    }
    linhaAnterior.splice(0, linhaAnterior.length, ...linhaAtual);
  }
  return linhaAnterior[b.length];
}

function palavraParecida(digitada, certa) {
  if (digitada === certa) {
    return true;
  }
  if (digitada.length === 3 && certa.length === 4 && certa.startsWith(digitada)) {
    return true;
  }
  if (digitada.length < 4 || certa.length < 4) {
    return false;
  }
  if (certa.startsWith(digitada) || digitada.startsWith(certa)) {
    return true;
  }
  const tolerancia = certa.length >= 7 ? 2 : 1;
  return Math.abs(digitada.length - certa.length) <= tolerancia && distancia(digitada, certa) <= tolerancia;
}

function contemAproximado(palavrasDaPergunta, chave) {
  const palavrasDaChave = normalizar(chave).split(" ");
  for (const palavraChave of palavrasDaChave) {
    let achou = false;
    for (const palavra of palavrasDaPergunta) {
      if (palavraParecida(palavra, palavraChave)) {
        achou = true;
        break;
      }
    }
    if (!achou) {
      return false;
    }
  }
  return true;
}

function pontuar(pergunta, item) {
  const texto = normalizar(pergunta);
  const palavrasDaPergunta = texto.split(" ");
  let pontos = 0;
  let exato = false;

  for (const chave of item.chaves) {
    const tamanho = normalizar(chave).split(" ").length;
    if (contem(texto, chave)) {
      pontos += 2 + tamanho;
      exato = true;
    } else if (contemAproximado(palavrasDaPergunta, chave)) {
      pontos += 1 + tamanho;
    }
  }

  const palavrasDoItem = normalizar(item.pergunta + " " + item.chaves.join(" ")).split(" ");
  for (const palavra of palavrasUteis(pergunta)) {
    for (const palavraItem of palavrasDoItem) {
      if (palavraParecida(palavra, palavraItem)) {
        pontos += 1;
        break;
      }
    }
  }
  return { pontos: pontos, exato: exato };
=======
function pontuar(pergunta, item) {
  const texto = normalizar(pergunta);
  let pontos = 0;

  for (const chave of item.chaves) {
    if (contem(texto, chave)) {
      pontos += 2 + normalizar(chave).split(" ").length;
    }
  }

  const textoItem = " " + normalizar(item.pergunta + " " + item.chaves.join(" ")) + " ";
  for (const palavra of palavrasUteis(pergunta)) {
    const raiz = palavra.length > 5 ? palavra.slice(0, palavra.length - 2) : palavra;
    if (textoItem.includes(" " + raiz)) {
      pontos += 1;
    }
  }
  return pontos;
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
}

function procurar(pergunta, jogo) {
  let melhor = null;
  let maiorPontuacao = 0;
<<<<<<< HEAD
  let melhorExato = false;
  const parecidas = [];

  for (const item of baseDoJogo(jogo)) {
    const resultado = pontuar(pergunta, item);
    if (resultado.pontos > maiorPontuacao) {
      maiorPontuacao = resultado.pontos;
      melhor = item;
      melhorExato = resultado.exato;
    }
    if (resultado.pontos === 1) {
=======
  const parecidas = [];

  for (const item of baseDoJogo(jogo)) {
    const pontos = pontuar(pergunta, item);
    if (pontos > maiorPontuacao) {
      maiorPontuacao = pontos;
      melhor = item;
    }
    if (pontos === 1) {
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
      parecidas.push(item.pergunta);
    }
  }

  if (maiorPontuacao >= 2) {
<<<<<<< HEAD
    return { item: melhor, aproximado: !melhorExato, parecidas: [] };
  }
  return { item: null, aproximado: false, parecidas: parecidas.slice(0, 3) };
=======
    return { item: melhor, parecidas: [] };
  }
  return { item: null, parecidas: parecidas.slice(0, 3) };
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
}

function jogoCitado(pergunta) {
  const texto = normalizar(pergunta);
  let escolhido = null;
  let maiorApelido = 0;

  for (const jogo of jogos) {
    for (const apelido of jogo.apelidos) {
      if (contem(texto, apelido) && apelido.length > maiorApelido) {
        maiorApelido = apelido.length;
        escolhido = jogo;
      }
    }
  }
  return escolhido;
}

<<<<<<< HEAD
function pediuTudo(pergunta) {
  const texto = normalizar(pergunta);
  const pedidos = ["o que voce sabe", "o que tu sabe", "tudo que voce sabe", "tudo que tu sabe", "o que sabe sobre"];
  for (const pedido of pedidos) {
    if (contem(texto, pedido)) {
      return true;
    }
  }
  return false;
}

function ehTeoria(item) {
  return item.chaves.includes("teoria");
}

function responderItem(item) {
  if (pensando) {
    return;
  }
  adicionarMensagem(item.pergunta, "voce");
  pensando = true;
  mostrarPensando();
  setTimeout(function () {
    document.getElementById("veio-pensando").remove();
    pensando = false;
    const link = linkDoVideo(jogoAtual, item);
    adicionarMensagem(item.resposta, "veio", link, "Ver o vídeo", true);
  }, TEMPO_PENSANDO);
}

function criarGrupo(bolha, titulo, itens) {
  if (itens.length === 0) {
    return;
  }
  const cabecalho = document.createElement("p");
  cabecalho.className = "grupo-veio";
  cabecalho.textContent = titulo + " (" + itens.length + ")";
  bolha.appendChild(cabecalho);
  const lista = document.createElement("ul");
  lista.className = "lista-veio";
  for (const item of itens) {
    const linha = document.createElement("li");
    const botao = document.createElement("button");
    botao.type = "button";
    botao.textContent = item.pergunta;
    botao.addEventListener("click", function () {
      responderItem(item);
    });
    linha.appendChild(botao);
    lista.appendChild(linha);
  }
  bolha.appendChild(lista);
}

function mostrarTudo(jogo) {
  const dicas = [];
  const teorias = [];
  for (const item of jogo.duvidas.concat(jogo.assistente)) {
    if (ehTeoria(item)) {
      teorias.push(item);
    } else {
      dicas.push(item);
    }
  }
  const bolha = document.createElement("div");
  bolha.className = "msg msg-veio";
  const intro = document.createElement("p");
  intro.className = "m-0";
  intro.textContent = "Bah, sobre " + jogo.nome + " eu sei tudo isso aqui. Clica numa pergunta que eu respondo:";
  bolha.appendChild(intro);
  criarGrupo(bolha, "Sobre o jogo", fatosDoJogo(jogo));
  criarGrupo(bolha, "Dicas", dicas);
  criarGrupo(bolha, "Teorias e curiosidades", teorias);
  mensagens.appendChild(bolha);
  mensagens.scrollTop = bolha.offsetTop - mensagens.offsetTop;
}

=======
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
function sortearPiada() {
  const opcoes = (jogoAtual.piadas || []).concat(piadasGerais);
  let piada = ultimaPiada;
  while (piada === ultimaPiada && opcoes.length > 1) {
    piada = opcoes[Math.floor(Math.random() * opcoes.length)];
  }
  ultimaPiada = piada;
  return piada + " Hehe.";
}

function respostaDeConversa(pergunta) {
  const texto = normalizar(pergunta);
  const curta = texto.split(" ").length <= 4;

  if (contem(texto, "obrigad") || contem(texto, "valeu") || contem(texto, "vlw") || contem(texto, "brigad")) {
    return "De nada, tchê! Se travar de novo, é só chamar.";
  }
  if (contem(texto, "quem e voce") || contem(texto, "quem e tu") || contem(texto, "teu nome") || contem(texto, "seu nome")) {
    return "Sou o Véio, gaúcho que passou a infância na locadora. Conheço " + jogos.length + " clássicos deste site de cabo a rabo.";
  }
  if (contem(texto, "piada") || contem(texto, "me faz rir") || contem(texto, "engracad") || contem(texto, "zoeira") || contem(texto, "anedota")) {
    return sortearPiada();
  }
<<<<<<< HEAD
  if (contem(texto, "ajuda") || contem(texto, "lista de perguntas")) {
=======
  if (contem(texto, "ajuda") || contem(texto, "o que voce sabe") || contem(texto, "o que tu sabe") || contem(texto, "lista de perguntas")) {
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    const exemplos = [];
    const base = jogoAtual.assistente;
    for (let i = 0; i < base.length && exemplos.length < 4; i++) {
      exemplos.push('"' + base[i].pergunta + '"');
    }
    return "Sei " + baseDoJogo(jogoAtual).length + " coisas sobre " + jogoAtual.nome + ": história, vilão, personagens, chefes, itens, teorias e até piada. Por exemplo: " + exemplos.join(", ") + ".";
  }
  if (curta && ["oi", "ola", "bah", "eai", "e ai", "salve", "bom dia", "boa tarde", "boa noite", "opa"].some(function (s) { return contem(texto, s); })) {
    return "Opa, tudo certo? Pergunta o que tu quiser sobre " + jogoAtual.nome + ".";
  }
  return null;
}

function adicionarMensagem(texto, autor, link, rotuloLink, novaAba) {
  const div = document.createElement("div");
  div.className = "msg " + (autor === "voce" ? "msg-voce" : "msg-veio");
  const p = document.createElement("p");
  p.className = "m-0";
  p.textContent = texto;
  div.appendChild(p);
  if (link) {
    const a = document.createElement("a");
    a.href = link;
    a.className = "fw-bold d-inline-block mt-2";
    a.textContent = rotuloLink;
    if (novaAba) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    div.appendChild(a);
  }
  mensagens.appendChild(div);
  mensagens.scrollTop = mensagens.scrollHeight;
}

function mostrarPensando() {
  const bolha = document.createElement("div");
  bolha.className = "msg msg-veio msg-pensando";
  bolha.id = "veio-pensando";
  bolha.setAttribute("aria-label", "O Véio está pensando");
  bolha.innerHTML = '<img src="img/churrasqueira.svg" alt="" width="56" height="56"><span>O Véio tá pensando...</span>';
  mensagens.appendChild(bolha);
  mensagens.scrollTop = mensagens.scrollHeight;
}

function responder(evento) {
  evento.preventDefault();
  const pergunta = campoPergunta.value.trim();
  if (pergunta.length < 2 || pensando) {
    return;
  }
  adicionarMensagem(pergunta, "voce");
  campoPergunta.value = "";
  pensando = true;
  mostrarPensando();

  setTimeout(function () {
    document.getElementById("veio-pensando").remove();
    pensando = false;
    gerarResposta(pergunta);
  }, TEMPO_PENSANDO);
}

function gerarResposta(pergunta) {
<<<<<<< HEAD
  if (pediuTudo(pergunta)) {
    const citadoLista = jogoCitado(pergunta);
    const textoLista = normalizar(pergunta);
    if (citadoLista || contem(textoLista, "jogo") || textoLista.endsWith("sabe")) {
      mostrarTudo(citadoLista || jogoAtual);
      return;
    }
  }
=======
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
  const conversa = respostaDeConversa(pergunta);
  if (conversa) {
    adicionarMensagem(conversa, "veio");
    return;
  }

  let jogo = jogoAtual;
  const citado = jogoCitado(pergunta);
  if (citado && citado.id !== jogoAtual.id) {
    jogo = citado;
  }

  const resultado = procurar(pergunta, jogo);

  if (resultado.item) {
    if (jogo.id === jogoAtual.id) {
<<<<<<< HEAD
      const link = linkDoVideo(jogo, resultado.item);
      let texto = resultado.item.resposta;
      if (resultado.aproximado) {
        texto = "Acho que tu quis dizer \"" + resultado.item.pergunta + "\". " + texto;
      }
      adicionarMensagem(texto, "veio", link, "Ver o vídeo", true);
=======
      adicionarMensagem(resultado.item.resposta, "veio");
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
    } else {
      adicionarMensagem("Sobre " + jogo.nome + ": " + resultado.item.resposta, "veio", "jogo.html?id=" + jogo.id, "Abrir guia de " + jogo.nome, false);
    }
    return;
  }

  if (jogo.id !== jogoAtual.id) {
    adicionarMensagem("Isso é sobre " + jogo.nome + ", né? Lá no guia dele eu te ajudo melhor.", "veio", "jogo.html?id=" + jogo.id, "Abrir guia de " + jogo.nome, false);
    return;
  }

  if (resultado.parecidas.length > 0) {
    const buscaParecida = "https://www.google.com/search?q=" + encodeURIComponent(jogo.nome + " " + pergunta);
    adicionarMensagem("Não achei exatamente isso, mas talvez tu queira saber: " + resultado.parecidas.join(" / ") + ". Se for outra coisa, tenta com outras palavras.", "veio", buscaParecida, "Ou pesquisar no Google", true);
    return;
  }

  const busca = "https://www.google.com/search?q=" + encodeURIComponent(jogo.nome + " " + pergunta);
  adicionarMensagem("Essa não tá no meu caderno de dicas, guri. Escreve \"ajuda\" para ver o que eu sei, ou procura no Google:", "veio", busca, "Pesquisar no Google", true);
}

function iniciarAssistente(jogo) {
  jogoAtual = jogo;
  mensagens.innerHTML = "";
<<<<<<< HEAD
  adicionarMensagem("Bah, tchê! Me diz onde tu travou em " + jogo.nome + " que eu procuro no meu caderno de dicas. Para ver tudo o que eu sei, pergunta: \"o que você sabe sobre este jogo?\"", "veio");
=======
  adicionarMensagem("Bah, tchê! Me diz onde tu travou em " + jogo.nome + " que eu procuro no meu caderno de dicas. Se quiser ver o que eu sei, escreve \"ajuda\".", "veio");
>>>>>>> 81c116ad8f1a5f88007c08bbcf4e6d7b4a7fe107
  if (!assistentePronto) {
    formAssistente.addEventListener("submit", responder);
    assistentePronto = true;
  }
}
