const Sergio = {
        nome: 'Sergio',
        idade: 22,
        descrever: function (){
            console.log(`meu nome é ${this.nome}, e tenho ${this.idade} anos`);
        }
}
//delete banco.nome

console.log(Sergio['nome']);
//banco.nome banco.idade banco.descrever()

//=================================================================//
//Classes
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

const Paulo = new Pessoa('Paulo',24);

const Otaria = new Pessoa('Otaria', 20);

console.log(Otaria, Paulo);
Paulo.descrever()