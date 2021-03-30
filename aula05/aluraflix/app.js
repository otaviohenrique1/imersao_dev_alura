function adicionarFilme() {
  var campoFilmefavorito = document.querySelector('#filme');
  var filmeFavorito = campoFilmefavorito.value;
  // document.write(`<img src="${filmeFavorito}" alt="Filme" />`);
  if (filmeFavorito.endsWith('.jpg')) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    alert('Imagem inválida');
  }
  campoFilmefavorito.value = '';
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes');
  var elementoFilme = `<img src="${filme}" alt="Filme"/>`;
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}
