//Média 2
let input = require('readline-sync');

let A = input.questionInt();
let B = input.questionInt();
let C = input.questionInt();

let media = (A * 2 + B * 3 + C * 5) / 10.0;
console.log(`MEDIA = ${media.toFixed(1)}`);
