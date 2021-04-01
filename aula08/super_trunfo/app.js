var cartaPaulo = {
  nome: "Seiya de Pegaso",
  imagem: 'https://static.wikia.nocookie.net/saintseya/images/7/70/SEIYA_DE_P%C3%89GASO.png/revision/latest/scale-to-width-down/329?cb=20160805213355&path-prefix=pt',
  atributos: {
    ataque: 80,
    defesa: 60,
    magia: 90
  }
}

var cartaRafa = {
  nome: "Bulbasauro",
  imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
  atributos: {
    ataque: 70,
    defesa: 65,
    magia: 85
  }
}

var cartaGui = {
  nome: "Lorde Darth Vader",
  imagem: 'https://upload.wikimedia.org/wikipedia/en/7/76/Darth_Vader.jpg',
  atributos: {
    ataque: 88,
    defesa: 62,
    magia: 90
  }
}

var cartaMaquina;
var cartaJogador;
var cartas = [cartaPaulo, cartaRafa, cartaGui];
//            0           1          2

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];
  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  document.getElementById('btnSortear').disabled = true;
  document.getElementById('btnJogar').disabled = false;
  exibeCartaJogador();
}

function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  var opcoesTexto = ""
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
  }
  var html = "<div id='opcoes' class='carta-status'>";
  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>';
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('atributo');
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var divResultado = document.getElementById("resultado");
  var atributoSelecionado = obtemAtributoSelecionado();
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    htmlResultado = '<p class="resultado-final">Venceu</p>';
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    htmlResultado = '<p class="resultado-final">Perdeu</p>';
  } else {
    htmlResultado = '<p class="resultado-final">Empatou</p>';
  }
  divResultado.innerHTML = htmlResultado;
  exibeCartaMaquina();
}

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    console.log(atributo);
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>";
  }
  var html = "<div id='opcoes' class='carta-status --spacing'>";
  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>';
}