function jurosTotal()
{
    // 1) 
    var saida = document.getElementById('saida');
    var anos = Number(document.getElementById('anos').value);
    var juros = Number(document.getElementById('juros').value);
    var depI = Number(document.getElementById('depini').value);
    var depM = Number(document.getElementById('depmes').value);
    var nome = document.getElementById('nome').value;

    // 2) Fazer o meio de campo
    var numDeposito = anos * 12;
    var valorFinal = depI;

    // VICTORIA PALHAÇA branca fudida
    for (var i = 0; i < numDeposito; i++)
        {
            var arr = [];
            arr[i] = valorFinal;
            valorFinal += depM;
            valorFinal += valorFinal *(juros/100);
            console.log(arr[i])
        }

        saida.innerHTML = "<h2> Calculo Finalizado </h2>";
        saida.innerHTML += "Nome: " +nome + "<br>";
        saida.innerHTML += "Valor do Depósito Inicial: R$ "+depI + "<br>";
        saida.innerHTML += "Valor do Depósito Mensal: R$ "+depM + "<br>";
        saida.innerHTML += "Valor do juros ao mês: "+juros + "% <br>";
        saida.innerHTML += "Valor Final: R$"+valorFinal + "<br>";
    
}