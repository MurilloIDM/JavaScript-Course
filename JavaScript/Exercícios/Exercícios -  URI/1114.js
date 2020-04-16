var readlineSync = require('readline-sync');

var userPassword, flag;

flag = true;
while(flag) {

    userPassword = readlineSync.questionInt();

    if (userPassword === 2002) {
        console.log('Acesso permitido!');
        flag = false;
    } else {
        console.log('Acesso negado!');
    }

}