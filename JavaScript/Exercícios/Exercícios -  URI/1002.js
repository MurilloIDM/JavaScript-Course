var readlineSync = require('readline-sync');

var radius = readlineSync.questionFloat();

var area = 3.14159 * (Math.pow(radius, 2));
console.log(`A=${area.toFixed(4)}`);