let compra = ["leche", "carne", "huevos", "cereales", "nueces"];
compra.push("Aceite de Girasol");
console.log(compra);
compra.pop();
console.log(compra);
// objeto
const pelicula = [
  (peli1 = {
    tiulo: "El hombre de Toronto",
    director: "Patrick Hughes",
    fecha: 2009,
  }),
  (peli2 = {
    tiulo: "Nobody",
    director: "Ilya Naishuller",
    fecha: 2021,
  }),
  (peli3 = {
    tiulo: "Midsommar",
    director: "Ari Aster",
    fecha: 2019,
  }),
];
pelicula.filter((e) => {
  if (e.fecha > 2010) {
    console.log(e);
  }
});
const directore = pelicula.map((i) => {
  console.log(i.director);
  return i.director;
});
const titulos = pelicula.map((i) => {
  console.log(i.tiulo);
  return i.tiulo;
});
console.log(...directore, ...titulos);

console.log(pelicula);
