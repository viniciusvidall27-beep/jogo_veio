/*
  Jogo Véio - jogoveio.com
  Arquivo: menu.js
  Descrição: menu responsivo das páginas sem Bootstrap. Abre e fecha o menu no celular
  e o submenu "Mais", fechando ao clicar fora ou apertar Esc.
  Autores: Vinicius Vidal e Rafael Chiminello
  Disciplina: Desenvolvimento Front-End para Web - Universidade Positivo - 2026
*/

const botaoMenu = document.getElementById("botao-menu");
const menuPuro = document.getElementById("menu-puro");
const botaoMais = document.getElementById("botao-mais");
const submenu = document.getElementById("submenu");

function alternar(botao, alvo) {
  const aberto = alvo.classList.toggle("aberto");
  botao.setAttribute("aria-expanded", aberto);
}

function fecharSubmenu() {
  submenu.classList.remove("aberto");
  botaoMais.setAttribute("aria-expanded", "false");
}

botaoMenu.addEventListener("click", function () {
  alternar(botaoMenu, menuPuro);
});

botaoMais.addEventListener("click", function (evento) {
  evento.stopPropagation();
  alternar(botaoMais, submenu);
});

document.addEventListener("click", function (evento) {
  if (!submenu.contains(evento.target)) {
    fecharSubmenu();
  }
});

document.addEventListener("keydown", function (evento) {
  if (evento.key === "Escape") {
    fecharSubmenu();
  }
});
