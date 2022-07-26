console.log(
  "Hola, este es mi primer ejercicio con Node en el mejor Bootcamp de programación del mundo"
);
// null, undefined,false, 0 => falsy
// null esta en memoria pero no esta asignado
if (null) {
  // si cumple
} else {
  // si no cumple
}
const yo = [
  "antonio",
  23,
  true,
  "9/15/99",
  (book = {
    titulo: "Los Cuatro Acuerdos",
    autor: "Miguel Ángel Ruiz",
    fecha: Date(1997),
    url: "",
  }),
];
// < menor que
// > mayor que
let persona = {
  nombre: "antonio",
  apellido: "lopez",
  edad: 34,
  isDeveloper: true,
};
for (let prop in persona) {
  console.log(prop);
  console.log(persona[prop]);
}
