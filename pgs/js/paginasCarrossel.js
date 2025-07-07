const paginas = [
  'paginaComeco.html',
  'paginaDois.html'
  
];
let paginaAtual = 0;

// Opcional: detectar página atual pelo nome do arquivo
const atual = window.location.pathname.split("/").pop();
const indice = paginas.indexOf(atual);
if (indice !== -1) {
  paginaAtual = indice;
  document.getElementById("pagina-atual").textContent =
    `Página ${paginaAtual + 1}`;
}

function irParaAnterior() {
  if (paginaAtual > 0) {
    paginaAtual--;
    window.location.href = paginas[paginaAtual];
  }
}

function irParaProximo() {
  if (paginaAtual < paginas.length - 1) {
    paginaAtual++;
    window.location.href = paginas[paginaAtual];
  }
}