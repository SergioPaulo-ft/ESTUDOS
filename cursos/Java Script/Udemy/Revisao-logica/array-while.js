// numero randomico 
function generateRandomInteger(max){
    return parseInt(Math.random()*max)
}
let arr = []
while(arr.length <= 20){
    let randomNumber = generateRandomInteger(30)
    console.log(randomNumber)

    // adiciona o push dentro de uma condicional 
    // para nao cair num loop infinito
    if(arr.indexOf(randomNumber) < 0){ //senao tiver randomNumber no arr
        arr.push(randomNumber)
    }else{
        console.log(randomNumber, "ja existe")
    }
}
console.log(arr)