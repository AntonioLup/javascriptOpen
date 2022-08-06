// llamar
// const moduleMath = require("./module.js");

// const sumaFact = moduleMath.suma(5, 5);

// const { suma } = require("./module.js");

import { suma } from "./module.js";
import multi from "./module.js";
import chalk from "chalk";

const sumaFact = suma(1, 2);
const sumaFact2 = suma(4, 5);
console.log(chalk.green(sumaFact));
console.log(chalk.blue(sumaFact2));

// import axios from "axios";
// axios
//   .get("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });
