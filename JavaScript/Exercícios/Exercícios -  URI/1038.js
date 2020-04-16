var readlineSync = require('readline-sync');

var code, amount;

code = readlineSync.questionInt();
amount = readlineSync.questionInt();

switch (code) {
    case 1:
        console.log(`Total: R$ ${(amount * 4.00).toFixed(2)}`);
        break;
    case 2:
        console.log(`Total: R$ ${(amount * 4.50).toFixed(2)}`);
        break;
    case 3:
        console.log(`Total: R$ ${(amount * 5.00).toFixed(2)}`);
        break;
    case 4:
        console.log(`Total: R$ ${(amount * 2.00).toFixed(2)}`);
        break;
    case 5:
        console.log(`Total: R$ ${(amount * 1.50).toFixed(2)}`);
        break;
}