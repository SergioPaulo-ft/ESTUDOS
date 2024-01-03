// usando o callback vc consegue executar a função dentro de outra funcão 
// chamando ela pelo parametro no caso cb
// o que significa que dentro de cb vou ter uma funcao 

//teste(cb)
/* cb === function(){
    console.log("retornando fn()")
} */

const teste = function(cb) {
    console.log("funcao teste")
    cb(30)
}
const fn = function(p){
    console.log("retornando fn()")
    console.log(p)
}
// fn(30)
teste(fn) 

/*teste(function(){
    console.log("valor desta funcão é outra funcão")
})*/


