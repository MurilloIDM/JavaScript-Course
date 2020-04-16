let número = document.getElementById('numero');
let resultado = document.getElementById('resultado');

function oNúmero(n) {
    if(n.length != 0) {
        return true;
    } else {
        return false;
    }
}

function confirmar() {
    if(oNúmero(número.value)) {
        let vetor = [];
        let divisão = Number(número.value);
        resultado.innerHTML = '';

        for(let x = 0; x < 101; x++) {
            vetor.push(divisão);
            divisão = divisão / 2;

            resultado.innerHTML += `<p>N[${x}] = ${vetor[x].toFixed(4)}</p>`;
        }
    } else {
        alert('Preecha o campo corretamente!');
        window.location.reload();
    }
}