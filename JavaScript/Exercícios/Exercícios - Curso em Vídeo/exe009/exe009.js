function procurar() {
    var imagem = document.getElementById('trocarimagem')
    var txt = document.getElementById('txt1')
    var resultado = document.getElementById('resultado')
    var texto = String(txt.value).toLocaleLowerCase()

    if (texto == 'brasil') {
        resultado.innerHTML = `<p>Você é <strong>Brasileiro</strong>!</p>`
        imagem.src = "https://f.i.uol.com.br/fotografia/2019/11/19/15741680945dd3e61e90a9c_1574168094_3x2_md.jpg"
    }else {
        if (texto == 'alemanha') {
            resultado.innerHTML = `<p>Você é <strong>Alemão</strong>!</p>`
            imagem.src = "http://geo5.net/imagens/Bandeira-da-Alemanha-2000px.png"
        }else {
            if (texto == 'eua') {
                resultado.innerHTML = "<p>Você é <strong>Norte Americano</strong>!</p>"
                imagem.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2000px-Flag_of_the_United_States.svg.png"
            }else {
                if (texto == 'portugal') {
                    resultado.innerHTML = "<p>Vocé é <strong>Português</strong>!</p>"
                    imagem.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/2000px-Flag_of_Portugal.svg.png"
                }else {
                    if (texto == 'itália') {
                        resultado.innerHTML = "<p>Vocé é <strong>Italiano</strong>!</p>"
                        imagem.src = "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"
                    }else {
                        resultado.innerHTML = "Nada foi encontrado, desculpe-me!"
                    }
                }
            }
        }
    }
}
