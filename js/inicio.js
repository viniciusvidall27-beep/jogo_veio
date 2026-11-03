/*
  Jogo Véio - jogoveio.com
  Arquivo: inicio.js
  Descrição: monta os cards de destaque e a lista de dúvidas populares da página inicial.
  Autores: Vinicius Vidal e Rafael Chiminello
  Disciplina: Desenvolvimento Front-End para Web - Universidade Positivo - 2026
*/

const idsDestaque = ["zelda", "sotn", "ff7", "mgs"];
const areaDestaques = document.getElementById("destaques");
const areaDuvidas = document.getElementById("duvidas-populares");

function buscarJogo(id) {
  for (let i = 0; i < jogos.length; i++) {
    if (jogos[i].id === id) {
      return jogos[i];
    }
  }
  return null;
}

function criarCard(jogo) {
  const coluna = document.createElement("div");
  coluna.className = "col-sm-6 col-lg-3";
  coluna.innerHTML = `
    <article class="card card-jogo">
      <img class="card-img-top" src="img/capas/${jogo.id}.jpg" alt="Capa de ${jogo.nome}">
      <div class="card-body d-flex flex-column gap-2">
        <span class="badge text-bg-dark align-self-start">${jogo.console} · ${jogo.ano}</span>
        <h3 class="card-title m-0">${jogo.nome}</h3>
        <p class="card-text texto-suave flex-grow-1">${jogo.duvidas[0].pergunta}</p>
        <a class="btn btn-warning fw-bold" href="jogo.html?id=${jogo.id}">Abrir guia</a>
      </div>
    </article>`;
  return coluna;
}

for (const id of idsDestaque) {
  const jogo = buscarJogo(id);
  if (jogo) {
    areaDestaques.appendChild(criarCard(jogo));
  }
}

const populares = ["chrono", "smetroid", "mgs3", "s3k", "alttp"];

for (let i = 0; i < populares.length; i++) {
  const jogo = buscarJogo(populares[i]);
  if (jogo === null) {
    continue;
  }
  const link = document.createElement("a");
  link.href = "jogo.html?id=" + jogo.id;
  link.innerHTML = `<span>${jogo.duvidas[0].pergunta}</span><span class="texto-apagado small text-nowrap">${jogo.nome}</span>`;
  areaDuvidas.appendChild(link);
}
