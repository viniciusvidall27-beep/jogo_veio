/*
  Jogo Véio - jogoveio.com
  Arquivo: galeria.js
  Descrição: monta a galeria com as imagens de todos os jogos, filtra por console e amplia
  a imagem clicada numa janela (dialog), com navegação pelas setas e pelo teclado.
  Autores: Vinicius Vidal e Rafael Chiminello
  Disciplina: Desenvolvimento Front-End para Web - Universidade Positivo - 2026
*/

const gradeGaleria = document.getElementById("grade-galeria");
const filtrosGaleria = document.getElementById("filtros-galeria");
const contadorGaleria = document.getElementById("contador-galeria");
const caixaAmpliada = document.getElementById("caixa-ampliada");
const imagemAmpliada = document.getElementById("imagem-ampliada");
const legendaAmpliada = document.getElementById("legenda-ampliada");
const linkAmpliada = document.getElementById("link-ampliada");

const fotos = [];
let consoleGaleria = "Todos";
let fotosVisiveis = [];
let posicaoAtual = 0;

function montarListaDeFotos() {
  for (const jogo of jogos) {
    for (let i = 0; i < jogo.imagens.length; i++) {
      fotos.push({
        src: "img/jogos/" + jogo.id + "-" + (i + 1) + ".jpg",
        legenda: jogo.imagens[i],
        jogo: jogo,
        quebrada: false
      });
    }
  }
}

function criarFiltrosGaleria() {
  const consoles = ["Todos"];
  for (const jogo of jogos) {
    if (!consoles.includes(jogo.console)) {
      consoles.push(jogo.console);
    }
  }
  filtrosGaleria.innerHTML = "";
  for (const nome of consoles) {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "pilula" + (nome === consoleGaleria ? " ativa" : "");
    botao.textContent = nome;
    botao.addEventListener("click", function () {
      consoleGaleria = nome;
      criarFiltrosGaleria();
      mostrarGaleria();
    });
    filtrosGaleria.appendChild(botao);
  }
}

function atualizarContador() {
  contadorGaleria.textContent = fotosVisiveis.length + (fotosVisiveis.length === 1 ? " IMAGEM" : " IMAGENS");
}

function mostrarGaleria() {
  gradeGaleria.innerHTML = "";
  fotosVisiveis = [];

  for (const foto of fotos) {
    if (foto.quebrada) {
      continue;
    }
    if (consoleGaleria !== "Todos" && foto.jogo.console !== consoleGaleria) {
      continue;
    }
    fotosVisiveis.push(foto);

    const figura = document.createElement("figure");
    figura.className = "item-galeria";
    const botao = document.createElement("button");
    botao.type = "button";
    botao.setAttribute("aria-label", "Ampliar: " + foto.legenda + " (" + foto.jogo.nome + ")");
    const img = document.createElement("img");
    img.src = foto.src;
    img.alt = foto.legenda + " em " + foto.jogo.nome;
    img.addEventListener("error", function () {
      foto.quebrada = true;
      figura.remove();
      fotosVisiveis = fotosVisiveis.filter(function (item) {
        return item !== foto;
      });
      atualizarContador();
    });
    const legenda = document.createElement("figcaption");
    legenda.innerHTML = "<strong></strong><span></span>";
    legenda.querySelector("strong").textContent = foto.legenda;
    legenda.querySelector("span").textContent = foto.jogo.nome;

    botao.appendChild(img);
    botao.addEventListener("click", function () {
      abrirFoto(fotosVisiveis.indexOf(foto));
    });
    figura.appendChild(botao);
    figura.appendChild(legenda);
    gradeGaleria.appendChild(figura);
  }

  atualizarContador();
}

function abrirFoto(posicao) {
  if (fotosVisiveis.length === 0) {
    return;
  }
  if (posicao < 0) {
    posicao = fotosVisiveis.length - 1;
  } else if (posicao >= fotosVisiveis.length) {
    posicao = 0;
  }
  posicaoAtual = posicao;
  const foto = fotosVisiveis[posicaoAtual];
  imagemAmpliada.src = foto.src;
  imagemAmpliada.alt = foto.legenda + " em " + foto.jogo.nome;
  legendaAmpliada.textContent = foto.legenda + " · " + foto.jogo.nome;
  linkAmpliada.href = "jogo.html?id=" + foto.jogo.id;
  if (!caixaAmpliada.open) {
    caixaAmpliada.showModal();
  }
}

document.getElementById("foto-anterior").addEventListener("click", function () {
  abrirFoto(posicaoAtual - 1);
});

document.getElementById("foto-proxima").addEventListener("click", function () {
  abrirFoto(posicaoAtual + 1);
});

document.getElementById("fechar-ampliada").addEventListener("click", function () {
  caixaAmpliada.close();
});

caixaAmpliada.addEventListener("click", function (evento) {
  if (evento.target === caixaAmpliada) {
    caixaAmpliada.close();
  }
});

document.addEventListener("keydown", function (evento) {
  if (!caixaAmpliada.open) {
    return;
  }
  if (evento.key === "ArrowLeft") {
    abrirFoto(posicaoAtual - 1);
  } else if (evento.key === "ArrowRight") {
    abrirFoto(posicaoAtual + 1);
  }
});

montarListaDeFotos();
criarFiltrosGaleria();
mostrarGaleria();
