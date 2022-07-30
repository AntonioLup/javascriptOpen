// objeto sets
const datosP = {
  nombre: "Antonio",
  apellido: "Lopez",
  edad: 23,
  altura: 1.72,
  eresDesarrollador: true,
};
const { edad } = datosP;
console.log(edad);

const datosMF = [
  {
    ...datosP,
  },
  {
    nombre: "dani",
    apellido: "gomez",
    edad: 20,
    altura: 1.82,
    eresDesarrollador: false,
  },
  {
    nombre: "jesus",
    apellido: "contreras",
    edad: 20,
    altura: 1.68,
    eresDesarrollador: false,
  },
];
console.log(datosMF[2]);
