const calcularIMC = function(peso,altura,callback){ 
    
    
    if(typeof peso !== "number" || typeof altura !== "number"){ 
        // verifica se os numeros foram adicionados
        return console.log('erro')
    }
    var conta = (peso / (altura*altura)).toFixed(2) // conta IMC
    console.log(typeof(callback))
    
    if(typeof callback === "function"){ 
        console.log(conta)       /* se é uma função...*/
        return callback(conta)         /*retorna conta IMC no callback(cb)*/
    }
    return conta //retorna conta: calcularIMC(conta)
}

function classificaIMC(conta){ 
    // usa variavel 'conta' anterior para classificar o IMC,
    console.log(conta)
    if(conta <= 16.9){
        return `Muito abaixo do peso`
    }else if(conta <= 18.4){
        return `Abaixo do peso`
    }else if(conta <= 24.9){
        return `Peso normal`
    }else if(conta <= 29.9){
        return `Acima do peso`
    }else if(conta <= 34.9){
        return `Obesidade Grau I`
    }else if(conta <= 40){
        return `Obesidade Grau II`
    }else{
        return `Obesidade Grau III`
    }
}
var num = calcularIMC(80,1.9)


console.log(`${num} kg/m2 ${classificaIMC(num)}`)

