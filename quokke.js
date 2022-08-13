console.clear();

const nombre = "Antonio";
const apellido = "Lopez";

const persona = {
  nombre: nombre,
  apellido: apellido,
};
localStorage.setItem("nombre", nombre);
localStorage.setItem("apellido", apellido);
localStorage.setItem("persona", JSON.stringify({ nombre, apellido }));
console.log(JSON.parse(localStorage.getItem("persona")));
console.log(localStorage.getItem("nombre"));
const now = new Date();
// document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(now.getTime() + 2 * 60000)}`
