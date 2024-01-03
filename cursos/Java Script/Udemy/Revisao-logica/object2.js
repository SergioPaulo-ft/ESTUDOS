const produto = {
    nome:"caneta",
    qtd:10, //estoque
    comprar: function(n){ //função para subtrair o estoque
        console.log(this)  //this indicado a function usada
        if(n> this.qtd){
            return "quantidade nao disponivel"
        }
        this.qtd -= n
    },
    teste: () =>{ //funcao usando row function
        console.log(this)
    }
}
produto.comprar(2) //numero que sera tirado
console.log(produto)
produto.teste()