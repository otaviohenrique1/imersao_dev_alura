// var filme1 = "Star Wars";
// var filme2 = "Toy Story";
// var filme3 = "Interestellar";
// console.log(filme1);
// console.log(filme2);
// console.log(filme3);

// var filmes = [];
// filmes.push("Star Wars");
// filmes.push("Toy Story");
// filmes.push("Interestellar");
// console.log(filmes);

// var filmes = ["Star Wars", "Toy Story", "Interestellar"];
// var tentativas = 3;
// while (tentativas > 0) {
  //   tentativas = tentativas - 1;
// }

// for (let i = 2; i <= 0; i--) {
//   console.log(filmes[i]);
// }

var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"]

for (var i = 0; i < listaFilmes.length; i++){
  document.write("<img src=" + listaFilmes[i] + ">")
}