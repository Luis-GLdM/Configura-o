function carregar() {  
    var msg = document.getElementById(`msg`)
    var img = document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} hora.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia
        img.src = `modelo2/fotomanha.png.png`
        document.body.style.background = '#ffb7c3'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde
        img.src = `modelo2/fototarde.png.png`
        document.body.style.background = '#8ca5ba'
    } else {
        //Boa noite
        img.src = `modelo2/fotonoite.png.png`
        document.body.style.background = '#4a676b'
    }
}