function aVerificação(p, a) {
    if(p.length != 0 && a.length != 0) {
        return true;
    } else {
        return false;
    }
}

function calcular() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let resultado = document.getElementById('resultado');
    
    if(aVerificação(peso, altura)) {
        
        let imc = peso / (altura * altura);

        if(imc < 18.5) {
            resultado.innerHTML = `<h1>${Math.floor(imc * 100) / 100}</h1>`;
            resultado.innerHTML += "<h3>Desnutrição</h3>";
            resultado.style.color = 'red';

        } else if (imc >= 18.5 && imc <= 24.5) {
            resultado.innerHTML = `<h1>${Math.floor(imc * 100) / 100}</h1>`;
            resultado.innerHTML += "<h3>Peso Normal</h3>";
            resultado.style.color = 'green';

        } else if (imc >= 25.0 && imc <= 29.9) {
            resultado.innerHTML = `<h1>${Math.floor(imc * 100) / 100}</h1>`;
            resultado.innerHTML += "<h3>Sobrepeso</h3>";
            resultado.style.color = 'yellow';

        } else if (imc >= 30.0 && imc <= 39.9) {
            resultado.innerHTML = `<h1>${Math.floor(imc * 100) / 100}</h1>`;
            resultado.innerHTML += "<h3>Obesidade</h3>";
            resultado.style.color = 'orange';
            
        } else {
            resultado.innerHTML = `<h1>${Math.floor(imc * 100) / 100}</h1>`;
            resultado.innerHTML += "<h3>Obesidade Mórbida</h3>";
            resultado.style.color = 'red';
        }

    } else {
        alert('preencha todos os campos corretamente');
    }
}