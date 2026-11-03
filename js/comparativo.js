/*
  Jogo Véio - jogoveio.com
  Arquivo: comparativo.js
  Descrição: monta a tabela com todos os jogos (ordenável por coluna e filtrável por console)
  e a tabela de comparação entre dois jogos escolhidos pelo usuário.
  Autores: Vinicius Vidal e Rafael Chiminello
  Disciplina: Desenvolvimento Front-End para Web - Universidade Positivo - 2026
*/

const corpoTabela = document.getElementById("corpo-tabela");
const filtroConsole = document.getElementById("filtro-console");
const contadorTabela = document.getElementById("contador-tabela");
const cabecalhos = document.querySelectorAll("#tabela-jogos th");
const seletorA = document.getElementById("jogo-a");
const seletorB = document.getElementById("jogo-b");
const corpoDuelo = document.getElementById("corpo-duelo");
const avisoMesmoJogo = document.getElementById("aviso-mesmo-jogo");

let colunaOrdem = "nome";
let ordemCrescente = true;

function contarRespostas(jogo) {
  return jogo.duvidas.length + jogo.assistente.length + 8;
}

function primeiraMaiuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function valorDaColuna(jogo, coluna) {
  if (coluna === "respostas") {
    return contarRespostas(jogo);
  }
  return jogo[coluna];
}

function preencherFiltro() {
  filtroConsole.innerHTML = '<option value="Todos">Todos os consoles</option>';
  const consoles = [];
  for (const jogo of jogos) {
    if (!consoles.includes(jogo.console)) {
      consoles.push(jogo.console);
    }
  }
  consoles.sort();
  for (const nome of consoles) {
    const opcao = document.createElement("option");
    opcao.value = nome;
    opcao.textContent = nome;
    filtroConsole.appendChild(opcao);
  }
}

function ordenarJogos(lista) {
  return lista.sort(function (a, b) {
    const valorA = valorDaColuna(a, colunaOrdem);
    const valorB = valorDaColuna(b, colunaOrdem);
    let resultado;
    if (typeof valorA === "number") {
      resultado = valorA - valorB;
    } else {
      resultado = valorA.localeCompare(valorB);
    }
    return ordemCrescente ? resultado : -resultado;
  });
}

function atualizarCabecalhos() {
  cabecalhos.forEach(function (th) {
    const botao = th.querySelector("button");
    const texto = botao.textContent.replace(/ [▲▼]$/, "");
    if (th.dataset.coluna === colunaOrdem) {
      th.setAttribute("aria-sort", ordemCrescente ? "ascending" : "descending");
      botao.textContent = texto + (ordemCrescente ? " ▲" : " ▼");
    } else {
      th.removeAttribute("aria-sort");
      botao.textContent = texto;
    }
  });
}

function montarTabela() {
  let lista = [];
  for (const jogo of jogos) {
    if (filtroConsole.value === "Todos" || jogo.console === filtroConsole.value) {
      lista.push(jogo);
    }
  }
  lista = ordenarJogos(lista);

  corpoTabela.innerHTML = "";
  for (const jogo of lista) {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <th scope="row"><a href="jogo.html?id=${jogo.id}">${jogo.nome}</a></th>
      <td>${jogo.console}</td>
      <td>${jogo.ano}</td>
      <td>${jogo.empresa}</td>
      <td>${jogo.genero}</td>
      <td>${contarRespostas(jogo)}</td>`;
    corpoTabela.appendChild(linha);
  }

  contadorTabela.textContent = lista.length + (lista.length === 1 ? " JOGO" : " JOGOS");
  atualizarCabecalhos();
}

function preencherSeletoresDuelo() {
  for (const seletor of [seletorA, seletorB]) {
    for (const jogo of jogos) {
      const opcao = document.createElement("option");
      opcao.value = jogo.id;
      opcao.textContent = jogo.nome;
      seletor.appendChild(opcao);
    }
  }
  seletorA.value = "oot";
  seletorB.value = "zelda";
  if (seletorA.value === "" || seletorB.value === "") {
    seletorA.selectedIndex = 0;
    seletorB.selectedIndex = 1;
  }
}

function montarDuelo() {
  const jogoA = jogos.find(function (jogo) { return jogo.id === seletorA.value; });
  const jogoB = jogos.find(function (jogo) { return jogo.id === seletorB.value; });

  if (jogoA.id === jogoB.id) {
    avisoMesmoJogo.classList.remove("d-none");
  } else {
    avisoMesmoJogo.classList.add("d-none");
  }

  document.getElementById("titulo-a").textContent = jogoA.nome;
  document.getElementById("titulo-b").textContent = jogoB.nome;

  const linhas = [
    ["Capa", '<img class="capa-duelo" src="img/capas/' + jogoA.id + '.jpg" alt="Capa de ' + jogoA.nome + '">', '<img class="capa-duelo" src="img/capas/' + jogoB.id + '.jpg" alt="Capa de ' + jogoB.nome + '">'],
    ["Console", jogoA.console, jogoB.console],
    ["Ano", jogoA.ano, jogoB.ano],
    ["Empresa", jogoA.empresa, jogoB.empresa],
    ["Gênero", jogoA.genero, jogoB.genero],
    ["Vilão", primeiraMaiuscula(jogoA.vilao), primeiraMaiuscula(jogoB.vilao)],
    ["Personagens", jogoA.personagens.slice(0, 4).join(", "), jogoB.personagens.slice(0, 4).join(", ")],
    ["Respostas do Véio", contarRespostas(jogoA), contarRespostas(jogoB)],
    ["Guia", '<a href="jogo.html?id=' + jogoA.id + '">Abrir guia</a>', '<a href="jogo.html?id=' + jogoB.id + '">Abrir guia</a>']
  ];

  corpoDuelo.innerHTML = "";
  for (const [item, valorA, valorB] of linhas) {
    const linha = document.createElement("tr");
    linha.innerHTML = `<th scope="row">${item}</th><td>${valorA}</td><td>${valorB}</td>`;
    corpoDuelo.appendChild(linha);
  }

  const diferenca = Math.abs(jogoA.ano - jogoB.ano);
  const linhaIdade = document.createElement("tr");
  let textoIdade;
  if (diferenca === 0) {
    textoIdade = "Os dois jogos saíram no mesmo ano.";
  } else {
    textoIdade = "Diferença entre os jogos: " + diferenca + (diferenca === 1 ? " ano" : " anos");
  }
  linhaIdade.innerHTML = '<th scope="row">Idade</th><td colspan="2" class="text-center fw-bold">' + textoIdade + "</td>";
  corpoDuelo.appendChild(linhaIdade);
}

cabecalhos.forEach(function (th) {
  th.querySelector("button").addEventListener("click", function () {
    if (colunaOrdem === th.dataset.coluna) {
      ordemCrescente = !ordemCrescente;
    } else {
      colunaOrdem = th.dataset.coluna;
      ordemCrescente = true;
    }
    montarTabela();
  });
});

filtroConsole.addEventListener("change", montarTabela);
seletorA.addEventListener("change", montarDuelo);
seletorB.addEventListener("change", montarDuelo);

preencherFiltro();
montarTabela();
preencherSeletoresDuelo();
montarDuelo();
