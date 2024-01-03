const arr1 = new Array(1,2,6,5)// cria array
console.log(arr1)

const arr2 = Array.from(arr1)//faz uma cópia
arr2.push(8,6)
console.log(arr2)

const arr3 = Array.of(arr2)//tambem cria arrays
console.log(arr3)