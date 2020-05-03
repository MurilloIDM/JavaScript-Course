let arrayNumbers =[1, 2, 3, 4, 5, 6, 7, 8, 9];

//Slice apenas faz um cópia
let arrayNumbersCopy = arrayNumbers.slice();
console.log(arrayNumbersCopy);

//Map faz uma cópia mas te possibilita gerar alterações
//sem afetar o 'array original'.
let arrayNumbersCopyMap = arrayNumbers.map(function(a) {
    return a ** 2;
});
console.log(arrayNumbersCopyMap);