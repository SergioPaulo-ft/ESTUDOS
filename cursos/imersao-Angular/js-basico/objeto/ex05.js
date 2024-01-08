class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return this.peso/(Math.pow(this.altura,2))
    }

    classificarIMC(){
        if(this.calcularIMC()>40){
            return "Obesidade Grave";
        }else if(this.calcularIMC()>=30){
            return "Obesidade";
        }else if(this.calcularIMC()>=25){
            return "Acima do Peso";
        }else if(this.calcularIMC()>=18.5){
            return "Peso Normal";
        }else{
            return 'abaixo do peso';
        }  
    }
}

const p1 = new Pessoa('Jose',200,1.75);

console.log(`imc: ${p1.calcularIMC().toFixed(2)}`)
console.log(`classificação do imc: ${p1.classificarIMC()}`)

