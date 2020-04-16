var buttonPress = document.getElementById('button')

buttonPress.onclick = function() {
    var txtn1 = document.getElementById('txtn1')
    var resultado = document.getElementById('resultado')
    var ddd = Number(txtn1.value)

    if (ddd == 61) {
        resultado.innerHTML = '<p>Você é de <strong>Brasilia</strong>!</p>'
    }else {
        if (ddd == 71) {
            resultado.innerHTML = '<p>Você é de <strong>Salvador</strong>!</p>'
        }else {
            if (ddd == 11) {
                resultado.innerHTML = '<p>Você é de <strong>São Paulo</strong>!</p>'
            }else {
                if (ddd == 21) {
                    resultado.innerHTML = '<p>Você é de <strong>Rio de Janeiro</strong>!</p>'
                }else {
                    if (ddd == 32) {
                        resultado.innerHTML = '<p>Você é de <strong>Juiz de Fora</strong>!</p>'
                    }else {
                        if (ddd == 19) {
                            resultado.innerHTML = '<p>Você é de <strong>Campinas</strong>!</p>'
                        }else {
                            if (ddd == 27) {
                                resultado.innerHTML = '<p>Você é de <strong>Vitória</strong>!</p>'
                            }else {
                                if (ddd == 31) {
                                    resultado.innerHTML = '<p>Você é de <strong>Belo Horizonte</strong>!</p>'
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}