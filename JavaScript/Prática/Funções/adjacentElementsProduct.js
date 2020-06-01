function adjacentElementsProduct(inputArray) {

    let prod;
    let largest = inputArray[0];

    for (let x = 0; x < inputArray.length; x++) {

        prod = inputArray[x] * inputArray[x + 1]

        if (prod > largest) {
            largest = prod;
        }

    }

    return largest

}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))