var pessoa = {
    nome: {
        primeiroNome: 'Bob',
        ultimoNome: 'Smith'
    },
    idade: 32,
    sexo: 'masculino',
    interesses: ['música', 'esquiar'],
    bio: function() {
        console.log(this.nome.primeiroNome + ' ' + this.nome.ultimoNome + ' tem ' + this.idade + ' anos de idade');
    },
    saudacao: function() {
        console.log('Oi! Eu sou ' + this.nome[0] + '.');
    }
};

/*Visualizando o objeto
console.log(pessoa.nome);
console.log(pessoa.nome[0]);
console.log(pessoa.idade);
console.log(pessoa.interesses[1]);
pessoa.bio();
pessoa.saudacao();
*/

/*Notação de Ponto
console.log(pessoa.idade);
console.log(pessoa.interesses[1]);
pessoa.bio();
console.log(pessoa.nome.primeiroNome);
*/

/*Notação de Colchetes
console.log(pessoa['nome']['primeiroNome']);
console.log(pessoa['bio']);
*/

//Setando membros
pessoa.idade = 45;
pessoa.nome.ultimoNome = 'Deyros';
console.log(pessoa.idade);
console.log(pessoa.nome.primeiroNome + ' ' + pessoa.nome.ultimoNome);

pessoa.corCabelo = 'Preto';
console.log(pessoa.corCabelo);

pessoa.despedida = function() {
    console.log('Adeus, estou indo aprender OOP');
};

pessoa.despedida();

var dataName = 'Altura';
var dataValue = '1.97m';
pessoa[dataName] = dataValue;
console.log(pessoa.Altura);
