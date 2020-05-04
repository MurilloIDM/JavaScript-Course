var arrayMultidimensional = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
];  

for(var l = 8; l > 0; l--) {
    for(var c = 0; c < 9; c++) {
        arrayMultidimensional[l][c] = 0;
    }
}

for(var l = 0; l < 9; l++) {
    var output = '';
    for(var c = 0; c < 9; c++) {
        output = output + arrayMultidimensional[l][c] + ' ';
    }
    console.log(output);
}