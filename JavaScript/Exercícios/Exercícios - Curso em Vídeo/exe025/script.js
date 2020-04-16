let n1 = document.getElementById('txtn1');
let n2 = document.getElementById('txtn2');
let resultado = document.getElementById('resultado');

function osNúmeros(a, b) {
    if((Number(a) >=0 && Number(a) <= 24) && (Number(b) >= 0 && Number(b) <= 24)) {
        return true;
    } else {
        return false;
    }
}

function calcular() {
    if(osNúmeros(n1.value, n2.value)) {
        if(Number(n1.value) > Number(n2.value)) {
            let tempo = 0;
            tempo = (24 + Number(n2.value)) - Number(n1.value);
            resultado.innerHTML = `<p>O jogo durou ${tempo} horas!<p>`;
        } else if (Number(n1.value) < Number(n2.value)) {
            let tempo = 0;
            tempo = Number(n2.value) - Number(n1.value);
            resultado.innerHTML = `<p>O jogo durou ${tempo} horas!<p>`;
        } else if (Number(n1.value) == Number(n2.value)) {
            let tempo = 0;
            tempo = 24;
            resultado.innerHTML = `<p>O jogo durou ${tempo} hora(s)!<p>`;
        }
    } else {
        alert('Há algum erro nos campos preenchidos. Confira-os, por favor e tente novamente');
    }
}