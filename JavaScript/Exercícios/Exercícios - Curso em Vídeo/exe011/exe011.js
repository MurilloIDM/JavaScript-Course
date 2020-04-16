var button = document.getElementById('button')
var img = document.getElementById('img')

button.onclick = function() {
    var txt1 = document.getElementById('cod1')
    var txt2 = document.getElementById('cod2')

    var x = Number(txt1.value)
    var y = Number(txt2.value)

    if(x > 0 && y > 0) {
        img.src = "https://i.ibb.co/B26XJVV/p.jpg"
    }else {
        if(x < 0 && y > 0) {
            img.src = "https://i.ibb.co/XX1FSTK/s.jpg"
        }else {
            if(x < 0 && y < 0) {
                img.src = "https://i.ibb.co/Bn48NRm/t.jpg"
            }else {
                if(x > 0 && y < 0) {
                    img.src = "https://i.ibb.co/MVHb8ph/q.jpg"
                }else {
                    if(x == 0 && y == 0) {
                        img.src = "https://i.ibb.co/MsSmS0d/central.jpg"
                    }
                }
            }
        }
    }
    console.log('O FAEL É BÃO')
}