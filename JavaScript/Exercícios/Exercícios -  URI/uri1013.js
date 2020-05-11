let input = require('readline-sync');

let a = input.questionInt();
let b = input.questionInt();
let c = input.questionInt();

let maiorAB = (a + b + Math.abs(a - b)) / 2;
let maiorFinal = (maiorAB + c + Math.abs(maiorAB - c)) / 2;
console.log(`${maiorFinal} eh o maior`);