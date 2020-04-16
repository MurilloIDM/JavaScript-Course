function carregar() {
    var data = new Date()
    var hora = data.getHours()
    
    var resposta = document.getElementById('resposta')
    resposta.innerHTML = `<p>No momento são ${hora} horas!</p>`

    var img = document.createElement('img')
    img.setAttribute('id', 'imagem')
    img.setAttribute('src', 'manhã.jpg')

    hora = 23

    if (hora >= 1 && hora <= 12) {
        //Manhã
        img.setAttribute('src', 'manhã.jpg')
        document.body.style.backgroundColor = 'rgb(188, 131, 0)'
    }else if (hora > 12 && hora <= 18) {
        //Tarde
        img.setAttribute('src', 'tarde.jpeg')
        document.body.style.backgroundColor = 'rgb(190, 83, 60)'
    }else if (hora > 18) {
        //Noite
        img.setAttribute('src', 'noite.jpeg')
        document.body.style.backgroundColor = 'rgb(25, 67, 102)'
    }

    resposta.appendChild(img)
}

