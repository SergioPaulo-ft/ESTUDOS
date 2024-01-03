const resp = document.querySelector("#resp")
const form = document.querySelector("#form")
var cpf = document.querySelector("#cpf")

    cpf.addEventListener("keyup",(e)=>{

        //limitando para 9 digitos
        if(e.target.value.length > 9){
            alert("preciso que vc digite 9 digitos do seu cpf")
        }
    })


    form.addEventListener("submit", (e)=>{
        e.preventDefault()

        cpf = cpf.value
        cpfValido = ultimo(penultimo(cpf))
        resp.innerHTML += `Seu Cpf é: ${cpfValido}`

        console.log(calcCPF(cpf.value))
    
    })

    function calcCPF(cpf){

        //digito 10
        var indice = cpf.length +1
        total = cpf[0]*indice

        for(let i = 1; i<cpf.length; i++){
            indice --
            total += cpf[i] *indice
        }

        resto = total%11
        digito10 = 11-resto
        console.log(total)
        
        resto<2 && (digito10 = 0)
      


        //digito 11
        cpf += digito10
        

        for(let i = 1; i<cpf.length; i++){
            indice --
            total += cpf[i] *indice
        }
        digit011 = 11-resto
        console.log(total)
        
        resto<2 && (digit011 = 0)
        cpf += digito11

        return cpf

    }

    function penultimo(cpf){
        var indice = 10
        var multiplica = cpf[0]* indice

        for(let i = 1; i< 9; i++){
            indice --
            multiplica += cpf[i]* indice
        }

        var resto = multiplica%11
        numfinal =  11-resto
       if(resto<2){
        numfinal = 0
       }
        return cpf + numfinal
    }

    function ultimo(cpf){
        var indice = 11
        var multiplica = cpf[0]* indice

        for(let i = 1; i< 10; i++){
            indice --
            multiplica += cpf[i]* indice
        }

        var resto = multiplica%11
        numfinal =  11-resto
        if(resto<2){
            numfinal = 0
           }
        return cpf + numfinal
    }