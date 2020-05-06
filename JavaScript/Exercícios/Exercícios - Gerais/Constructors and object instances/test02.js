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
        return this.nome.primeiroNome + ' ' + this.nome.ultimoNome + ' tem ' + this.idade + ' anos. É ' + this.naturalidade + ' e adora ' + this.hobby + '.';
    }
}

let primeiroNome = input.question('Informe seu primeiro nome: ');
let ultimoNome = input.question('Informe seu ultimo nome: ')
let idade = input.questionInt('Informe sua idade: ');
let cpf = input.questionInt('Informe seu CPF: ');
let pais = input.question('Informe sua naturalidade: ');
let hobby = input.question('Informe um hobby (um verbo): ');

let userOne = new Pessoa(primeiroNome, ultimoNome, idade, cpf, pais, hobby);
console.log(userOne.bio());