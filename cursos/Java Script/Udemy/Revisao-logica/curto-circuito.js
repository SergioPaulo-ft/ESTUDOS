
// && : para de ler na primeira variavel false e na ultima true
// || : para de ler na primeira variavel false e na ultima true

//exemplo:

//Porta E
let nome = 'Sergio'
let sobrenome = 'Paulo'

nome && sobrenome && console.log(nome + " " + sobrenome)
//se os tres forem verdadeiros, 
//o END respondera apenas o valor da ultima chamada.
//Mas se um for false,'vazia',undefined etc..., nao responderá nada

////////////////////////////////////////////////////////////////////


//Porta OR
const corPadrao = "black"
let corUsuario = corPadrao || null 

console.log(corUsuario)
//responde o primeiro valor verdadeiro
//se nao tiver valor verdadeiro ele reponde ao ultimo falso

/////////////////////////////////////////////////////////////////////////////

//Unindo as dua Portas Lógicas
let valor = true

valor || console.log('Não é valido') 
//responde o console de valor for igual a false
valor && console.log('É valido')
//responde o console de valor for igual a true



