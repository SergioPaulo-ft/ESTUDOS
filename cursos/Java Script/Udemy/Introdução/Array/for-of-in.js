const obj = {
    nome: "Maria",
    idade: "28",
    email: "maria@server.com"
}

for(let prop in obj){ //percorre um objeto
    console.log(prop)
    console.log(obj[prop])
}

////////////////////////////////////////////////////////////////////

const arr = [1,2,3,4]

for(valor of arr){ 
    //pega os valores do abjeto
    //faz a mesma função de um: i < num.lenght i++
    console.log(valor)
}