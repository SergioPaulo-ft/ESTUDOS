function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //data de hoje
    var fano = document.getElementById('txtano')
    anoa = Number(fano.value) //indicando que é um numero
    var res = document.querySelector('div#res')
    
    if(anoa == 00 || anoa > ano) {
        alert('Esse numero nao pode ser um ano')
        res.innerHTML = `<p>Erro, tente denovo</p>`
    }
    else {
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - anoa
        res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var nidade = ''
        var img = document.createElement('img') // criando um elemento para js
        if(fsex[0].checked) {
            genero = 'masculino'
            if(idade >= 0 && idade < 13){
                //criança
                nidade = 'criança'
                img.setAttribute('src', 'imagens/criança.jpg')// elemento anterior
            }
            else if(idade >13 && idade < 18){
                //jovem
                nidade = 'jovem'
                img.setAttribute('src', 'imagens/jovem.jpg')
            }
            else if(idade >18 && idade < 60){
                //adulto
                nidade = 'adulto'
                img.setAttribute('src', 'imagens/adulto.jpg')
            }
            else {
                //idoso
                nidade = 'idoso'
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'feminino'
            if(idade >= 0 && idade < 13){
                //criança
                nidade = 'criança'
                img.setAttribute('src', 'imagens/criança.jpg')
            }
            else if(idade >13 && idade < 18){
                //jovem
                nidade = 'jovem'
                img.setAttribute('src', 'imagens/jovem.jpg')
            }
            else if(idade >18 && idade < 60){
                //adulto
                nidade = 'adulto'
                img.setAttribute('src', 'imagens/adulto.jpg')
            }
            else {
                //idoso
                nidade = 'idosa'
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        }
        res.style.textAlign = 'center' //estilizando com js
        res.innerHTML = `<p>${nidade} do gênero ${genero} de ${idade} anos</p>` 
        res.appendChild(img)// elemento indicado
    } 
    
}