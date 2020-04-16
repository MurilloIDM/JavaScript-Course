let número = document.getElementById('txtn1');
let campo_vazio = document.getElementById('campo_vazio');
let resultado = document.getElementById('resposta');
let lista = document.getElementById('lista');
let botão_adc = document.getElementById('button_adc');
let botão_con = document.getElementById('button_con');

let vetor = [];

function oNúmero(n) {
    if(n.length == 0) {
        return true;
    } else {
        return false;
    }
}

//Adicionar valores
botão_adc.onclick = function() {
    if(oNúmero(número.value)) {
        campo_vazio.innerText = 'é necessário preencher o campo, tente novamente';
    } else {
        campo_vazio.innerText = '';
        
        vetor.push(Number(número.value));
        item = document.createElement('option');
        item.text = `O valor ${número.value} foi adicionado.`;
        lista.appendChild(item);
        número.value = '';
        número.focus();
        console.log(vetor);
    }
}

//Substituição de (N <= 0 por 1)
botão_con.onclick = function() {
    for(let contador = 0; contador < vetor.length; contador++) {
        if(vetor[contador] <= 0) {
            vetor[contador] = 1;
        }
    }

    resultado.innerHTML = `<p>${vetor}</p>`;
}