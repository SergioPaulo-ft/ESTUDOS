let arr = [4,5,6,8,15,7,20,2]
console.log(arr.lastIndexOf(20)) //mostra em que lugar esta o numero
console.log(arr.includes(15))//procura numero e responde em booleano
console.log(arr.find(function(el){ 
    //retorna o primeiro numero maior que 10
    return el > 10
}))
console.log(arr.findIndex(function(el){ 
    //retorna o local do numero maior que 10
    return el > 10
}))