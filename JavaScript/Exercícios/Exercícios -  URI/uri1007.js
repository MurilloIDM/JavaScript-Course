//Diferença
let input = require('readline-sync');

let A = input.questionInt();
let B = input.questionInt();
let C = input.questionInt();
let D = input.questionInt();

let diferencaDoProduto = (A * B) - (C * D);
console.log(`DIFERENCA = ${diferencaDoProduto}`);