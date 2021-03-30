var cartaPaulo = {
  nome: "Seiya de Pegaso",
  atributos: {
    ataque: 80,
    defesa: 60,
    magia: 90,
  },
};

var cartaRafa = {
  nome: "Bubassauro",
  atributos: {
    ataque: 70,
    defesa: 65,
    magia: 85,
  },
};

var cartaGui = {
  nome: "Lorde Darth Vader",
  atributos: {
    ataque: 88,
    defesa: 62,
    magia: 90,
  },
};

var cartaMaquina;
var cartaJogador;
var cartas = [cartaPaulo, cartaRafa, cartaGui];
//            0           1          2

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaJogador = cartas(numeroCartaMaquina);
  console.log(cartaMaquina);
  
  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  
  document.getElementById('btnSortear').disabled = true;
  document.getElementById('btnJogar').disabled = false;
  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById('opcoes');var opcoesTexto = "";
  for (const atributo in cartaJogador.atributos) {
    opcoesTexto = `<input type="radio" name="atributo" value="${atributo}"/>${atributo}`;
  }
}
