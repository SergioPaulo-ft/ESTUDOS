let arr = [1,2,3]
console.log(arr.reverse())//inverte a array original

console.log(arr.reduce) //add uma função
let soma = arr.reduce(function(acumulador, atual, i, _arr){ 
    console.log(_arr)
    console.log(i)
    return acumulador + atual
})

console.log(soma)

