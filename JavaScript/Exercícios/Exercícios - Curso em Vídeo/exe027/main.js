let botão = document.getElementById('button');
let entrada = document.getElementById('txt1');
let resposta = document.getElementById('resultado');
let valor = 0;

let imagem1 = document.getElementById('resultado-1');
let imagem2 = document.getElementById('resultado-2');

let armas = ['pedra', 'papel', 'tesoura', 'lagarto', 'spock'];

let random = Math.floor(Math.random() * 5);
console.log(random);
//Verificação da palavra na lista
function aLista(n, l) {
    return l.indexOf(n, 0);
}

//Processamento dos dados
botão.onclick = function() {
    let texto = String(entrada.value).toLocaleLowerCase();
    console.log(texto);
    entrada.value = '';
    entrada.focus();

    let img1 = document.createElement('img');
    img1.setAttribute('id', 'imagem');
    let img2 = document.createElement('img');
    img2.setAttribute('id', 'imagem');


    if(aLista(texto, armas) != -1) {
        if((texto == 'tesoura' && random == 1) || (texto == 'papel' && random == 2)) {
           resposta.innerHTML = '<p>A tesoura corta o papel!</p>';
           if(texto == 'tesoura') {
                img1.setAttribute('src', 'tesoura.png');
                img2.setAttribute('src', 'papel.png');
                resposta.innerHTML += '<p>Bazinga!</p>';
           }else {
                img1.setAttribute('src', 'papel.png');
                img2.setAttribute('src', 'tesoura.png');
                resposta.innerHTML += '<p>Raj trapaceou!</p>';
           }
        } else if ((texto == 'papel' && random == 0) || (texto == 'pedra' && random == 1)) {
            resposta.innerHTML = '<p>O papel embrulha a pedra!</p>';
            if(texto == 'papel') {
                img1.setAttribute('src', 'papel.png');
                img2.setAttribute('src', 'pedra.png');
                resposta.innerHTML += '<p>Bazinga!</p>';
            }else {
                img1.setAttribute('src', 'pedra.png');
                img2.setAttribute('src', 'papel.png');
                resposta.innerHTML += '<p>Raj trapaceou!</p>';
            }
        } else if ((texto == 'pedra' && random == 3) || (texto == 'lagarto' && random == 0)) {
           resposta.innerHTML = '<p>A pedra esmaga o lagarto!</p>';
           if(texto == 'pedra') {
                img1.setAttribute('src', 'pedra.png');
                img2.setAttribute('src', 'lagarto.png');
                resposta.innerHTML += '<p>Bazinga!</p>';
            }else {
                img1.setAttribute('src', 'lagarto.png');
                img2.setAttribute('src', 'pedra.png');
                resposta.innerHTML += '<p>Raj trapaceou!</p>';
            }
        } else if ((texto == 'lagarto' && random == 4) || (texto == 'spock' && random == 3)) {
            resposta.innerHTML = '<p>O lagarto envenena Spock!</p>';
            if(texto == 'lagarto') {
                img1.setAttribute('src', 'lagarto.png');
                img2.setAttribute('src', 'spock.png');
                resposta.innerHTML += '<p>Bazinga!</p>';
            }else {
                img1.setAttribute('src', 'spock.png');
                img2.setAttribute('src', 'lagarto.png');
                resposta.innerHTML += '<p>Raj trapaceou!</p>';
            }
        } else if ((texto == 'spock' && random == 2) || (texto == 'tesoura' && random == 4)) {
            resposta.innerHTML = '<p>Spock destrói a tesoura!</p>';
            if(texto == 'spock') {
                img1.setAttribute('src', 'spock.png');
                img2.setAttribute('src', 'tesoura.png');
                resposta.innerHTML += '<p>Bazinga!</p>';
            }else {
                img1.setAttribute('src', 'tesoura.png');
                img2.setAttribute('src', 'spock.png');
                resposta.innerHTML += '<p>Raj trapaceou!</p>';
            }
        } else if ((texto == 'tesoura' && random == 3) || (texto == 'lagarto' && random == 2)) {
            resposta.innerHTML = '<p>A tesoura decapita o lagarto!</p>';
            if(texto == 'tesoura') {
                img1.setAttribute('src', 'tesoura.png');
                img2.setAttribute('src', 'lagarto.png');
                resposta.innerHTML += '<p>Bazinga!</p>';
            }else {
                img1.setAttribute('src', 'lagarto.png');
                img2.setAttribute('src', 'tesoura.png');
                resposta.innerHTML += '<p>Raj trapaceou!</p>';
            }
        } else if ((texto == 'lagarto' && random == 1) || (texto == 'papel' && random == 3)) {
            resposta.innerHTML = '<p>O lagarto come o papel!</p>';
            if(texto == 'lagarto') {
                img1.setAttribute('src', 'lagarto.png');
                img2.setAttribute('src', 'papel.png');
                resposta.innerHTML += '<p>Bazinga!</p>';
            }else {
                img1.setAttribute('src', 'papel.png');
                img2.setAttribute('src', 'lagarto.png');
                resposta.innerHTML += '<p>Raj trapaceou!</p>';
            }
        } else if ((texto == 'papel' && random == 4) || (texto == 'spock' && random == 2)) {
            resposta.innerHTML = '<p>O papel contesta Spock!</p>';
            if(texto == 'papel') {
                img1.setAttribute('src', 'papel.png');
                img2.setAttribute('src', 'spock.png');
                resposta.innerHTML += '<p>Bazinga!</p>';
            }else {
                img1.setAttribute('src', 'spock.png');
                img2.setAttribute('src', 'papel.png');
                resposta.innerHTML += '<p>Raj trapaceou!</p>';
            }
        } else if ((texto == 'spock' && random == 0) || (texto == 'pedra' && random == 4)) {
            resposta.innerHTML = '<p>Spock vaporiza a pedra!</p>';
            if(texto == 'spock') {
                img1.setAttribute('src', 'spock.png');
                img2.setAttribute('src', 'pedra.png');
                resposta.innerHTML += '<p>Bazinga!</p>';
            }else {
                img1.setAttribute('src', 'pedra.png');
                img2.setAttribute('src', 'spock.png');
                resposta.innerHTML += '<p>Raj trapaceou!</p>';
            }
        } else if ((texto == 'pedra' && random == 2) || (texto == 'tesoura' && random == 0)) {
            resposta.innerHTML = '<p>A pedra quebra a tesoura!</p>';
            if(texto == 'pedra') {
                img1.setAttribute('src', 'pedra.png');
                img2.setAttribute('src', 'tesoura.png');
                resposta.innerHTML += '<p>Bazinga!</p>';
            }else {
                img1.setAttribute('src', 'tesoura.png');
                img2.setAttribute('src', 'pedra.png');
                resposta.innerHTML += '<p>Raj trapaceou!</p>';
            }
        } else {
           alert(`São iguais: ${texto} e ${random}`);
           window.location.reload();
        }
        imagem1.appendChild(img1);
        imagem2.appendChild(img2);

        sorteio = 0;

    } else {
        alert('O campo deve ser preenchido corretamente!');
        window.location.reload();
    }
}
