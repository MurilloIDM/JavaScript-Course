var pessoa = {
    nome: {
        primeiro: 'Bob',
        ultimo: 'Smith'
    },
    idade: 32,
    sexo: 'masculino',
    interesses: ['música', 'esquiar'],
    bio: function() {
        return this.nome.primeiro + ' ' + this.nome.ultimo + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.';
    },
    saudacao: function() {
        return 'Oi! Eu sou ' + this.nome[0] + '.';
    }
};

/*
Visualização das propriedades e métodos do objeto:
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.nome[0]);
console.log(pessoa.idade);
console.log(pessoa.interesses[1]);
console.log(pessoa.bio());
console.log(pessoa.saudacao());
*/

/*Notação de ponto:
console.log(pessoa);
console.log(pessoa.idade);
console.log(pessoa.interesses[0]);
console.log(pessoa.bio());
*/

/*Notação de colchetes:
console.log(pessoa['idade']);
console.log(pessoa['nome']['primeiro']);
*/

//Setando membros:
pessoa.idade = 45;
pessoa['nome']['ultimo'] = 'Cratchit';
console.log(pessoa.idade);
console.log(pessoa['nome']['ultimo']);

pessoa['olhos'] = 'castanho';
pessoa.despedida = function() {
    return 'Adeus a todos! Muito obrigado :)';
};

console.log(pessoa.olhos);
console.log(pessoa.despedida());

var myDataName = 'altura';
var myDataValue = '1.93';
pessoa[myDataName] = myDataValue;

console.log(pessoa);