function avarege(){
    return sum(...arguments) / arguments.length
}

function sum(){
    //pega o valor de arguments e soma com o proximo
    return [...arguments].reduce( function(sum, atual){
        return sum + atual
    },0)
}
let soma = sum(1,3,8)
console.log(soma)
let media = avarege(1,3,8)
console.log(media)