//somando usando arguments
//nao funciona em arrow function
function somar(){ 
    console.log(arguments) // arguments =  [1,2,3]
    let total = 0;
    for(let i =0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
}
console.log(somar([1,2,3])) // esse é o valor de arguments