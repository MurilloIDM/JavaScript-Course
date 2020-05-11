//Consumo
let input = require('readline-sync');

let distanciaPercorrida = input.questionInt();
let combustivelGasto = input.questionFloat();

let consumoMedio = distanciaPercorrida / combustivelGasto;
console.log(`${consumoMedio.toFixed(3)} km/l`);