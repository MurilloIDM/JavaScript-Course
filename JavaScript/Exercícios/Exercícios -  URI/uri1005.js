//Média 1
let input = require('readline-sync');

let A = input.questionFloat();
let B = input.questionFloat();

let media = (A * 3.5 + B * 7.5) / 11;
console.log(`MEDIA = ${media.toFixed(5)}`);