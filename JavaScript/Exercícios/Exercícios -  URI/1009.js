var readlineSync = require('readline-sync')

var name = readlineSync.question();
var salary, salesAmount, salaryFinal;

salary = readlineSync.questionFloat();
salesAmount = readlineSync.questionFloat();

salaryFinal = salary + (salesAmount * 0.15);
console.log(`NAME: ${name}\nSALARY: R$ ${salary.toFixed(2)}\nSALARY FINAL: R$ ${salaryFinal.toFixed(2)}\n`);