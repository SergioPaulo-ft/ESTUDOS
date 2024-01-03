const form = document.getElementById("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    var nome = document.querySelector("#nome").value
    var salario = parseFloat(document.querySelector("#salario").value)
    var hora = parseFloat(document.getElementById("HoraTrab").value)
    var ValorHora = parseFloat(document.querySelector("#ValorHora").value)
    var descontos = desc(salario)

    var tabela = CriaTable()
    tabela.innerHTML = 
    `<thead>*
        <tr> 
            <th>Nome</th>  
            <th>Salario Bruto</th> 
            <th>desc. INSS</th> 
            <th>desc. Imposto de Renda</th> 
            <th>FGTS</th>
            <th>Horas Trabalhadas</th>
            <th>Valor de Hora</th>
        </tr>
    </thead>
    `
    tabela.innerHTML += 
    `<tbody>
        <tr> 
            <td>${nome}</td>  
            <td>${salario} R$</td> 
            <td>${descontos.inss} R$</td> 
            <td>${descontos.imposto} R$</td> 
            <td>${descontos.fgts} R$</td>
            <td>${hora} horas</td>
            <td>${ValorHora} R$</td>
        </tr>
    </tbody>
    <br>
    `
    
})

function desc(bruto){
    
    var descontos = new Object()

    //INSS
    if(bruto <= 1100){
        descontos.inss = bruto*(7.5/100)
    }else if(bruto > 1100 && bruto <= 2200){
        descontos.inss = bruto*(9/100)
    }else if(bruto > 2200 && bruto <= 3300){
        descontos.inss = bruto*(12/100)
    }else if(bruto > 3300 && bruto <= 6433.57){
        descontos.inss = bruto*(14/100)
    }
    else if(bruto > 6433.57){
        descontos.inss = 751.99
    }

    //IMPOSTO
    if(bruto <= 1903.98){
        descontos.imposto = 0
    }else if(bruto > 1903.98 && bruto <= 2826.65){
        descontos.imposto = bruto*(7.5/100)
    }else if(bruto > 2826.65 && bruto <= 3751.05){
        descontos.imposto = bruto*(15/100)
    }else if(bruto > 3751.05 && bruto <= 4664.68){
        descontos.imposto = bruto*(22.5/100)
    }if(bruto > 4664.68){
        descontos.imposto = bruto*(27.5/100)
    }

    //FGTS
    descontos.fgts = bruto*(8/100)
    return descontos

}

//Criando tabela para mostrar holerite
function CriaTable(){
    const section = document.getElementById("section")
    section.className = "section"
    const table = document.createElement("table")
    table.className = "section-table"
    section.appendChild(table)
    return table
}
    