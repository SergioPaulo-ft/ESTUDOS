let  res = document.getElementById('res')
let  num = document.getElementById('txtn')
let list = document.querySelector('select#list')
let val = []

function isNumero(n) {
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  }else{
    return false
  }
}
function inLista(n,l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }
  }

function adicionar(){
  

  if(isNumero(num.value) && !inLista(num.value, val)){
    val.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Numero ${num.value} adicionado.`
    list.appendChild(item)
  }else{
    alert('ERRO, numero invalido ou ja adicionado.  Coloque um numero de 1 a 100 que nao esteja na lista.')
  }
  num.value = ''
}

function calcular(){
  let leng = val.length
  let maior = val[0]
  let menor = val[0]
  let soma = 0
  let media = 0
    if(val.length == 0){
      alert('ERRO, você precisa adicionar numeros na lista.')
    }else{
      for(let pos in val){
        soma += val[pos]
        media = soma/leng
      if(val[pos] > maior){
        maior = val[pos]
      }
      if(val[pos] < menor){
        menor = val[pos]
      }
    }
      res.innerHTML = ''
      res.innerHTML += `<p>${leng} elementos.</p>`
      res.innerHTML += `<p>${maior} foi o maior numero.</p>`
      res.innerHTML += `<p>${menor} foi o menor numero.</p>`
      res.innerHTML += `<p>O resultado da soma de todos os valores foi ${soma}</p>`
      res.innerHTML += `<p>O resultado da soma de todos os valores foi ${media.toFixed(2)}</p>`
      
    }
}