let input = require('readline-sync');

let a = input.questionFloat();
let b = input.questionFloat();
let c = input.questionFloat();

let areaTriangulo = (a * c) / 2;
let areaCirculo = 3.14159 * Math.pow(c, 2);
let areaTrapezio = ((a + b) * c) / 2;
let areaQuadrado = b * b;
let areaRetangulo = a * b;

console.log('TRIANGULO: ' + areaTriangulo.toFixed(3));
console.log('CIRCULO: ' + areaCirculo.toFixed(3));
console.log('TRAPEZIO: ' + areaTrapezio.toFixed(3));
console.log('QUADRADO: ' + areaQuadrado.toFixed(3));
console.log('RETANGULO: ' + areaRetangulo.toFixed(3));