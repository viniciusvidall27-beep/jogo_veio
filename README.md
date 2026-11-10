# 🕹️ Jogo Véio – Guia de Jogos Retrô

> **"Travou no chefão? O Véio te ajuda."**

O **Jogo Véio** é um guia de jogos retrô feito como projeto final da disciplina **Desenvolvimento Front-End para Web** da **Universidade Positivo** (Prof. Fabricio Olivo, 2026).

O site reúne **24 clássicos**, do NES ao PlayStation 2, com história, imagens, dúvidas mais comuns, trilhas sonoras e o **Assistente Véio**: um gaúcho em pixel art que responde perguntas sobre chefes, itens, segredos e teorias, e ainda conta piada.

🔗 **Repositório:** https://github.com/viniciusvidall27-beep/jogo_veio
📧 **Contato:** jogoveio11@gmail.com

---

## 📌 Sumário

- [O projeto em números](#-o-projeto-em-números)
- [Como abrir o site](#-como-abrir-o-site)
- [Páginas](#-páginas)
- [Assistente Véio](#-assistente-véio)
- [Histórico de versões](#-histórico-de-versões)
- [Requisitos do projeto](#-requisitos-do-projeto)
- [Tecnologias e ferramentas](#-tecnologias-e-ferramentas)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Como adicionar um jogo novo](#-como-adicionar-um-jogo-novo)
- [Dificuldades e soluções](#-dificuldades-e-soluções)
- [Equipe](#-equipe)
- [Aviso de direitos](#-aviso-de-direitos)

---

## 📊 O projeto em números

| Item | Quantidade |
| --- | --- |
| Páginas | **10** |
| Jogos com guia | **24** |
| Consoles | **6** (NES, Super Nintendo, Mega Drive, PlayStation, Nintendo 64 e PlayStation 2) |
| Respostas do Assistente Véio | **mais de 650** |
| Piadas do Véio | **72** |
| Imagens dos jogos | **96**, mais 24 capas e 6 fotos de consoles |
| Trilhas sonoras | **7** |
| Vídeos-dica | **1** |
| Requisitos do professor atendidos | **20 de 20** |

---

## ▶️ Como abrir o site

O site funciona **offline**, sem instalar nada:

1. Baixe o repositório pelo botão **Code → Download ZIP** ou com `git clone https://github.com/viniciusvidall27-beep/jogo_veio.git`.
2. Abra o arquivo **`index.html`** no navegador.

Só os links externos (GitHub, RetroAchievements e Gmail) precisam de internet.

---

## 🗂️ Páginas

| Página | Arquivo | O que tem |
| --- | --- | --- |
| Início | `index.html` | Banner, atalhos por console, guias em destaque e dúvidas mais buscadas |
| Biblioteca | `biblioteca.html` | Grade de capas estilo Steam, com busca, filtro por console e ordenação |
| Jogo | `jogo.html` | Uma página para os 24 jogos: prólogo, história, imagens, dúvidas, música, vídeo-dica e Assistente Véio |
| Minha lista | `minha-lista.html` | Lista pessoal de jogos salva no navegador, com status e anotações (**sem Bootstrap**) |
| Sobre | `sobre.html` | Missão, visão, valores, números do site e equipe (**sem Bootstrap**) |
| Comparativo | `comparativo.html` | Tabela ordenável com todos os jogos e comparação de dois jogos lado a lado |
| Galeria | `galeria.html` | 96 imagens em CSS Grid, com ampliação e navegação pelo teclado |
| Consoles | `consoles.html` | Linha do tempo e cards dos 6 consoles |
| Mídia | `midia.html` | Rádio do Véio com as 7 trilhas sonoras e os vídeos |
| Contato | `contato.html` | Formulário com validação para sugerir jogos, dúvidas e correções |

---

## 🤠 Assistente Véio

O Véio fica na página de cada jogo e responde perguntas digitadas pelo usuário.

**O que ele sabe fazer:**

- **Responder dúvidas** sobre chefes, itens, segredos, personagens, história, ano, empresa e vilão.
- **Contar teorias e curiosidades dos fãs**, sempre avisando quando é teoria ou boato.
- **Contar piadas**: é só pedir *"conta uma piada"*.
- **Listar tudo o que sabe**: pergunte *"o que você sabe sobre este jogo?"*.
- **Entender erros de digitação**: *"espada brnca"* vira *"espada branca"*, e ele avisa com *"Acho que tu quis dizer..."*.
- **Reconhecer outros jogos**: na página do FF7, *"fraqueza do Skull Man no Mega Man"* é respondida com os dados do Mega Man 4.
- **Sugerir perguntas parecidas** quando não acha a resposta, e só no fim oferecer uma busca no Google.
- **Pensar antes de responder**: uma churrasqueira em pixel art aparece por 0,8 segundo.
- **Mostrar o vídeo-dica** quando a pergunta tem um vídeo ligado a ela.

**Como ele escolhe a resposta:** cada resposta tem palavras-chave. A pergunta ganha pontos por palavra-chave encontrada (mais pontos para frases maiores e para palavras escritas certas) e por palavras parecidas. A resposta com mais pontos vence. Os erros de digitação são medidos pela **distância de Levenshtein** (quantas letras precisam mudar para uma palavra virar outra).

---

## 🕓 Histórico de versões

### v1.0 – Versão final
- Página de **Contato** com formulário completo: `text`, `email`, `select`, `textarea` e `submit`, validações `required`, `minlength`, `pattern` e `placeholder`, e estilos de `:hover`, `:focus` e `:invalid`.
- Campo "Qual jogo?" que só aparece quando o assunto pede.
- Envio pelo **Gmail**, pelo app de e-mail ou copiando a mensagem, com histórico salvo no `localStorage`.
- Link real do **GitHub** no menu e no rodapé.
- Equipe e divisão de tarefas na página Sobre.
- **README** e **documentação em Word** (padrão ABNT) na pasta `doc`.
- Site completo com **10 páginas** e os **20 requisitos** atendidos.

### v0.9 – Músicas, vídeo, Mídia e erros de digitação
- **Trilhas sonoras** em 7 jogos, com botão flutuante de música no canto inferior direito.
- Página de **Mídia** com a **Rádio do Véio**: lista de faixas, anterior/próxima e troca automática ao terminar a música.
- **Vídeo-dica** dentro da resposta *"Onde pego a Master Sword?"* (A Link to the Past), como arquivo local que funciona offline.
- Vídeo do YouTube removido depois do **Erro 153** e de o conteúdo estar errado.
- Vídeo convertido de **155 MB para 4,4 MB**.
- Músicas convertidas para `.mp3` (incluindo um `.wav` de 44 MB e um `.brstm`, formato de jogo).
- O Véio passou a **entender palavras escritas com erro** (distância de Levenshtein).

### v0.8 – Consoles e lista do Véio
- Função **"o que você sabe sobre este jogo?"**, que lista dicas, teorias e informações gerais em grupos clicáveis.
- Página de **Consoles** com linha do tempo (1983 a 2000) e cards com fabricante, ano, bits, mídia, curiosidade e número de jogos no site.
- Fotos dos 6 consoles, padronizadas em 16:9.

### v0.7 – Comparativo e Galeria
- Página **Comparativo**: tabela com todos os jogos, ordenável por coluna e filtrável por console.
- **Comparação de dois jogos** lado a lado, com a diferença de anos numa linha centralizada.
- Página **Galeria**: grade em CSS Grid com as imagens de todos os jogos, filtro por console e ampliação em `<dialog>` com setas do teclado.

### v0.6 – Nintendo 64
- 5 jogos novos: **Ocarina of Time**, **Majora's Mask**, **Super Mario 64**, **Animal Crossing** (Dōbutsu no Mori) e **GoldenEye 007**, chegando a **24 jogos**.
- Imagens dos jogos de N64, capa japonesa do Animal Crossing e correção de imagens trocadas.
- Mais respostas, teorias e piadas para todos os jogos.

### v0.5 – Imagens reais
- **95 imagens** dos jogos convertidas de `.jfif`, `.webp`, `.avif` e `.png` para `.jpg`.
- Capas padronizadas no formato vertical 2:3, com fundo desfocado para as capas deitadas ou quadradas.

### v0.4 – Personalidade do Véio
- **Teorias e curiosidades** dos fãs.
- **Piadas** por jogo e piadas gerais.
- Véio **"pensa" por 0,8 segundo** antes de responder.
- **Churrasqueira animada** em SVG (pixel art feita no Piskel) no lugar dos três pontinhos.

### v0.3 – Páginas sem Bootstrap
- Páginas **Minha lista** e **Sobre**, refeitas com HTML, CSS e JavaScript puros.
- Menu responsivo próprio (`menu.js`) e estilos próprios (`puro.css`).
- Minha lista com cadastro, status, anotações, filtro e remoção, tudo no `localStorage`.

### v0.2 – Assistente Véio
- Assistente separado no arquivo `assistente.js`.
- Dúvidas principais na página e uma base maior de respostas só para o Véio.
- Respostas automáticas sobre ano, empresa, console, gênero, história, vilão e personagens.
- Conversa básica ("oi", "valeu", "quem é você", "ajuda") e sugestões de perguntas parecidas.
- **Conker's Bad Fur Day** adicionado, a pedido da sala, chegando a 19 jogos.

### v0.1 – Base do site
- Tema escolhido: guia de jogos retrô. Nome: **Jogo Véio**.
- Logo do gaúcho com espeto em pixel art, convertida em PNG e favicon.
- Protótipo visual das telas.
- Páginas **Início**, **Biblioteca** e **Jogo**, com os dados de 18 jogos no `dados.js`.
- Bootstrap e fontes baixados para dentro do projeto, para funcionar offline.
- Primeiro envio para o GitHub.

---

## ✅ Requisitos do projeto

| # | Requisito | Onde foi atendido |
| --- | --- | --- |
| 1 | Pasta raiz organizada | HTML na raiz e pastas `css`, `js`, `img`, `fonts`, `audio`, `video` e `doc` |
| 2 | HTML5 semântico | `header`, `nav`, `main`, `section`, `article`, `footer`, `figure` e `dialog` |
| 3 | CSS com tag, classe, id e 3 escopos | Externo (`estilo.css`), incorporado (`jogo.html`) e em linha (`index.html`) |
| 4 | 2 páginas sem framework | `minha-lista.html` e `sobre.html` |
| 5 | Menu com links internos, externos e hover | Cabeçalho de todas as páginas |
| 6 | Navbar, container e rodapé em todas | Todas as páginas |
| 7 | Vídeo e áudio com controles nativos | Página do jogo e página de Mídia |
| 8 | CSS Grid | Biblioteca, Galeria e páginas sem Bootstrap |
| 9 | CSS Flexbox | Capas, linha do tempo, menus e alinhamentos |
| 10 | Cards com título, imagem, texto e link | Início, Sobre e Consoles |
| 11 | Responsivo em 2 larguras | Computador e celular (`@media` e grid do Bootstrap) |
| 12 | Tabela 4x4 com títulos | Comparativo |
| 13 | Formulário com text, email, select, submit e textarea | Contato |
| 14 | required, minlength, pattern e placeholder | Contato |
| 15 | :focus, :hover e :invalid estilizados | Contato e Minha lista |
| 16 | Bootstrap em menus, botões, formulários, alertas e cards | Páginas com Bootstrap |
| 17 | Eventos JS manipulando o DOM | Todos os arquivos JS |
| 18 | As 4 estruturas de programação | Todos os arquivos JS |
| 19 | localStorage | Minha lista e histórico do Contato |
| 20 | GitHub público | Este repositório |

---

## 🛠️ Tecnologias e ferramentas

**Linguagens e bibliotecas**
- HTML5 semântico
- CSS3: Grid, Flexbox, variáveis, `@media` e animações
- JavaScript puro: DOM, eventos e `localStorage`
- Bootstrap 5.3.3, com os arquivos dentro do projeto
- Fontes **Press Start 2P** e **Rubik**, com os arquivos dentro do projeto

**Ferramentas**
- [Visual Studio Code](https://code.visualstudio.com): editor de código
- [Claude](https://claude.ai): inteligência artificial usada como apoio no desenvolvimento
- [GitHub](https://github.com): versionamento e publicação
- [Piskel](https://www.piskelapp.com): pixel art da logo e da churrasqueira
- Editores de imagem: ajuste de capas, imagens e fotos
- [KHInsider](https://downloads.khinsider.com): origem das trilhas sonoras

**Referência visual:** a biblioteca da [Steam](https://store.steampowered.com). O resto foi ideia própria da equipe, com auxílio de IAs.

---

## 📁 Estrutura de pastas

```
jogo_veio/
├── index.html, biblioteca.html, jogo.html, minha-lista.html, sobre.html
├── comparativo.html, galeria.html, consoles.html, midia.html, contato.html
├── README.md
├── css/
│   ├── estilo.css        estilo geral do site
│   ├── puro.css          estilo das páginas sem Bootstrap
│   └── bootstrap.min.css
├── js/
│   ├── dados.js          todos os dados dos 24 jogos
│   ├── assistente.js     Assistente Véio
│   ├── inicio.js, biblioteca.js, jogo.js, minha-lista.js, sobre.js
│   ├── comparativo.js, galeria.js, consoles.js, midia.js, contato.js
│   ├── menu.js           menu das páginas sem Bootstrap
│   └── bootstrap.bundle.min.js
├── img/
│   ├── logo.png, favicon.png, churrasqueira.svg
│   ├── capas/            capas dos jogos
│   ├── jogos/            imagens dos jogos
│   └── consoles/         fotos dos consoles
├── fonts/                fontes do site
├── audio/                trilhas sonoras
├── video/                vídeos-dica
└── doc/                  documentação do projeto (Word)
```

---

## ➕ Como adicionar um jogo novo

Todo o conteúdo fica no arquivo **`js/dados.js`**. Para adicionar um jogo:

1. Copie um dos objetos do array `jogos` e troque os dados (id, nome, console, ano, história, dúvidas, respostas do Véio e piadas).
2. Coloque a capa em `img/capas/ID.jpg` e as imagens em `img/jogos/ID-1.jpg` até `ID-4.jpg`.
3. Opcional: adicione `musica` (arquivo em `audio/`) e `video` (arquivo em `video/`).

Pronto. O jogo aparece sozinho na Biblioteca, no Comparativo, na Galeria, em Consoles, na Mídia e no Contato.

---

## 🧩 Dificuldades e soluções

| Dificuldade | Solução |
| --- | --- |
| O Véio não entendia palavras com uma letra errada | Comparação de palavras pela distância de Levenshtein |
| O Véio trocava respostas parecidas | Palavras-chave com mais palavras passaram a valer mais pontos |
| Link do YouTube com Erro 153, e vídeo errado | Vídeo removido e substituído por arquivo local |
| Arquivos de imagem, áudio e vídeo em formatos variados e pesados | Conversão para `.jpg`, `.mp3` e `.mp4` e redução de tamanho |
| Imagens que não eram do jogo certo | Revisão e troca das imagens |
| E-mail não abria pelo link `mailto` | Envio pelo Gmail, pelo app de e-mail ou copiando a mensagem |
| Site precisa rodar offline | Bootstrap e fontes baixados para o projeto |
| Menu de celular sem Bootstrap | Menu próprio em JavaScript (`menu.js`) |
| Navegador bloqueia música automática | Música só toca depois de um clique |
| Site do GitHub aceita só 100 arquivos por envio | Envio em partes e uso do Git no terminal |

---

## 👥 Equipe

| Integrante | Foco principal |
| --- | --- |
| **Vinicius Vidal** | Programação em JavaScript e lógica do Assistente Véio |
| **Rafael Chiminello** | CSS, Bootstrap, imagens e áudios |

Cada um teve um foco, mas os dois participaram de um pouco de tudo.

---

## ⚖️ Aviso de direitos

Projeto **acadêmico e sem fins lucrativos**. Os jogos, nomes, personagens, capas, imagens, fotos de consoles, músicas e vídeos citados pertencem às suas respectivas empresas e criadores, e foram usados apenas para fins educacionais. As imagens foram obtidas em buscas na internet e as trilhas sonoras no site KHInsider.
