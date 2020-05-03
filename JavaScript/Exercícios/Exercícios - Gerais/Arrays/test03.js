let arrayNames = ['Murillo', 'João', 'Marcos', 'Augusto'];

arrayNames.forEach(function(value, index, array) {
    array[index] = value + ' Sobrenome';
    return array;
});

console.log(arrayNames);