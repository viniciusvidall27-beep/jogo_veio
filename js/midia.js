/*
  Jogo Véio - jogoveio.com
  Arquivo: midia.js
  Descrição: página de Mídia. Monta a "Rádio do Véio" com todas as músicas dos jogos
  (troca de faixa, anterior/próxima e passa sozinha para a próxima ao terminar)
  e a lista de vídeos. Lê tudo do dados.js, então novas músicas e vídeos aparecem sozinhos.
  Autores: Vinicius Vidal e Rafael Chiminello
  Disciplina: Desenvolvimento Front-End para Web - Universidade Positivo - 2026
*/

const radioAudio = document.getElementById("radio-audio");
const radioCapa = document.getElementById("radio-capa");
const radioEstado = document.getElementById("radio-estado");
const radioMusica = document.getElementById("radio-musica");
const radioJogo = document.getElementById("radio-jogo");
const radioGuia = document.getElementById("radio-guia");
const listaRadio = document.getElementById("lista-radio");
const listaVideos = document.getElementById("lista-videos");

const faixas = [];
let faixaAtual = 0;

function separarFaixas() {
  for (const jogo of jogos) {
    if (jogo.musica) {
      faixas.push(jogo);
    }
  }
}

function montarListaRadio() {
  listaRadio.innerHTML = "";
  faixas.forEach(function (jogo, posicao) {
    const item = document.createElement("li");
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "faixa-radio";
    botao.innerHTML = `
      <img src="img/capas/${jogo.id}.jpg" alt="">
      <span class="faixa-texto">
        <strong></strong>
        <span></span>
      </span>`;
    botao.querySelector("strong").textContent = jogo.musica.titulo;
    botao.querySelector(".faixa-texto span").textContent = jogo.nome + " · " + jogo.console;
    botao.addEventListener("click", function () {
      escolherFaixa(posicao, true);
    });
    item.appendChild(botao);
    listaRadio.appendChild(item);
  });
  document.getElementById("radio-contador").textContent = faixas.length + (faixas.length === 1 ? " FAIXA" : " FAIXAS");
}

function destacarFaixa() {
  const botoes = listaRadio.querySelectorAll(".faixa-radio");
  for (let i = 0; i < botoes.length; i++) {
    if (i === faixaAtual) {
      botoes[i].classList.add("ativa");
      botoes[i].setAttribute("aria-current", "true");
    } else {
      botoes[i].classList.remove("ativa");
      botoes[i].removeAttribute("aria-current");
    }
  }
}

function escolherFaixa(posicao, tocar) {
  if (faixas.length === 0) {
    return;
  }
  if (posicao < 0) {
    posicao = faixas.length - 1;
  } else if (posicao >= faixas.length) {
    posicao = 0;
  }
  faixaAtual = posicao;
  const jogo = faixas[faixaAtual];
  radioAudio.src = jogo.musica.arquivo;
  radioCapa.src = "img/capas/" + jogo.id + ".jpg";
  radioCapa.alt = "Capa de " + jogo.nome;
  radioMusica.textContent = jogo.musica.titulo;
  radioJogo.textContent = jogo.nome + " · " + jogo.console + " · " + jogo.ano;
  radioGuia.href = "jogo.html?id=" + jogo.id;
  destacarFaixa();
  if (tocar) {
    radioAudio.play();
  }
}

function montarVideos() {
  let total = 0;
  for (const jogo of jogos) {
    if (!jogo.video) {
      continue;
    }
    total++;
    const coluna = document.createElement("div");
    coluna.className = "col-md-6";
    coluna.innerHTML = `
      <figure class="card-video">
        <video controls preload="none"></video>
        <figcaption>
          <strong></strong>
          <span></span>
          <a class="fw-bold" href="jogo.html?id=${jogo.id}">Abrir guia do jogo</a>
        </figcaption>
      </figure>`;
    const player = coluna.querySelector("video");
    player.src = jogo.video.arquivo;
    player.poster = jogo.video.capa;
    coluna.querySelector("strong").textContent = jogo.video.titulo;
    coluna.querySelector("figcaption span").textContent = jogo.nome + " · " + jogo.console;
    listaVideos.appendChild(coluna);
  }
  if (total === 0) {
    document.getElementById("sem-videos").classList.remove("d-none");
  }
}

document.getElementById("radio-anterior").addEventListener("click", function () {
  escolherFaixa(faixaAtual - 1, true);
});

document.getElementById("radio-proxima").addEventListener("click", function () {
  escolherFaixa(faixaAtual + 1, true);
});

radioAudio.addEventListener("ended", function () {
  escolherFaixa(faixaAtual + 1, true);
});

radioAudio.addEventListener("play", function () {
  radioEstado.textContent = "TOCANDO AGORA";
});

radioAudio.addEventListener("pause", function () {
  radioEstado.textContent = "PAUSADO";
});

separarFaixas();
montarListaRadio();
escolherFaixa(0, false);
montarVideos();
