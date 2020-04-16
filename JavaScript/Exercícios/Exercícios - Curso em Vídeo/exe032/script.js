let resultado = document.getElementById('resultado');

function soma() {
    let num1 = document.getElementById('num-um').value;
    let num2 = document.getElementById('num-dois').value;
    var soma = Number(num1) + Number(num2);
    resultado.innerHTML = `<p>${soma.toFixed(1)}</p>`;
}

function subtracao() {
    let num1 = document.getElementById('num-um').value;
    let num2 = document.getElementById('num-dois').value;
    var sub = Number(num1) - Number(num2);
    resultado.innerHTML = `<p>${sub.toFixed(1)}</p>`;
}

function multiplicacao() {
    let num1 = document.getElementById('num-um').value;
    let num2 = document.getElementById('num-dois').value;
    var mult = Number(num1) * Number(num2);
    resultado.innerHTML = `<p>${mult.toFixed(1)}</p>`;
}

function divisao() {
    let num1 = document.getElementById('num-um').value;
    let num2 = document.getElementById('num-dois').value;
    var div = Number(num1) / Number(num2);
    resultado.innerHTML = `<p>${div.toFixed(1)}</p>`;
}