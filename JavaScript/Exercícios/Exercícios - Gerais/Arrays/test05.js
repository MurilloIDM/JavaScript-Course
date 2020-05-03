let namesUsers = ['Murillo', 'Marcos', 'Rafael', 'Jorge', 'Vinicius'];

function nossoMap(array, myFunction) {
    const novoArray = [];
    for(let i = 0; i < array.length; i++) {
        const itemArray = array[i];
        novoArray.push(myFunction(itemArray, i));
    }

    return novoArray;
}

let copyArray = nossoMap(namesUsers, function(value, i, array) {
    array[i] = value + '!';
    return array[i];
});

console.log(copyArray);