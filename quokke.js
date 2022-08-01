// llamar
async function llamar() {
  return new Promise((res, rej) => {
    res("Hola wey");
  });
}

llamar().then((res) => {
  setTimeout(() => {
    console.log(res);
  }, 5000);
});
