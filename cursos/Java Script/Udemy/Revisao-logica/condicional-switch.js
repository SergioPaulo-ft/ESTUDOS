// switch responde a valores especificos de forma diferente

let diaSemana = 15
switch(diaSemana){
    case 0:             //sempre começa com 0
    dia = 'Domingo'            
    break               //termina com break

    case 1:             
    dia = 'Segunda'            
    break       

    case 2:             
    dia = 'Terça-Feira'            
    break   

    case 3:             
    dia = 'Quarta-Feira'            
    break   

    case 4:             
    dia = 'Quinta-Feira'            
    break   

    case 5:             
    dia = 'Sexta'            
    break   

    case 6:             
    dia = 'Sabádo'            
    break   
    default:
        dia = "NAN"
}

console.log("hoje é "+ dia)