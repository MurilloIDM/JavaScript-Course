var nome = 'Murillo Isidoro'
console.log('Global: ', nome)

if (true) {
    var nome = 'Outro nome'
    console.log(nome)
}

console.log('Pós function: ', nome)