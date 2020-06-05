let nome = 'Murillo Isidoro'
console.log('Antes e fora: ', nome)

if (true) {
    let nome = 'Outro nome'
    console.log('Dentro: ', nome)
}

console.log('Depois e fora: ', nome)

/*
A palavra-chave LET possui o que chamamos
de escopo de bloco, ou seja, existe dentro daquele contexto
de bloco de código que se encontra
*/