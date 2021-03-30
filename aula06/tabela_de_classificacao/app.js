var paulo = {
  nome: "Paulo",
  vitorias: 2,
  empates: 5,
  derrotas: 1,
  pontos: 11,
};

var rafa = {
  nome: "Rafa",
  vitorias: 3,
  empates: 5,
  derrotas: 2,
  pontos: 0,
};

calculaPontos(paulo);
calculaPontos(rafa);

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates;
  return pontos;
}

var jogadores = [rafa, paulo];

function exibirJogadoresNaTela(jogadores) {
  var html = "";
  for (let i = 0; i < jogadores.length; i++) {
    html = 
    `<tr>
      <td>${jogadores[i].nome}</td>
      <td>${jogadores[i].vitorias}</td>
      <td>${jogadores[i].empates}</td>
      <td>${jogadores[i].derrotas}</td>
      <td>${jogadores[i].pontos}</td>
      <td><button onClick="adicionarVitoria()">Vitória</button></td>
      <td><button onClick="adicionarEmpate()">Empate</button></td>
      <td><button onClick="adicionarDerrota()">Derrota</button></td>
    </tr>`;
    // html += `<tr><td>${jogadores[i].nome}</td></tr>`;
    // html += `<tr><td>${jogadores[i].vitorias}</td></tr>`;
    // html += `<tr><td>${jogadores[i].empates}</td></tr>`;
    // html += `<tr><td>${jogadores[i].derrotas}</td></tr>`;
    // html += `<tr><td>${jogadores[i].pontos}</td></tr>`;
  }
  var tabelaJogadores = document.getElementById('tabelaJogadores');
  tabelaJogadores.innerHTML = html;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogador);
}

function adicionarEmpate() {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogador);
}

function adicionarDerrota() {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogador);
}
