let arr = ["a", 5, 24]
arr.push(11,8,"pushadd") 
//adiciona valor a array
console.log(arr)

let ultimoitem = arr.pop()
//remove ultimo item
console.log(arr)

let primeiroitem = arr.shift()
//remove primeiro item
console.log(arr)

let copia = arr.unshift(4,5,6) 
//adiciona array 
console.log(arr)

let arr2 = arr.slice(2,4)//seleciona por indice
//recorta array 
console.log("arr: " + arr)
console.log("arr2: " + arr2)

let arr3 = arr.splice(2,4,"add")//seleciona por indice e valor
//remove e add
console.log("arr: " + arr + " /modifica o original")
console.log("arr3: " + arr3)