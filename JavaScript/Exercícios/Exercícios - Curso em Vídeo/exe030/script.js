let número = document.getElementById('numero');
let resposta = document.getElementById('resposta');
let box = document.getElementById('secbox');

let lista = [];

function oNúmero(n) {
    if(n.length != 0) {
        return true;
    } else {
        return false;
    }
}

function aLista(n, l) {
    if(l.indexOf(Number(n)) == -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if(oNúmero(número.value)) {
        lista.push(Number(número.value));
        if(!aLista(número.value, lista)) {
            item = document.createElement('option');
            item.text = `O número ${número.value} foi adicionado!`;
            box.appendChild(item);

            console.log(lista);

            número.value = '';
            número.focus();

            resposta.innerHTML = '';
        }
    } else {
        alert('Há um erro no preenchimento dos dados, por favor tente novamente!');
    }
}

function calcular() {
    let menor = lista[0];
    let posição = 0;
    let aux = lista.length;
    for(let x = 0; x < aux; x++) {
        if(lista[x] < menor) {
            menor = lista[x];
            posição = x;
        }
    }
    resposta.innerHTML = `<p>O menor valor é o ${menor}!<p/>`;
    resposta.innerHTML += `<p>O menor está na posição ${posição}!<p/>`;
}
