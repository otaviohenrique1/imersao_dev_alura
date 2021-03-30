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
  console.log(jogador.vitorias);
}