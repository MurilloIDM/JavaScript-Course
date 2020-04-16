var readlineSync = require('readline-sync');

var amountNumbers, average, positiveNumbersAmount;

positiveNumbersAmount = 0;

amountNumbers = readlineSync.questionInt('Quantos valores quer ler? ');

for (var x = 0; x < amountNumbers; x++) {
    average = readlineSync.questionInt();

    if (average > 0) {
        positiveNumbersAmount += 1;
    }
}

console.log(`Foram lidos ${amountNumbers}, sendo desses ${positiveNumbersAmount} positivos.`);
