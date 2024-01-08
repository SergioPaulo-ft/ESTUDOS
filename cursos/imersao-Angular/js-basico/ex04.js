function somar(n1,n2){
    const conta = n1+n2;
    return conta;
}
function calcularImc(peso,altura){
    const calc = peso/(Math.pow(altura,2));
    return calc;
}
function classificarImc(imc) {
    if (imc > 40) {
        return 'Obesidade Grave';
    } else if (imc > 30) {
        return 'Obesidade';
    } else if (imc > 25) {
        return 'Acima do peso';
    } else if (imc > 18.5) {
        return 'Peso Normal';
    } else {
        return 'Abaixo do Peso';
    }
}

//função auto invocada
/*(function main(){})() = (function(){})() = (()=>{})()*/ 
(()=>{
    const IMC = calcularImc(54,1.7);
    console.log(IMC.toFixed(2), classificarImc(IMC));
})()


