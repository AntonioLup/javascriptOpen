// objeto sets
const hoy = new Date();

const nacimiento = new Date(1999, 8, 15);

const comparacion = hoy > nacimiento;

console.log(comparacion);

const diaNacimiento = nacimiento.getDate();
const mesNacimiento = nacimiento.getMonth() + 1;
const anyoNacimiento = nacimiento.getFullYear();
