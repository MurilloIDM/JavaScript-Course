var número = document.getElementById('txtn1');
var resposta = document.getElementById('resposta');
var contador = 0;

function isPos(n) {
    if(Number(n) > 0) {
        return true;
    } else {
        return false;
    }
}

function calcular() {
    if(isPos(número.value) == true) {
        contador++;
    }
    número.value = '';
    número.focus();
    
    resposta.innerHTML = `<p>Ao total há ${contador} positivos!</p>`
}