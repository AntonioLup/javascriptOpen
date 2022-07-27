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
// ejercicio strings
let nombre = "Antonio";
let apellido = "Lopez";
let estudiante = `Estudiante ${nombre} ${apellido}`;
let estudianteMayus = `Estudiante ${nombre} ${apellido}`;
let estudianteMinus = `Estudiante ${nombre} ${apellido}`;

console.log(estudiante);
console.log(estudianteMayus.toUpperCase());
console.log(estudianteMinus.toLocaleLowerCase());
console.log(estudiante.length);
console.log(estudiante.indexOf("Antonio"));
console.log(estudiante.match("Lopez"));

console.log(estudiante.slice(11, 12));
console.log(estudiante.slice(19, 20));
const estudianteSinEspacios = estudiante.replace(/ /g, "");
console.log(estudiante.includes("Antonio"));
