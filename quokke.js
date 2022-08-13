console.clear();

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  alert("click en el boton");
});
$(() => {
  $("#btnJQ").on("click", () => {
    console.log("Estoy aquine");
  });
});
