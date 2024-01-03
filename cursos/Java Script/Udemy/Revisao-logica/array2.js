const nomes = ["João", "Maria", "Pedro", "Julia"] // array

for(let i = 0; i<nomes.length; i++){
    console.log(`${i}: Nome é ${nomes[i]}`)
}

const pessoa = { //object
    nome: "pedro",
    idade:28,
    email: "sergiopauloft@gmail.com"
}

console.log(pessoa)

for (let prop in pessoa){ // for in 
    console.log(pessoa[prop])
}

//