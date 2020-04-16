var button = document.getElementById('button')

button.onclick = function () {
    var txtn1 = document.getElementById('txt1')
    var txtn2 = document.getElementById('txt2')
    var txtn3 = document.getElementById('txt3')
    var resposta = document.getElementById('resposta')

    if ((txtn1.value.length == 0) || (txtn2.value.length == 0) || (txtn3.value.length == 0)) {
        window.alert('Um dos campos não foi preenchido, por favor, preencha os campos para continuar!')
        window.location.reload()
    } else {
        var inicio = Number(txtn1.value)
        var fim = Number(txtn2.value)
        var contador = Number(txtn3.value)
    
        resposta.innerHTML = 'RESULTADO: '
    
        if (inicio < fim) {
            for(let x = inicio; x <= fim; x += contador) {
                resposta.innerHTML += `👉 ${x} `
            }
        } else {
            for(let x = inicio; x >= fim; x -= contador) {
                resposta.innerHTML += `👉 ${x} `
            }
        }
        resposta.innerHTML += `🏁`
    }

}