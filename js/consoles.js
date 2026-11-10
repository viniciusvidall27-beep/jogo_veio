/*
  Jogo Véio - jogoveio.com
  Arquivo: consoles.js
  Descrição: lista dos consoles do site. Monta a linha do tempo e os cards de cada console,
  contando quantos jogos do site são de cada um.
  Autores: Vinicius Vidal e Rafael Chiminello
  Disciplina: Desenvolvimento Front-End para Web - Universidade Positivo - 2026
*/

const consoles = [
  { id: "nes", nome: "NES", empresa: "Nintendo", ano: 1983, bits: "8 bits", midia: "Cartucho", curiosidade: "No Japão se chamava Famicom. Ajudou a reerguer o mercado de videogames nos EUA depois da crise de 1983." },
  { id: "megadrive", nome: "Mega Drive", empresa: "Sega", ano: 1988, bits: "16 bits", midia: "Cartucho", curiosidade: "Nos EUA se chamava Genesis. No Brasil foi lançado e fabricado pela Tectoy por muitos anos." },
  { id: "snes", nome: "Super Nintendo", empresa: "Nintendo", ano: 1990, bits: "16 bits", midia: "Cartucho", curiosidade: "No Japão se chamava Super Famicom. Alguns cartuchos tinham chips extras, como o Super FX do Star Fox." },
  { id: "ps1", nome: "PlayStation", empresa: "Sony", ano: 1994, bits: "32 bits", midia: "CD", curiosidade: "Usava CD, mais barato e com mais espaço que cartucho. Nasceu de uma parceria cancelada entre a Sony e a Nintendo." },
  { id: "n64", nome: "Nintendo 64", empresa: "Nintendo", ano: 1996, bits: "64 bits", midia: "Cartucho", curiosidade: "O controle trouxe o direcional analógico, e o Rumble Pak adicionava vibração ao controle." },
  { id: "ps2", nome: "PlayStation 2", empresa: "Sony", ano: 2000, bits: "128 bits", midia: "DVD", curiosidade: "Lia DVD de filme e rodava os jogos do primeiro PlayStation. É um dos consoles mais vendidos da história." }
];

const linhaTempo = document.getElementById("linha-tempo");
const cardsConsoles = document.getElementById("cards-consoles");

function contarJogos(nomeConsole) {
  let total = 0;
  for (const jogo of jogos) {
    if (jogo.console === nomeConsole) {
      total++;
    }
  }
  return total;
}

function montarLinhaTempo() {
  for (const item of consoles) {
    const ponto = document.createElement("li");
    ponto.className = "ponto-tempo";
    ponto.innerHTML = `<span class="ano-tempo">${item.ano}</span><a href="#console-${item.id}">${item.nome}</a>`;
    linhaTempo.appendChild(ponto);
  }
}

function criarCardConsole(item) {
  const total = contarJogos(item.nome);
  const coluna = document.createElement("div");
  coluna.className = "col-12 col-md-6 col-lg-4";
  coluna.innerHTML = `
    <article class="card card-jogo card-console" id="console-${item.id}">
      <img class="card-img-top" src="img/consoles/${item.id}.jpg" alt="Foto do ${item.nome}">
      <div class="card-body d-flex flex-column gap-2">
        <h3 class="card-title m-0">${item.nome}</h3>
        <div class="d-flex flex-wrap gap-2">
          <span class="badge text-bg-warning">${item.empresa}</span>
          <span class="badge text-bg-secondary">${item.ano}</span>
          <span class="badge text-bg-secondary">${item.bits}</span>
          <span class="badge text-bg-secondary">${item.midia}</span>
        </div>
        <p class="card-text texto-suave flex-grow-1">${item.curiosidade}</p>
        <p class="small texto-apagado m-0">${total} ${total === 1 ? "jogo" : "jogos"} no site</p>
        <a class="btn btn-warning fw-bold" href="biblioteca.html?console=${encodeURIComponent(item.nome)}">Ver jogos</a>
      </div>
    </article>`;

  const imagem = coluna.querySelector("img");
  imagem.addEventListener("error", function () {
    const reserva = document.createElement("div");
    reserva.className = "foto-reserva";
    reserva.textContent = item.nome;
    imagem.replaceWith(reserva);
  });

  return coluna;
}

function montarCards() {
  for (const item of consoles) {
    cardsConsoles.appendChild(criarCardConsole(item));
  }
}

montarLinhaTempo();
montarCards();
