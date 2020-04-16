var readlineSync = require('readline-sync');

var startTime, endTime, hours;

startTime = readlineSync.questionInt();
endTime = readlineSync.questionInt();

if (startTime > endTime) {
    hours = (24 + endTime) - startTime;
} else if (endTime > startTime) {
    hours = endTime - startTime;
} else {
    hours = 24;
}

console.log(`O jogo durou cerca de ${hours} horas.`);