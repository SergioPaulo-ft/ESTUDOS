function fn(cb){ //parametro cb
    console.log("executar acao de callback")
    console.log(typeof cb)
    typeof cb === "function" && cb()   
    //executa parametro se for uma function
}

function callback(){
    console.log("function passada por parametro")
}
fn(callback) 

 

function fn2(n1){
    return function (n2){  //cria uma função como return
        return n1*n2
    }
}
const funcao2 = fn2(10)
const mult = funcao2(2)
console.log(mult)


