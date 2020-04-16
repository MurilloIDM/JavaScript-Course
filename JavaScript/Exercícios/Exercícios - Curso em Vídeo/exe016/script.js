var button = document.getElementById('button')

button.onclick = function () {
    var txtn1 = document.getElementById('txtn1')
    var get = document.getElementById('secbox')
    
    if (txtn1.value.length == 0) {
        alert('O campo deve ser preenchido!')
        window.location.reload()
    } else {
        var number = Number.parseInt(txtn1.value)

        get.innerHTML = ''

        for(let x = 1; x <= 10; x++) {
            let item = document.createElement('option')
            item.text = `${number} x ${x} = ${number * x}`
            item.value = `tab${x}`
            get.appendChild(item)
        }
    }
}