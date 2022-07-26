let factorial = 0;
// for
for (let factorial = 0; factorial < 10; factorial++) {
  console.log(factorial);
}
// while
while (factorial < 10) {
  factorial += 1;
  console.log(factorial);
}
// while, una bifurcación if y una sentencia break
console.log("break");
while (true) {
  if (factorial <= 10) {
    console.log(factorial);
    break;
  }
  factorial + 1;
}
