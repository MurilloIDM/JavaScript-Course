
let valors = [8, 5, 3, 2, 1, 4, 5, 6, 6]

/*
for(let x = 0; x < valors.length; x++) {
    console.log(`A posição ${x} tem o valor ${valors[x]}`)
}
*/


for (let pos in valors) {
    console.log(`A posição ${pos} tem o valor ${valors[pos]}`)
}