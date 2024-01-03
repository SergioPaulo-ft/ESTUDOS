function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `<p>São exatamente ${hora} horas.</p>`

if(hora >=0 && hora < 12){
    //bom dia
    img.src = 'imagens/manha.jpg'
    msg.innerHTML = `<p>Bom Dia agora são ${hora} horas.</p>`  
    container.style.background = '#DAA520'
}
    else if(hora >=12 && hora < 18) {    
       //boa tarde
        img.src = 'imagens/tarde.jpg'
        msg.innerHTML = `<p>Boa Tarde agora são ${hora} horas.</p>`
        container.style.background = '#ADD8E6'
       
    }
    else {
        //boa noite
        img.src = 'imagens/noite.jpg'
        msg.innerHTML = `<p>Boa Noite agora são ${hora} horas.</p>`
        container.style.background = '#8B4513'
    }
    container.style.textAlign = 'center'

}