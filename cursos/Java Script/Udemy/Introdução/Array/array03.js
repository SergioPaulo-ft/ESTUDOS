let arr1 = [1,2,3]
let arr2 = [4,5,6]

console.log(arr1.toString() + typeof(arr1.toString())) 
//transforma em string

console.log(arr1.join(">") ) 
//tambem transforma em string
//pode receber parametro

let arr3 =  arr1.concat(arr2, 14, 16 ,17)
//junta as arrays

console.log(arr1)
console.log(arr2)
console.log(arr3)