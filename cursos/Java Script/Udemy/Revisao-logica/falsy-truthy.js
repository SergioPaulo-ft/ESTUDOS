//valores considerador falsy:
//falsy values = 0, "", NAN, undefined, Null, false
//truthy = todos os outros

if(null){
    console.log("true")
}else{
    console.log("false")
}




////////////////////////////////////////////////////////////////////

// exemplos de condição usando falsy-truthy

let n = 0  //considerando que 0 correponde ao valor boleeano false

if(!n){    //n=0 --> !n(transformei em verdadeiro)
    n = 10 //se n é verdadeiro seu valor agora é 10
}        

console.log(n)




//////////////////////////////////////////////////////////////////

let isValid = 1  // falsy: 0, "", NAN, undefined, Null, false

//se for verdadeiro...
if(isValid){
    console.log("é valido") 
}   

