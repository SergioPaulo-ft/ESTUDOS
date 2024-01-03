//+ - * / % **
let n1 = 10
let n2 = 2
console.log(n1/n2)
console.log(n1%n2) // se for 0 é par
console.log(2**3)

//inclemento e declemento
let i = 0
i++
console.log(i)
//i++ ou i-- vai subtrair ou somar 1

//Comparção 
// == igual de valor
// === igual de valor e tipo
// <, >, <=, >=
// != valores diferentes de...
// !== valores e tipos diferentes de...

console.log(n1,n2)
let n5 = "10"
console.log(n1 == n5) //é igual a n5? comparando valor 
console.log(n1 === n5) //é igual a n5? comparando valor e tipo

//exemplo pratico
let idade = 16
let paisPresentes = true
let comprouBilhete = true 
const podeViajar = (idade >= 18 || paisPresentes === true) && comprouBilhete===true
console.log(`Pode Viajar: ${podeViajar}`)