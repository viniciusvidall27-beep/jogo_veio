/*
  Jogo Véio - jogoveio.com
  Arquivo: jogo.js
  Descrição: preenche a página do jogo escolhido, controla o botão "Minha lista" (localStorage)
  inicia o Assistente Véio (arquivo assistente.js), mostra o botão da música do jogo no canto
  inferior direito e coloca o vídeo-dica dentro da resposta da dúvida ligada a ele.
  Autores: Vinicius Vidal e Rafael Chiminello
  Disciplina: Desenvolvimento Front-End para Web - Universidade Positivo - 2026
*/

const CHAVE_LISTA = "jogoveio-lista";

const parametros = new URLSearchParams(window.location.search);
const idJogo = parametros.get("id") || "zelda";
const jogo = jogos.find(function (item) {
  return item.id === idJogo;
});

const botaoLista = document.getElementById("botao-lista");
const tocador = document.getElementById("tocador");
const painelMusica = document.getElementById("painel-musica");
const audioJogo = document.getElementById("audio-jogo");
const botaoMusica = document.getElementById("botao-musica");
const avisoLista = document.getElementById("aviso-lista");

function preencherPagina() {
  document.title = jogo.nome + " | Jogo Véio";
  document.getElementById("caminho-nome").textContent = jogo.nome;
  document.getElementById("nome-jogo").textContent = jogo.nome;

  const capa = document.getElementById("capa-jogo");
  capa.src = "img/capas/" + jogo.id + ".jpg";
  capa.alt = "Capa de " + jogo.nome;

  const etiquetas = [jogo.console, jogo.ano, jogo.empresa, jogo.genero];
  const areaEtiquetas = document.getElementById("etiquetas");
  for (const etiqueta of etiquetas) {
    const span = document.createElement("span");
    span.className = "etiqueta";
    span.textContent = etiqueta;
    areaEtiquetas.appendChild(span);
  }

  document.getElementById("prologo").textContent = jogo.prologo;

  const areaHistoria = document.getElementById("historia");
  for (const paragrafo of jogo.historia) {
    const p = document.createElement("p");
    p.textContent = paragrafo;
    areaHistoria.appendChild(p);
  }

  const areaImagens = document.getElementById("imagens");
  for (let i = 0; i < jogo.imagens.length; i++) {
    const figura = document.createElement("figure");
    figura.className = "m-0";
    const img = document.createElement("img");
    img.src = "img/jogos/" + jogo.id + "-" + (i + 1) + ".jpg";
    img.alt = jogo.imagens[i];
    img.addEventListener("error", function () {
      const vazio = document.createElement("div");
      vazio.className = "sem-imagem";
      vazio.textContent = "Imagem em breve: " + jogo.imagens[i];
      img.replaceWith(vazio);
    });
    const legenda = document.createElement("figcaption");
    legenda.className = "texto-apagado small mt-2";
    legenda.textContent = jogo.imagens[i];
    figura.appendChild(img);
    figura.appendChild(legenda);
    areaImagens.appendChild(figura);
  }

  const areaDuvidas = document.getElementById("duvidas");
  jogo.duvidas.forEach(function (duvida, i) {
    const item = document.createElement("div");
    item.className = "accordion-item";
    item.innerHTML = `
      <h3 class="accordion-header">
        <button class="accordion-button ${i === 0 ? "" : "collapsed"}" type="button" data-bs-toggle="collapse" data-bs-target="#duvida-${i}" aria-expanded="${i === 0}" aria-controls="duvida-${i}"></button>
      </h3>
      <div id="duvida-${i}" class="accordion-collapse collapse ${i === 0 ? "show" : ""}" data-bs-parent="#duvidas">
        <div class="accordion-body texto-suave"></div>
      </div>`;
    item.querySelector(".accordion-button").textContent = duvida.pergunta;
    const corpo = item.querySelector(".accordion-body");
    corpo.textContent = duvida.resposta;
    if (jogo.video && jogo.video.pergunta === duvida.pergunta) {
      corpo.appendChild(criarVideo(jogo.video));
    }
    areaDuvidas.appendChild(item);
  });
}

function criarVideo(video) {
  const figura = document.createElement("figure");
  figura.className = "video-dica";
  const player = document.createElement("video");
  player.src = video.arquivo;
  player.poster = video.capa;
  player.controls = true;
  player.preload = "none";
  const legenda = document.createElement("figcaption");
  legenda.textContent = "Vídeo: " + video.titulo;
  figura.appendChild(player);
  figura.appendChild(legenda);
  return figura;
}

function prepararMusica() {
  audioJogo.pause();
  painelMusica.classList.add("d-none");
  botaoMusica.setAttribute("aria-expanded", "false");
  if (!jogo.musica) {
    tocador.classList.add("d-none");
    return;
  }
  tocador.classList.remove("d-none");
  audioJogo.src = jogo.musica.arquivo;
  document.getElementById("titulo-musica").textContent = jogo.musica.titulo;
}

function alternarMusica() {
  const abrir = painelMusica.classList.contains("d-none");
  painelMusica.classList.toggle("d-none");
  botaoMusica.setAttribute("aria-expanded", abrir);
  if (abrir && audioJogo.paused) {
    audioJogo.play();
  }
}

function lerLista() {
  const salvo = localStorage.getItem(CHAVE_LISTA);
  if (salvo === null) {
    return [];
  }
  return JSON.parse(salvo);
}

function estaNaLista() {
  const lista = lerLista();
  for (const item of lista) {
    if (item.id === jogo.id) {
      return true;
    }
  }
  return false;
}

function atualizarBotaoLista() {
  if (estaNaLista()) {
    botaoLista.textContent = "✓ Na minha lista";
    botaoLista.classList.remove("botao-amarelo");
    botaoLista.classList.add("botao-verde");
  } else {
    botaoLista.textContent = "+ Minha lista";
    botaoLista.classList.remove("botao-verde");
    botaoLista.classList.add("botao-amarelo");
  }
}

function alternarLista() {
  let lista = lerLista();
  if (estaNaLista()) {
    lista = lista.filter(function (item) {
      return item.id !== jogo.id;
    });
    avisoLista.textContent = jogo.nome + " saiu da sua lista.";
  } else {
    lista.push({ id: jogo.id, status: "Quero jogar" });
    avisoLista.innerHTML = jogo.nome + ' entrou na sua lista. <a class="alert-link" href="minha-lista.html">Ver minha lista</a>';
  }
  localStorage.setItem(CHAVE_LISTA, JSON.stringify(lista));
  avisoLista.classList.remove("d-none");
  atualizarBotaoLista();
}

if (jogo) {
  preencherPagina();
  atualizarBotaoLista();
  iniciarAssistente(jogo);
  prepararMusica();
  botaoLista.addEventListener("click", alternarLista);
  botaoMusica.addEventListener("click", alternarMusica);
  audioJogo.addEventListener("play", function () {
    botaoMusica.classList.add("tocando");
  });
  audioJogo.addEventListener("pause", function () {
    botaoMusica.classList.remove("tocando");
  });
} else {
  document.getElementById("conteudo-jogo").classList.add("d-none");
  document.getElementById("aviso-erro").classList.remove("d-none");
}
