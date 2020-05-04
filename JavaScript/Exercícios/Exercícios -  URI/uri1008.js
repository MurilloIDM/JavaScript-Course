//Salário
let input = require('readline-sync');

let numeroFuncionario = input.questionInt();
let horasTrabalhadas = input.questionInt();
let valorDaHoraTrabalhada = input.questionFloat();

let salario = horasTrabalhadas * valorDaHoraTrabalhada;
console.log(`NUMBER = ${numeroFuncionario}\nSALARY = U$ ${salario.toFixed(2)}`);''