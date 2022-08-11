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
