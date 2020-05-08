let input = require('readline-sync');

let raio = input.questionFloat();

let volume = (4.0/3) * 3.14159 * Math.pow(raio, 3);
console.log(`VOLUME = ${volume.toFixed(3)}`);