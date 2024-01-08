const {print,gets} = require('./funcoes-auxiliares');

const numerosSorteados = [];

for(let i = 0; i<5; i++){
    const numeroSorteados = gets()
    numerosSorteados.push(numeroSorteados)
}

let maiorValor = 0

for (let i = 0; i < numerosSorteados.length; i++) {
    const numSorteado = numerosSorteados[i];
    if(numSorteado > maiorValor){
        maiorValor = numSorteado;
    }
}
print(numerosSorteados)

