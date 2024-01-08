class Pessoa{
    nome;
    idade;
    anoNasc;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNasc = 2024-idade;
    }

    descrever(){
        console.log(`meu nome é ${this.nome}, e tenho ${this.idade} anos`);
    }
}

function compararPessoa(pess1,pess2){

    if(pess1.idade >pess2.idade){
        console.log(`${pess1.nome} é mais velho(a) que ${pess2.nome}`)
    }else if(pess1.idade >pess2.idade){
        console.log(`${pess1.nome} é mais velho(a) que ${pess2.nome}`)
    }else if(pess2.idade >pess1.idade){
        console.log(`${pess2.nome} é mais velho(a) que ${pess1.nome}`)
    }else{
        console.log(`${pess2.nome} e ${pess1.nome} tem a mesma idade`)
    }

}

const Junior = new Pessoa('Junior', 19);
const Renato = new Pessoa('Renato', 20);

compararPessoa(Junior,Renato)

//regra
//atribuindo valores
//executo o algoritmo 