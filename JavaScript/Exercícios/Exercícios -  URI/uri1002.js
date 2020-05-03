//Área do círculo
let input = require('readline-sync');

let raio = input.questionFloat();

let area = 3.14159 * Math.pow(raio, 2);
console.log(`A=${area.toFixed(4)}`);