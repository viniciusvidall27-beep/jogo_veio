/*
  Jogo Véio - jogoveio.com
  Arquivo: sobre.js
  Descrição: calcula os números do site (jogos, consoles, respostas e anos) a partir dos dados
  e mostra na página Sobre com uma pequena animação de contagem.
  Autores: Vinicius Vidal e Rafael Chiminello
  Disciplina: Desenvolvimento Front-End para Web - Universidade Positivo - 2026
*/

function calcularNumeros() {
  const consoles = [];
  let respostas = 0;
  let anoMaisAntigo = jogos[0].ano;

  for (const jogo of jogos) {
    if (!consoles.includes(jogo.console)) {
      consoles.push(jogo.console);
    }
    respostas += jogo.duvidas.length + jogo.assistente.length + 8;
    if (jogo.ano < anoMaisAntigo) {
      anoMaisAntigo = jogo.ano;
    }
  }

  return {
    "total-jogos": jogos.length,
    "total-consoles": consoles.length,
    "total-respostas": respostas,
    "anos-historia": new Date().getFullYear() - anoMaisAntigo
  };
}

function animarNumero(elemento, valorFinal) {
  let atual = 0;
  const passo = Math.max(1, Math.ceil(valorFinal / 30));
  const intervalo = setInterval(function () {
    atual += passo;
    if (atual >= valorFinal) {
      atual = valorFinal;
      clearInterval(intervalo);
    }
    elemento.textContent = atual;
  }, 30);
}

function mostrarNumeros() {
  const numeros = calcularNumeros();
  for (const id in numeros) {
    animarNumero(document.getElementById(id), numeros[id]);
  }
}

mostrarNumeros();
