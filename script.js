function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var agora = data.getHours()
    msg.innerHTML = `Agora são ${agora} horas`
    if (agora >= 0 && agora < 12){
       img.src = 'img/manhã.png'
       document.body.style.background = '#e2cd9f'

    }
    else if(agora >= 13 && agora < 18){
        img.src = 'img/tarde.png'
        document.body.style.background = '#9846f'
    }
    else{
        img.src = 'img/noite.png'
        document.body.style.background =  '#515154'
    }
}