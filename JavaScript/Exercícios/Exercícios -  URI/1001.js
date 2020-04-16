//Soma básica entre dois números
var readlineSync = require("readline-sync");

var a = readlineSync.questionInt();
var b = readlineSync.questionInt();
var X = a + b;

console.log(`X = ${X}`);