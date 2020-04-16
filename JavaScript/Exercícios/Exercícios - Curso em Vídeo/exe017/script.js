var num = document.getElementById('txtn1');
var resultado = document.getElementById('resultado');
var cb = document.getElementById('secbox');

var nums = [];

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function isList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if(isNum(num.value) && !isList(num.value, nums)) {
        nums.push(Number(num.value));
        var item = document.createElement('option');
        item.text = `O valor ${num.value} foi adicionado`;
        cb.appendChild(item);
        console.log(nums)
    } else {
        alert('Há um erro no campo preenchido!');
    }
    num.value = "";
    num.focus();
    resultado.innerHTML = "";
}

function finalizar() {
    var soma = 0;
    var média = 0;
    var total = nums.length;

    for(let x = 0; x < total; x++) {
        soma += nums[x];
    }

    média = soma / total;

    resultado.innerHTML += `<p>Foram adicionados ${nums.length} números!</p>`;
    resultado.innerHTML += `<p>A soma de todos números é igual a ${soma}.</p>`;
    resultado.innerHTML += `<p>A média dos números é igual a ${média}.</p>`;
    resultado.innerHTML += `<p>O maior é o ${Math.max.apply(Number, nums)} e o menor é o ${Math.min.apply(Number, nums)}.</p>`;

}