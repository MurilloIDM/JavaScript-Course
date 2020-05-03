let input = require('readline-sync');

//Usuário ira digitar N números, ao final exibir o maior, o menor e a soma deles.

/*
Quando utilizamos o método de ordenação, é necessário entender que
a ordenação ocorre sobre dois elementos. Se o primeiro for menor, 
deve ser retornando um número menor que 0. Se o primeiro for maior,
devemos retornar um número maior que zero. Se eles forem iguais, 
deve retornar 0.
*/

let N = input.questionInt('Digite a quantidade de numeros desejadas: ');

let arrayNumbers = [];
let number;

for (let x = 0; x < N; x++) {
    number = input.questionInt('Digite um numero: ');
    arrayNumbers.push(number);
}

arrayNumbers.sort(function(a, b) { return a - b });
/*É o mesmo que:
function(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    }
    return 0;
    }
}
*/
let menor = arrayNumbers.shift();
let maior = arrayNumbers.reverse().shift();

console.log(`O menor eh: ${menor} e o maior eh ${maior}.`);
