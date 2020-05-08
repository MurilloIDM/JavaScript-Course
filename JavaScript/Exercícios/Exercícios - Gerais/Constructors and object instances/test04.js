//Esse código é criado com base no código presente na documentação da Mozilla
function createNewPerson(name) {
    const obj = {};
    obj.name = name;
    obj.greeting = function() {
        console.log('Hi! I\'m ' + obj.name + '.');
    }
    return obj;
}

const murillo = createNewPerson('Murillo');
console.log(murillo.name);
murillo.greeting();