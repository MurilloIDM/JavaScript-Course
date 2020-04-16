function calcular() {
    var tx1 = document.getElementById('txtn1');
    var tx2 = document.getElementById('txtn2');
    var tx3 = document.getElementById('txtn3');

    var n1 = Number(tx1.value);
    var n2 = Number(tx2.value);
    var n3 = Number(tx3.value);

    var cb = document.querySelector('#secbox');
    var res = document.getElementById('resultado');
    var cbs = cb.options.selectedIndex;

    if(cbs == 1) {
        form = (n1 * n3) / 2;
        res.innerHTML = `O resultado da área do Triângulo é igual a ${form}cm!`;
    }else {
        if(cbs == 2) {
            form = 3.14 * n3;
            res.innerHTML = `O resultado da área do círculo é igual a ${form}cm!`;
        }else {
            if(cbs == 3) {
                form = ((n1 + n2) * n3) / 2;
                res.innerHTML = `O resultado da área do Trapézio é igual a ${form}cm!`;
            }else {
                if(cbs == 4) {
                    form = n1 * n1;
                    res.innerHTML = `O resultado da área do Trapézio é igual a ${form}cm!`
                }else {
                    if(cbs == 5) {
                        form = n1 * n2;
                        res.innerHTML = `O resultado da área do Retângulo é igual a ${form}cm!`;
                    }
                }
            }
        }
    }

    
}