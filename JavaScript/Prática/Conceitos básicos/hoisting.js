var nome = 'Murillo IDM'
console.log(lowerCaseNome(nome))

function lowerCaseNome(string) {
    var nomeLower = string.toLowerCase()
    return nomeLower;
}

//É importante lembrar que apenas a declaração é içada
//Esse código abaixo apresentará um erro:

if (true) {
    console.log('Minha idade é ', idade)
    var idade = 18;
}

//O resultado é undefined, pois como já dito, a atribuição não é içada
//PS: hoisting no casos das variáveis ocorre apenas com a palavra-chave VAR
