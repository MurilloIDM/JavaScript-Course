function calcular() {
    var resultado = document.getElementById('result');
    var nome = document.getElementById('name').value;
    var altura = document.getElementById('height').value;
    var peso = document.getElementById('weight').value;
    
    if(veriValues(nome, altura, peso)) {
        var calculoIMC = peso / (altura ** 2);

        if (calculoIMC < 18.5) {
            resultado.innerHTML = `<p><img src="../_imagens/image.png" alt="Imagem de pessoa com os pés em uma balança">
            Olá ${nome}. O cáculo do seu IMC foi de ${calculoIMC.toFixed(2)}. Esse valor é considerado um nível <b>baixo</b>, se necessário, procure ajuda médica.
            </p>`;
        } else if (calculoIMC >= 18.5 && calculoIMC < 25) {
            //Normal
            resultado.innerHTML = `<p><img src="../_imagens/image.png" alt="Imagem de pessoa com os pés em uma balança">
            Olá ${nome}. O cáculo do seu IMC foi de ${calculoIMC.toFixed(2)}. Esse valor é considerado um nível <b>normal</b>, portanto, não há nada para se preocupar.
            </p>`;
        } else if (calculoIMC >= 25 && calculoIMC < 30) {
            //Sobrepeso
            resultado.innerHTML = `<p><img src="../_imagens/image.png" alt="Imagem de pessoa com os pés em uma balança">
            Olá ${nome}. O cáculo do seu IMC foi de ${calculoIMC.toFixed(2)}. Esse valor é considerado um nível de <b>sobrepeso</b>, portanto, se atente mais. Se necessário procure ajuda médica.
            </p>`;
        } else if (calculoIMC >= 30 && calculoIMC < 35) {
            //Obeso I
            resultado.innerHTML = `<p><img src="../_imagens/image.png" alt="Imagem de pessoa com os pés em uma balança">
            Olá ${nome}. O cáculo do seu IMC foi de ${calculoIMC.toFixed(2)}. Esse valor é considerado um nível <b>Obeso I</b>, é necessário acompanhamento médico. Sua saúde depende de você!
            </p>`;
        } else if (calculoIMC >= 35 && calculoIMC < 40) {
            //Obeso II
            resultado.innerHTML = `<p><img src="../_imagens/image.png" alt="Imagem de pessoa com os pés em uma balança">
            Olá ${nome}. O cáculo do seu IMC foi de ${calculoIMC.toFixed(2)}. Esse valor é considerado um nível <b>Obeso II</b>, é necessário acompanhamento médico. Sua saúde depende de você!
            </p>`;
        } else if (calculoIMC >= 40) {
            //Obeso III
            resultado.innerHTML = `<p><img src="../_imagens/image.png" alt="Imagem de pessoa com os pés em uma balança">
            Olá ${nome}. O cáculo do seu IMC foi de ${calculoIMC.toFixed(2)}. Esse valor é considerado um nível <b>Obeso III</b>, é necessário acompanhamento médico. Sua saúde depende de você!
            </p>`;
        }
    } else {
        alert('Nem todos os campos foram preenchidos direito, tente novamente!');
        location.reload();
    }
}

function veriValues(nome, altura, peso) {
    if (nome.length != 0 && altura.length != 0 && peso.length != 0) {
        return true;
    } else {
        return false;
    }
}