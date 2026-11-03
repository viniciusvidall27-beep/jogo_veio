/*
  Jogo Véio - jogoveio.com
  Arquivo: assistente.js
  Descrição: Assistente Véio. Procura a resposta por palavras-chave e por palavras parecidas
  nas dúvidas do jogo, nas respostas extras e nas informações gerais (ano, empresa, vilão...).
  Também reconhece quando a pergunta cita outro jogo do site. O Google é o último recurso.
  Também conta piadas sobre o jogo quando o usuário pede.
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
  return [
    { pergunta: "Quando o jogo saiu?", chaves: ["ano", "quando saiu", "lancamento", "lancado", "lancou", "data"], resposta: jogo.nome + " saiu em " + jogo.ano + " para " + jogo.console + "." },
    { pergunta: "Quem fez o jogo?", chaves: ["empresa", "quem fez", "quem criou", "desenvolvedora", "produtora", "criador", "fabricante"], resposta: jogo.nome + " foi feito pela " + jogo.empresa + "." },
    { pergunta: "Em qual console ele roda?", chaves: ["console", "plataforma", "videogame", "roda", "onde jogar"], resposta: "A versão deste guia é a de " + jogo.console + "." },
    { pergunta: "Que tipo de jogo é?", chaves: ["genero", "tipo de jogo", "estilo", "categoria"], resposta: jogo.nome + " é um jogo de " + jogo.genero.toLowerCase() + "." },
    { pergunta: "Qual é a história?", chaves: ["historia", "enredo", "trama", "resumo", "sobre o que"], resposta: jogo.prologo + " " + jogo.historia[0] },
    { pergunta: "Como o jogo começa?", chaves: ["como comeca", "comeco da historia", "prologo", "inicio da historia"], resposta: jogo.prologo },
    { pergunta: "Quem é o vilão?", chaves: ["vilao", "vilaos", "antagonista", "malvado", "inimigo principal"], resposta: "O vilão é " + jogo.vilao + "." },
    { pergunta: "Quais são os personagens?", chaves: ["personagens", "personagem", "protagonista", "heroi", "quem eu controlo"], resposta: "Os principais são: " + jogo.personagens.join(", ") + "." }
  ];
}

function baseDoJogo(jogo) {
  return jogo.duvidas.concat(jogo.assistente, fatosDoJogo(jogo));
}

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
}

function procurar(pergunta, jogo) {
  let melhor = null;
  let maiorPontuacao = 0;
  const parecidas = [];

  for (const item of baseDoJogo(jogo)) {
    const pontos = pontuar(pergunta, item);
    if (pontos > maiorPontuacao) {
      maiorPontuacao = pontos;
      melhor = item;
    }
    if (pontos === 1) {
      parecidas.push(item.pergunta);
    }
  }

  if (maiorPontuacao >= 2) {
    return { item: melhor, parecidas: [] };
  }
  return { item: null, parecidas: parecidas.slice(0, 3) };
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
  if (contem(texto, "ajuda") || contem(texto, "o que voce sabe") || contem(texto, "o que tu sabe") || contem(texto, "lista de perguntas")) {
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
      adicionarMensagem(resultado.item.resposta, "veio");
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
  adicionarMensagem("Bah, tchê! Me diz onde tu travou em " + jogo.nome + " que eu procuro no meu caderno de dicas. Se quiser ver o que eu sei, escreve \"ajuda\".", "veio");
  if (!assistentePronto) {
    formAssistente.addEventListener("submit", responder);
    assistentePronto = true;
  }
}
