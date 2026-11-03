/*
  Jogo Véio - jogoveio.com
  Arquivo: minha-lista.js
  Descrição: lista pessoal de jogos salva no localStorage. Permite adicionar, mudar o status,
  editar a anotação, filtrar, remover e limpar a lista.
  Autores: Vinicius Vidal e Rafael Chiminello
  Disciplina: Desenvolvimento Front-End para Web - Universidade Positivo - 2026
*/

const CHAVE_MINHA_LISTA = "jogoveio-lista";
const STATUS = ["Quero jogar", "Jogando", "Zerado"];
const CORES_STATUS = { "Quero jogar": "#F6BA00", "Jogando": "#4D8FE8", "Zerado": "#2E9E4F" };

const formAdicionar = document.getElementById("form-adicionar");
const seletorJogo = document.getElementById("novo-jogo");
const seletorStatus = document.getElementById("novo-status");
const campoNota = document.getElementById("nova-nota");
const areaItens = document.getElementById("itens-lista");
const areaFiltrosStatus = document.getElementById("filtros-status");
const avisoListaVazia = document.getElementById("lista-vazia");
const areaAviso = document.getElementById("aviso-lista");
const botaoLimpar = document.getElementById("limpar-lista");

let filtroStatus = "Todos";

function carregarLista() {
  const salvo = localStorage.getItem(CHAVE_MINHA_LISTA);
  if (salvo === null) {
    return [];
  }
  return JSON.parse(salvo);
}

function salvarLista(lista) {
  localStorage.setItem(CHAVE_MINHA_LISTA, JSON.stringify(lista));
}

function acharJogo(id) {
  for (const jogo of jogos) {
    if (jogo.id === id) {
      return jogo;
    }
  }
  return null;
}

function mostrarAviso(texto, tipo) {
  areaAviso.innerHTML = `
    <div class="alerta alerta-${tipo}" role="alert">
      <span></span>
      <button type="button" class="alerta-fechar" aria-label="Fechar">×</button>
    </div>`;
  areaAviso.querySelector("span").textContent = texto;
  areaAviso.querySelector(".alerta-fechar").addEventListener("click", function () {
    areaAviso.innerHTML = "";
  });
}

function preencherSeletorJogo(lista) {
  seletorJogo.innerHTML = '<option value="">Escolha um jogo</option>';
  const ids = lista.map(function (item) {
    return item.id;
  });
  for (const jogo of jogos) {
    if (!ids.includes(jogo.id)) {
      const opcao = document.createElement("option");
      opcao.value = jogo.id;
      opcao.textContent = jogo.nome + " (" + jogo.console + ")";
      seletorJogo.appendChild(opcao);
    }
  }
}

function atualizarContadores(lista) {
  const contagem = { "Quero jogar": 0, "Jogando": 0, "Zerado": 0 };
  for (const item of lista) {
    contagem[item.status]++;
  }
  document.getElementById("qtd-total").textContent = lista.length;
  document.getElementById("qtd-quero").textContent = contagem["Quero jogar"];
  document.getElementById("qtd-jogando").textContent = contagem["Jogando"];
  document.getElementById("qtd-zerado").textContent = contagem["Zerado"];
}

function criarFiltrosStatus() {
  areaFiltrosStatus.innerHTML = "";
  for (const nome of ["Todos"].concat(STATUS)) {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "pilula" + (nome === filtroStatus ? " ativa" : "");
    botao.textContent = nome;
    botao.addEventListener("click", function () {
      filtroStatus = nome;
      renderizarLista();
    });
    areaFiltrosStatus.appendChild(botao);
  }
}

function alterarItem(id, campo, valor) {
  const lista = carregarLista();
  for (const item of lista) {
    if (item.id === id) {
      item[campo] = valor;
    }
  }
  salvarLista(lista);
}

function removerItem(id) {
  const lista = carregarLista().filter(function (item) {
    return item.id !== id;
  });
  salvarLista(lista);
  const jogo = acharJogo(id);
  mostrarAviso(jogo.nome + " foi removido da lista.", "neutro");
  renderizarLista();
}

function criarItem(item, jogo) {
  const coluna = document.createElement("div");
    coluna.innerHTML = `
    <article class="item-lista">
      <img src="img/capas/${jogo.id}.jpg" alt="Capa de ${jogo.nome}">
      <div class="item-conteudo">
        <span class="etiqueta-status" style="background-color: ${CORES_STATUS[item.status]};">${item.status}</span>
        <h3>${jogo.nome}</h3>
        <span class="texto-apagado pequeno">${jogo.console} · ${jogo.ano}</span>
        <label class="oculto-leitor" for="status-${jogo.id}">Status de ${jogo.nome}</label>
        <select class="campo campo-pequeno" id="status-${jogo.id}"></select>
        <label class="oculto-leitor" for="nota-${jogo.id}">Anotação de ${jogo.nome}</label>
        <input class="campo campo-pequeno" type="text" id="nota-${jogo.id}" maxlength="80" placeholder="Anotação">
        <div class="item-botoes">
          <a class="botao botao-amarelo-puro botao-pequeno" href="jogo.html?id=${jogo.id}">Abrir guia</a>
          <button class="botao botao-perigo botao-pequeno" type="button">Remover</button>
        </div>
      </div>
    </article>`;

  const seletor = coluna.querySelector("select");
  for (const status of STATUS) {
    const opcao = document.createElement("option");
    opcao.value = status;
    opcao.textContent = status;
    opcao.selected = status === item.status;
    seletor.appendChild(opcao);
  }
  seletor.addEventListener("change", function () {
    alterarItem(item.id, "status", seletor.value);
    mostrarAviso(jogo.nome + " agora está como \"" + seletor.value + "\".", "sucesso");
    renderizarLista();
  });

  const nota = coluna.querySelector("input");
  nota.value = item.nota || "";
  nota.addEventListener("change", function () {
    alterarItem(item.id, "nota", nota.value.trim());
    mostrarAviso("Anotação de " + jogo.nome + " salva.", "sucesso");
  });

  coluna.querySelector("button").addEventListener("click", function () {
    removerItem(item.id);
  });

  return coluna;
}

function renderizarLista() {
  const lista = carregarLista();
  areaItens.innerHTML = "";
  let exibidos = 0;

  for (const item of lista) {
    const jogo = acharJogo(item.id);
    if (jogo === null) {
      continue;
    }
    if (filtroStatus === "Todos" || item.status === filtroStatus) {
      areaItens.appendChild(criarItem(item, jogo));
      exibidos++;
    }
  }

  if (exibidos === 0) {
    avisoListaVazia.classList.remove("oculto");
  } else {
    avisoListaVazia.classList.add("oculto");
  }

  atualizarContadores(lista);
  preencherSeletorJogo(lista);
  criarFiltrosStatus();
}

formAdicionar.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const id = seletorJogo.value;
  if (id === "") {
    return;
  }
  const lista = carregarLista();
  lista.push({ id: id, status: seletorStatus.value, nota: campoNota.value.trim() });
  salvarLista(lista);
  mostrarAviso(acharJogo(id).nome + " entrou na sua lista.", "sucesso");
  formAdicionar.reset();
  renderizarLista();
});

botaoLimpar.addEventListener("click", function () {
  if (carregarLista().length === 0) {
    return;
  }
  if (confirm("Quer mesmo apagar todos os jogos da sua lista?")) {
    salvarLista([]);
    mostrarAviso("A lista foi apagada.", "neutro");
    renderizarLista();
  }
});

renderizarLista();
