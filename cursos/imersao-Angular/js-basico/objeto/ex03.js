// classe carro
// cor/marca/gasto de combustivel medio por kilometro
// criando um metodo par calcular o gasto de combustivel em reais
//metodo se baseia na quantidade de kilometros e preço de combustivel

class carro{
    marca;
    cor;
    litrosPorKm;

    constructor(marc,cor,litrosPorKm){
        this.marca = marc;
        this.cor = cor;
        this.litrosPorKm = litrosPorKm;
    } 
    calcularGastoCombustivel(distancia,preco){
    return distancia*this.litrosPorKm*preco
}
}


const chevete = new carro('chevrolet', 'preto', 1/12);


console.log(chevete.calcularGastoCombustivel(70,5).toFixed(2))//distancia, preco do combustivel

