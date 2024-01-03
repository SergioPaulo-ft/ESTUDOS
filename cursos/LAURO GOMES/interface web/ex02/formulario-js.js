
const form = document.getElementById('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    var Vlinicial = parseFloat(document.getElementById('Vlinicial').value)
    var deposito = parseFloat(document.getElementById('deposito').value)
    var TaxaJuros = parseFloat(document.getElementById('TxJuros').value)
    var anos = parseFloat(document.getElementById('anos').value)

    var resp = document.querySelector("#resp-table")

    //taxa de juros e tempo 
    TxJuros = TaxaJuros/100
    MesesTotal = anos*12 //meses


    DepositoTotal = deposito*MesesTotal
    ArrTotal = (SomaMensal(Vlinicial,TxJuros,MesesTotal,deposito))
    acumulado = ArrTotal[ArrTotal.length-1].toFixed(2)
    resp.innerHTML +=` <tr>
    <td>${TaxaJuros}%</td>
    <td>${anos} anos</td>
    <td>${Vlinicial}$</td>
    <td>${DepositoTotal}$</td>
    <td>${acumulado}$</td>
  </tr>`
})

function SomaMensal(inicio,juros,meses,dp){
    total = inicio
    ArrTotal = []

    for(var i = 0; i < meses; i++){
        total += total+dp
        total += total*juros
        ArrTotal[i] = total
    }
    return ArrTotal
}

