function calcular() {
    let txtn1 = document.getElementById('txtn1');
    let resposta = document.getElementById('resultado');

    resposta.innerHTML = '';

    let valor = Number(txtn1.value);
    let cédulas = [100, 50, 20, 10, 5, 2, 1];
    let valores = [];

    if (valor != 0) {
        for(let x = 0; x < cédulas.length; x++) {
            valores[x] = Math.trunc(valor / cédulas[x]);
            valor = valor - (valores[x] * cédulas[x]);
            resposta.innerHTML += `<p>${valores[x]} nota(s) de R$ ${cédulas[x].toFixed(2)}</p>`;
        }
    }
}