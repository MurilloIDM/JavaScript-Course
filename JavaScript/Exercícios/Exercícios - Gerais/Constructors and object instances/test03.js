let input = require('readline-sync');

function Pessoa(primeiroNome, ultimoNome, idade, cpf, pais, hobby) {
    this.nome = {
        primeiroNome: primeiroNome,
        ultimoNome: ultimoNome
    }
    this.idade = idade;
    this.cpf = cpf;
    this.naturalidade = pais;
    this.hobby = hobby;
    this.bio = function() {
        return this.nome.primeiroNome + ' ' + this.nome.ultimoNome + ' tem ' + this.idade + ' anos. É ' + this.naturalidade + ' e adora ' + this.hobby + '.\n';
    }
}

let novosUsuarios = input.questionInt('Informe a quantidade de novos usuarios a cadastrar: ');
let usuarios = [];

for(let x = 0; x < novosUsuarios; x++) {
    console.log('User ' + x + ': ');
    let primeiroNome = input.question('Informe seu primeiro nome: ');
    let ultimoNome = input.question('Informe seu ultimo nome: ')
    let idade = input.questionInt('Informe sua idade: ');
    let cpf = input.questionInt('Informe seu CPF: ');
    let pais = input.question('Informe sua naturalidade: ');
    let hobby = input.question('Informe um hobby (um verbo): ');

    usuarios[x] = new Pessoa(primeiroNome, ultimoNome, idade, cpf, pais, hobby);
    console.log(usuarios[x].bio());
}




