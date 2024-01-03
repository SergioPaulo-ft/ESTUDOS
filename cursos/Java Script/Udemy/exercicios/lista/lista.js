let input  = document.querySelector("#name")
let listaNomes = document.querySelector("tbody")
let msg =  document.querySelector("#msg")
let procurar = document.querySelector("#pesquisarNome")
//////////////////////////////////////////////////////////////////////
let arr = [
    {nome:  "Pedro"}, /*{idade: "17"}, {nota: "em processo"}, {frequencia: "75%"},*/
    {nome: "Maria"},
    {nome: "Junior"},
    {nome: "Carlos"},
    {nome: "Beatriz"},
    {nome: "Ana"}
]

//escrevendo lista no html
const html = arr.map(lista => ` 
<tr>
    <td>${lista.nome}</td>
`).join("")

listaNomes.innerHTML = html
//////////////////////////////////////////////////////////////////////

const verificar = () => { 
    const lista = arr.map(lista => lista.nome) 
    //valor de "nomes" da array
    let input  = document.querySelector("#name").value
    //entrada

    if(lista.indexOf(input) === -1){
        // se nao tiver "input" dentro de "lista"...
        msg.innerHTML = `Nome não esta na lista`
        //.className = "input-error";
    }else{
        for (const index in lista){ 
            //para cada indice('index') do objeto("lista")...
            console.log(`${index} - ${lista[arr]}`)
            msg.innerHTML = `${input} comprou ingresso na posição ${lista.indexOf(input)}` 
            //${input.document.querySelector("#").style.color = "red" }
            //${lista.indexOf(arr.nome)}
            //${(arr.indexOf(arr.nome)).style.color = "red"}
               
        }
    }
}
procurar.addEventListener("click", verificar)// chamando função com click
input.addEventListener('keypress',function(e){// usando a tecla "Enter"
    if (e.keyCode === 13) {
    verificar()
  }
});
//////////////////////////////////////////////////////////////////////////////
  

/*

1 - escreve lista no html
2 - procura nome na lista
3 - se achar =>
escreve: Carlos comprou ingresso na posição 3 
seleciona o nome achado na lista e muda seu stilo


4 - se nao achar =>
perguntar se o adm vai querer adicionar o nome a lista na proxima posição

*/
