var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.unshift(22);
array.push(45);

array.shift();
array.pop();

array.splice(1, 0, 'novo valor');
array.splice(1, 1);

//var normalCopyArray = array.slice();

var mapCopy = array.map(function(value) {
    return value ** 2;
});
console.log(array);
console.log(mapCopy);

console.log(array.forEach(function(value, index, vetor) {
    value += 1;
    console.log('array[' + index + ']' + ' = ' + value);
    return vetor;
}));
