//Distância entre dois pontos
let input = require('readline-sync');

let x1 = input.questionInt();
let y1 = input.questionInt();
let x2 = input.questionInt();
let y2 = input.questionInt();

let distanciaDoisPontos = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
console.log(`${distanciaDoisPontos.toFixed(4)}`);
