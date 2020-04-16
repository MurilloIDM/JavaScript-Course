var readlineSync = require('readline-sync');

var oneNumber, twoNumber;

oneNumber = readlineSync.questionInt();
twoNumber = readlineSync.questionInt();

if (oneNumber % twoNumber === 0 || twoNumber % oneNumber === 0) {
    console.log('E multiplo');
} else {
    console.log('Nao e multiplo');
}