let namesUsers = ['Murillo', 'Marcos', 'Rafael', 'Jorge', 'Vinicius'];

function nossoForEach(array, myFunction) {
    for(let i = 0; i < array.length; i++) {
        const itemArray = array[i];
        myFunction(itemArray, i);
    }
}

nossoForEach(namesUsers, function(value, i) {
    console.log(value, i);
});