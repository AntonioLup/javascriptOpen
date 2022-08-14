console.clear();

const ps = document.querySelectorAll(".prrafo");
const sec = document.querySelectorAll(".seccion");

ps.forEach((p) => {
  p.addEventListener("dragstart", (e) => {
    console.log("inicio");
    p.classList.add("drag");
    e.dataTransfer.setData("id", p.id);
  });
  p.addEventListener("dragend", () => {
    console.log("fin");
    p.classList.remove("drag");
  });
});

sec.forEach((se) => {
  se.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";

    console.log("drag over");
  });
  se.addEventListener("drop", (e) => {
    console.log("drop");
    const id_parrafo = e.dataTransfer.getData("id");
    console.log(id_parrafo);

    const parrafo = document.getElementById(id_parrafo);
    se.appendChild(parrafo);
  });
});
const images = document.querySelector(".papelera");

images.addEventListener("dragover", (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = "copy";
});
images.addEventListener("drop", (e) => {
  const id_parrafo = e.dataTransfer.getData("id");
  document.getElementById(id_parrafo).remove();
});
