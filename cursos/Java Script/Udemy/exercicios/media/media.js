
    function calcular(){ 
        var soma = 0;  
        for( var i = 0; i < arguments.length; i++){
            soma += arguments[i]
            var media = soma/arguments.length
        }
        return media
    }
    const arr = [5,6,8,9]
    console.log(calcular.apply(null,arr)) // return media 
     
