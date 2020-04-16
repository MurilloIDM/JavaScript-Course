var readlinesync = require('readline-sync');

var oneNumber = readlinesync.questionInt();
var doubleNumber = readlinesync.questionInt();

var result = oneNumber * doubleNumber;
console.log(`RESULT = ${result}`);