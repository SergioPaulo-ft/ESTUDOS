let idade = 12   
let paisPresentes = false
let comprouBilhete = false

// se(condição){faça isso}se nao{faça isso}

if ((idade >= 18 || paisPresentes === true) && comprouBilhete === true) {
    console.log('pode viajar')

} else if (idade < 18 && paisPresentes === false) {
    console.log('Statos: Menor desacompanhado(a). Não pode comprar Bilhete')

} else if (idade < 18 && paisPresentes === true) {
    console.log('Statos: Menor acompanhado(a)')
    
}else if (idade >= 18){
    console.log('Statos: Maior de idade')
}

//Variavel condicional
 let a = (comprouBilhete === true) ? "bilhete pago" : "nao pagou bilhete"
 console.log(a + ' (variavel condicional)')

// fazer uma tabela verdade facilita bastante a compreensão:

// de maior = idade>=18 ---> 1
// de menor = idade<18  ---> 0
// acompanhado(a) ---> 1
// nao acompanhado ----> 0

// idade >= 18 || paisPresentes === true) && comprouBilhete === true
// (se for maior de idade OU estiver acompanhado) E estiever com bilhete = 'pode viajar'

// SE FOR MAIOR DE IDADE pode comprar o Bilhete 
// SE ESTIVER ACOMPANHADO pode comprar o Bilhete

// maior/menor    acompanhado(a)/nao acompanhado     resultado
//   0                     0                     (0)nao pode viajar
//   0                     1                     (1)pode comprar passagem
//   1                     0                     (1)pode comprar passagem
//   1                     1                     (1)pode comprar passagem

// agora adicionando a condição passagem:
// se NÃO COMPROU o bilhete não pode viajar 

// comprou passagem? se sim: 'bilhete pago'/ se não: 'nao pagou bilhete' 
/*  
    let comprouBilhete = true/false(bollean)
    let a = (comprouBilhete === true) ? "bilhete pago" : "nao pagou bilhete"
    console.log(a + ' (variavel condicional)')
*/
 