/*
  Jogo Véio - jogoveio.com
  Arquivo: biblioteca.js
  Descrição: busca, filtro por console e ordenação da grade de jogos da biblioteca.
  Autores: Vinicius Vidal e Rafael Chiminello
  Disciplina: Desenvolvimento Front-End para Web - Universidade Positivo - 2026
*/

const campoBusca = document.getElementById("busca");
const campoOrdem = document.getElementById("ordem");
const areaFiltros = document.getElementById("filtros");
const grade = document.getElementById("grade");
const contador = document.getElementById("contador");
const avisoVazio = document.getElementById("aviso-vazio");

const parametros = new URLSearchParams(window.location.search);
let consoleEscolhido = parametros.get("console") || "Todos";

function listarConsoles() {
  const consoles = ["Todos"];
  for (const jogo of jogos) {
    if (!consoles.includes(jogo.console)) {
      consoles.push(jogo.console);
    }
  }
  return consoles;
}

function criarFiltros() {
  areaFiltros.innerHTML = "";
  for (const nomeConsole of listarConsoles()) {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "pilula";
    botao.textContent = nomeConsole;
    if (nomeConsole === consoleEscolhido) {
      botao.classList.add("ativa");
    }
    botao.addEventListener("click", function () {
      consoleEscolhido = nomeConsole;
      criarFiltros();
      mostrarJogos();
    });
    areaFiltros.appendChild(botao);
  }
}

function ordenar(lista) {
  const tipo = campoOrdem.value;
  return lista.sort(function (a, b) {
    if (tipo === "ano") {
      return a.ano - b.ano;
    } else if (tipo === "console") {
      return a.console.localeCompare(b.console) || a.nome.localeCompare(b.nome);
    }
    return a.nome.localeCompare(b.nome);
  });
}

function mostrarJogos() {
  const texto = campoBusca.value.trim().toLowerCase();
  let resultado = [];

  for (let i = 0; i < jogos.length; i++) {
    const jogo = jogos[i];
    const passaConsole = consoleEscolhido === "Todos" || jogo.console === consoleEscolhido;
    const passaTexto = jogo.nome.toLowerCase().includes(texto);
    if (passaConsole && passaTexto) {
      resultado.push(jogo);
    }
  }

  resultado = ordenar(resultado);
  grade.innerHTML = "";

  for (const jogo of resultado) {
    const link = document.createElement("a");
    link.className = "capa-link";
    link.href = "jogo.html?id=" + jogo.id;
    link.innerHTML = `
      <img src="img/capas/${jogo.id}.jpg" alt="Capa de ${jogo.nome}">
      <span class="capa-nome">${jogo.nome}</span>
      <span class="capa-info">${jogo.console} · ${jogo.ano}</span>`;
    grade.appendChild(link);
  }

  const titulo = consoleEscolhido === "Todos" ? "TODOS OS JOGOS" : consoleEscolhido.toUpperCase();
  contador.textContent = titulo + " (" + resultado.length + ")";

  if (resultado.length === 0) {
    avisoVazio.classList.remove("d-none");
  } else {
    avisoVazio.classList.add("d-none");
  }
}

campoBusca.addEventListener("input", mostrarJogos);
campoOrdem.addEventListener("change", mostrarJogos);

criarFiltros();
mostrarJogos();
