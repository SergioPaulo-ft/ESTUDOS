let peso = 50;
let altura = 1.70;

const imc = peso / (altura*altura);
var resultadoPeso = '';


const isObesidadeGrave = imc>40;
const isObesidade = imc<40&&imc>30;
const isPesoAlto = imc<30&&imc>25;
const isPesoNormal = imc<25&&imc>18.5;
const isPesoBaixo = imc<18.5;

isObesidadeGrave && (resultadoPeso = 'Obesidade Grave');
isObesidade && (resultadoPeso = 'Obesidade');
isPesoAlto && (resultadoPeso = 'Acima do peso');
isPesoNormal && (resultadoPeso = 'Peso Normal');
isPesoBaixo && (resultadoPeso = 'Abaixo do Peso');

// if(imc>40){
//     resultadoPeso = 'Obesidade Grave';
// }else if(imc<40&&imc>30){
//     resultadoPeso = 'Obeso';
// }else if(imc<30&&imc>25){
//     resultadoPeso = 'Acima do peso';
// }else if(imc<25&&imc>18.5){
//     resultadoPeso = 'peso normal';
// }else {
//     resultadoPeso = 'abaixo do peso'
// }

console.log(imc, resultadoPeso);