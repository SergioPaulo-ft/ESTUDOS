const numeros = [5,50,10,98,23];
let i = 0;

function gets(){
    let lista = numeros[i];
    i++
    return lista;
}

function print(texto){
    console.log(texto)
}

module.exports = {gets,print};