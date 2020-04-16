var data = new Date()
var ano = data.getFullYear()

function confirmar() {
    var resposta = document.getElementById('resultado')
    var sexo = document.getElementsByName('sex')
    var nascimento = document.getElementById('ano')
    var nasc = Number(nascimento.value)

    var img = document.createElement('img')
    img.setAttribute('id', 'imagem')

    idade = ano - nasc
    console.log(idade)

    if (nasc > ano || nasc == "") {
        //Alerta de erro
        alert('Há algo de errado com sua data de nascimento, verifique-a.')
    } else {
        if (sexo[0].checked) {
            var sexo = 'homem'
            //Caso o resultado seja MASCULINO
            if (idade >= 1 && idade <= 10) {
                resposta.innerHTML = `<p>Há um ${sexo} de ${idade} anos.</p>`
                img.setAttribute('src', 'mkid.jpg')
            }else if (idade > 10 && idade <= 18) {
                resposta.innerHTML = `<p>Há um ${sexo} de ${idade} anos.</p>`
                img.setAttribute('src', 'mjovem.jpg')
            } else if (idade > 18 && idade <= 60) {
                resposta.innerHTML = `<p>Há um ${sexo} de ${idade} anos.</p>`
                img.setAttribute('src', 'madulto.jpg')
            } else {
                resposta.innerHTML = `<p>Há um ${sexo} de ${idade} anos.</p>`
                img.setAttribute('src', 'idoso.jpg')
            }
            console.log('Masculino')
        } else {
            sexo = 'mulher'
            //Caso o resultado seja FEMININO
            console.log('Femenino')
            if (idade >= 1 && idade <= 10) {
                resposta.innerHTML = `<p>Há uma ${sexo} de ${idade} anos.</p>`
                img.setAttribute('src', 'fkid.jpg')
            }else if (idade > 10 && idade <= 18) {
                resposta.innerHTML = `<p>Há uma ${sexo} de ${idade} anos.</p>`
                img.setAttribute('src', 'fjovem.jpg')
            } else if (idade > 18 && idade <= 60) {
                resposta.innerHTML = `<p>Há uma ${sexo} de ${idade} anos.</p>`
                img.setAttribute('src', 'fadulto.jpg')
            } else {
                resposta.innerHTML = `<p>Há uma ${sexo} de ${idade} anos.</p>`
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        resposta.appendChild(img)
    }
}