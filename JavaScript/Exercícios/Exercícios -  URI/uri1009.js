let input = require('readline-sync');

let nome = input.question();
let salario = input.questionFloat();
let totalVendas = input.questionFloat();

let salarioFinal = salario + (totalVendas * 0.15);
console.log(`TOTAL = R$ ${salarioFinal.toFixed(2)}`);