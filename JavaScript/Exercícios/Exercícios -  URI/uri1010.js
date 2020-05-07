let input = require('readline-sync');

let codigoPecaUm = input.questionInt();
let quantidadePecaUm = input.questionInt();
let valorPecaUm = input.questionFloat();
let codigoPecaDois = input.questionInt();
let quantidadePecaDois = input.questionInt();
let valorPecaDois = input.questionFloat();

let valorTotal = (quantidadePecaUm * valorPecaUm) + (quantidadePecaDois * valorPecaDois);
console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);