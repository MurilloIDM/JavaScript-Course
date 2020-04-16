function play() {
    var nomep = window.prompt('Infome seu nome: ')
    var nome = document.getElementById('nome')

    if (nomep == '') {
        alert('Infome um nome válido...')
        window.location.reload()
    }

    nome.innerHTML = nomep

}

function jogar() {
    var escolha = document.querySelector('#secbox')
    var res_jog = document.getElementById('res-jog')
    var res_pc = document.getElementById('res-pc')
    var img1 = document.getElementById('img1')
    var img2 = document.getElementById('img2')

    sorteio = Math.floor(Math.random() * 3)
    console.log(sorteio)
    valor = escolha.options.selectedIndex
    
    if (valor == 0) {
        alert('Selecione um opção válida.')
        window.location.reload()
    } else {
        if (valor == 1) {
            //foto pedra
            img1.src = "pedra.png"
        }
        if (valor == 2) {
            //foto papel
            img1.src = "papel.png"
        } 
        if (valor == 3) {
            //foto tesoura
            img1.src = "tesoura.png"
        }
    
        if (sorteio == 0) {
            //foto pedra
            img2.src = "pedra.png"
        }
        if (sorteio == 1) {
            //foto papel
            img2.src = "papel.png"
        } 
        if (sorteio == 2) {
            //foto tesoura
            img2.src = "tesoura.png"
        }
        
        if ((valor == 1 && sorteio == 0) || (valor == 2 && sorteio == 1) || (valor == 3 && sorteio == 2)) {
            res_jog.innerHTML = 'Você: EMPATOU'
            res_pc.innerHTML = 'Você: EMPATOU'
        } else if ((valor == 1 && sorteio == 1) || (valor == 2 && sorteio == 2) || (valor == 3 && sorteio == 0)) {
            res_jog.innerHTML = 'Você: PERDEU'
            res_pc.innerHTML = 'Você: GANHOU'
        } else if ((valor == 1 && sorteio == 2) || (valor == 2 && sorteio == 0) || (valor == 3 && sorteio == 1)) {
            res_jog.innerHTML = 'Você: GANHOU'
            res_pc.innerHTML = 'Você: PERDEU'
        }
    }
}