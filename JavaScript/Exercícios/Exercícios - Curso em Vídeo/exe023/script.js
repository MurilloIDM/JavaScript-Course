var number = document.getElementById('txtn1');
var resposta = document.getElementById('resposta');

function isNumber(n) {
    if(Number(n) == 2002) {
        return true;
    } else {
        return false;
    }
}

function processar() {
    if(isNumber(number.value) == true) {
        resposta.innerHTML = '<p>Acesso Permitido!</p>'
        resposta.style.color = 'green'
    } else {
        resposta.innerHTML += '<p>Senha Inválida!</p>'
    }
    number.value = ''
    number.focus()
}