//Esse código é criado com base no código presente na documentação da Mozilla

//A função construtura é a versão do JS de uma classe.
function Person(name) {
    this.name = name;
    this.greeting = function() {
        console.log('Hi! I\'m ' + this.name + '.');
    };
}

let person1 = new Person('Bob');
let person2 = new Person('Sarah');


person1.greeting();
person2.greeting();

