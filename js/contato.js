/*
  Jogo Véio - jogoveio.com
  Arquivo: contato.js
  Descrição: formulário de contato. Valida os campos (validação nativa do HTML5), mostra o campo
  "Qual jogo?" quando o assunto pede, conta os caracteres da mensagem, oferece três jeitos de enviar
  a mensagem para jogoveio11@gmail.com (Gmail, app de e-mail ou copiar) e guarda um histórico no localStorage.
  Autores: Vinicius Vidal e Rafael Chiminello
  Disciplina: Desenvolvimento Front-End para Web - Universidade Positivo - 2026
*/

const EMAIL_CONTATO = "jogoveio11@gmail.com";
const CHAVE_HISTORICO = "jogoveio-mensagens";
const ASSUNTOS_COM_JOGO = ["Nova dúvida ou resposta", "Corrigir uma informação"];

const formContato = document.getElementById("form-contato");
const campoAssunto = document.getElementById("contato-assunto");
const grupoJogo = document.getElementById("grupo-jogo");
const campoJogo = document.getElementById("contato-jogo");
const campoMensagem = document.getElementById("contato-mensagem");
const contadorMensagem = document.getElementById("contador-mensagem");
const avisoContato = document.getElementById("aviso-contato");
const listaHistorico = document.getElementById("historico-contato");
const historicoVazio = document.getElementById("historico-vazio");

function preencherJogos() {
  const nomes = [];
  for (const jogo of jogos) {
    nomes.push(jogo.nome);
  }
  nomes.sort();
  for (const nome of nomes) {
    const opcao = document.createElement("option");
    opcao.value = nome;
    opcao.textContent = nome;
    campoJogo.appendChild(opcao);
  }
}

function atualizarCampoJogo() {
  if (ASSUNTOS_COM_JOGO.includes(campoAssunto.value)) {
    grupoJogo.classList.remove("d-none");
    campoJogo.required = true;
  } else {
    grupoJogo.classList.add("d-none");
    campoJogo.required = false;
    campoJogo.value = "";
  }
}

function atualizarContadorMensagem() {
  contadorMensagem.textContent = campoMensagem.value.length + "/1000";
}

function mostrarAvisoContato(texto, tipo) {
  avisoContato.innerHTML = `
    <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
      <span></span>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
    </div>`;
  avisoContato.querySelector("span").textContent = texto;
}

function lerHistorico() {
  const salvo = localStorage.getItem(CHAVE_HISTORICO);
  if (salvo === null) {
    return [];
  }
  return JSON.parse(salvo);
}

function mostrarHistorico() {
  const historico = lerHistorico();
  listaHistorico.innerHTML = "";
  if (historico.length === 0) {
    historicoVazio.classList.remove("d-none");
    return;
  }
  historicoVazio.classList.add("d-none");
  for (let i = historico.length - 1; i >= 0; i--) {
    const item = document.createElement("li");
    item.textContent = historico[i].data + " · " + historico[i].assunto + (historico[i].jogo ? " · " + historico[i].jogo : "");
    listaHistorico.appendChild(item);
  }
}

function montarEmail(dados) {
  let assunto = "[Jogo Véio] " + dados.assunto;
  if (dados.jogo) {
    assunto += " - " + dados.jogo;
  }
  const corpo = "Nome: " + dados.nome + "\nE-mail: " + dados.email + (dados.jogo ? "\nJogo: " + dados.jogo : "") + "\n\n" + dados.mensagem;
  return { assunto: assunto, corpo: corpo };
}

function linkGmail(email) {
  return "https://mail.google.com/mail/?view=cm&fs=1&to=" + EMAIL_CONTATO + "&su=" + encodeURIComponent(email.assunto) + "&body=" + encodeURIComponent(email.corpo);
}

function linkAppDeEmail(email) {
  return "mailto:" + EMAIL_CONTATO + "?subject=" + encodeURIComponent(email.assunto) + "&body=" + encodeURIComponent(email.corpo);
}

function copiarTexto(texto, botao) {
  const confirmar = function () {
    botao.textContent = "Copiado!";
  };
  if (navigator.clipboard) {
    navigator.clipboard.writeText(texto).then(confirmar).catch(function () {
      copiarComCampo(texto);
      confirmar();
    });
  } else {
    copiarComCampo(texto);
    confirmar();
  }
}

function copiarComCampo(texto) {
  const campo = document.createElement("textarea");
  campo.value = texto;
  document.body.appendChild(campo);
  campo.select();
  document.execCommand("copy");
  campo.remove();
}

function mostrarOpcoesDeEnvio(dados, email) {
  avisoContato.innerHTML = `
    <div class="alert alert-success" role="alert">
      <p class="fw-bold mb-1"></p>
      <p class="mb-3">Escolha como enviar para ${EMAIL_CONTATO}:</p>
      <div class="d-flex flex-wrap gap-2">
        <a class="btn btn-dark fw-bold" id="enviar-gmail" target="_blank" rel="noopener">Enviar pelo Gmail</a>
        <a class="btn btn-outline-dark" id="enviar-app">Abrir no app de e-mail</a>
        <button class="btn btn-outline-dark" type="button" id="copiar-mensagem">Copiar mensagem</button>
      </div>
    </div>`;
  avisoContato.querySelector(".fw-bold").textContent = "Valeu, " + dados.nome + "! Sua mensagem está pronta.";
  avisoContato.querySelector("#enviar-gmail").href = linkGmail(email);
  avisoContato.querySelector("#enviar-app").href = linkAppDeEmail(email);
  avisoContato.querySelector("#copiar-mensagem").addEventListener("click", function () {
    copiarTexto("Para: " + EMAIL_CONTATO + "\nAssunto: " + email.assunto + "\n\n" + email.corpo, this);
  });
}

formContato.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (!formContato.checkValidity()) {
    formContato.classList.add("tentou-enviar");
    mostrarAvisoContato("Confira os campos marcados em vermelho.", "danger");
    formContato.querySelector(":invalid").focus();
    return;
  }

  const dados = {
    nome: document.getElementById("contato-nome").value.trim(),
    email: document.getElementById("contato-email").value.trim(),
    assunto: campoAssunto.value,
    jogo: campoJogo.value,
    mensagem: campoMensagem.value.trim(),
    data: new Date().toLocaleDateString("pt-BR")
  };

  const historico = lerHistorico();
  historico.push({ data: dados.data, assunto: dados.assunto, jogo: dados.jogo });
  localStorage.setItem(CHAVE_HISTORICO, JSON.stringify(historico));

  mostrarOpcoesDeEnvio(dados, montarEmail(dados));
  formContato.reset();
  formContato.classList.remove("tentou-enviar");
  atualizarCampoJogo();
  atualizarContadorMensagem();
  mostrarHistorico();
});

campoAssunto.addEventListener("change", atualizarCampoJogo);
campoMensagem.addEventListener("input", atualizarContadorMensagem);

preencherJogos();
mostrarHistorico();
