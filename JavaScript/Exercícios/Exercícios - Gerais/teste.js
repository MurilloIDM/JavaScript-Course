var input = require('readline-sync');

function newUser() {
        var name = input.question('Digite o seu nome:');
        var company = input.question('Digite o nome da empresa: ');
        var email = input.question('Digite seu email: ');
        var password = input.question('Digite sua senha:');

        var profileUser = [name, company, email, password];
        
        if (userVerification(profileUser) && userPassword(profileUser[3])) {
            console.log('--------------------------');
            console.log(`Nome: ${profileUser[0]}`);
            console.log(`Companhia: ${profileUser[1]}`);
            console.log(`Email: ${profileUser[2]}`);
            console.log('--------------------------');
        } else {
            newUser += 1;
            console.log('Preencha corretamente');
        }
}

var newUsers = input.questionInt('Informe quantos usuários serão cadastrados: ');

for (var controller = 1; controller <= newUsers; controller++) {
    console.log(newUser());
}

function userVerification(profile) {
    if (profile[0].length > 0 && profile[1].length > 0 && profile[2].length > 0 && profile[3].length > 0) {
        console.log('Todos os dados foram preenchidos corretamente.')
        return true;
    } else {
        console.log('Foram encontrado erros nos dados informados, por favor, tente novamente');
        return false;
    }
}

function userPassword(senha) {
    if (senha.length >= 8) {
        console.log('Senha permitida');
        return true;
    } else {
        console.log('Senha inválida, tente novamente!');
        return false;
    }
}

