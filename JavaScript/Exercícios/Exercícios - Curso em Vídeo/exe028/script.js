let valor = document.getElementById('valor');
let número = document.getElementById('número');
let resultado = document.getElementById('resultado');
let quantidade = document.getElementById('quantidade');
let combobox = document.getElementById('combobox');

let números = [];

function aQuantidade(n, l) {
    if(n == l.length) {
        return true;
    } else {
        return false;
    }
}

function aNúmero(n) {
    if(n.length != 0) {
        return true;
    } else {
        return false;
    }
}

function calcular() {
    let contador = Number(valor.value);
    if(aNúmero(número.value)) {
        números.push(Number(número.value));
        quantidade.innerHTML = `<p>Você deve digitar ${contador} números.</p>`;

        let item = document.createElement('option');
        item.text = `O número ${Number(número.value)} foi adicionado.`;
        combobox.appendChild(item);
        if(aQuantidade(valor.value, números)) {
            let soma = 0;
            var média = 0;
            let contador = números.length;
            for(let x = 0; x < contador; x++) {
                soma = soma + números[x];
            }
            console.log(números);
            média = soma / contador;
            console.log(média);
            resultado.innerHTML = `<p>A média desses valores é igual a ${média}.</p>`;
        }
    } else {
        alert('Você não preencheu corretamente os campos, tente novamente!');
    }
}