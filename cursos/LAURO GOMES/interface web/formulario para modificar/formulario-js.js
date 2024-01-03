
const form = document.getElementById('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    var Vlinicial = parseFloat(document.getElementById('Vlinicial').value)
    deposito = parseFloat(document.getElementById('deposito').value)
    TaxaJuros = parseFloat(document.getElementById('TxJuros').value)
    anos = parseFloat(document.getElementById('anos').value)

    meses = anos*12 //quantidade de meses de investimento
    depositoTotal = (deposito*meses)+Vlinicial // total de valor investido
    acumuladoTotal = acumulado(Vlinicial,deposito,TaxaJuros,meses) //total de lucro
    
    // escrevendo na tela
    const resp = document.querySelector("#resp-table")

    resp.innerHTML +=` 
    <tr>
    <td>${TaxaJuros}%</td>
    <td>${anos} anos</td>
    <td>${Vlinicial}$</td>
    <td>${depositoTotal}$</td>
    <td>${acumuladoTotal}$</td>
  </tr>`
})

    function acumulado(inicio,investido,juros,indice){
        total = inicio
        for(let i = 0; i < indice; i++){
            total += investido
            total += total *(juros/100) 
        }
        return total
    }

