<?php
$produto       = $_GET["produto"];
$valor       = floatval($_GET["valor"]);
$quantidade       = $_GET["quantidade"];
$vencimento       = $_GET["vencimento"];
$pagamento       = $_GET["pagamento"];


echo '*** recibo ***' . '<br>';
echo 'produto: ' . $produto . '<br>';
//.....
echo 'valor final: ' . valorTotal($valor,$pagamento,$quantidade);
echo 'valor Unitario: ' . $valor . '<br>';
echo  'quantidade: ' . $quantidade . '<br>';
echo  'vencimento: ' . $vencimento . '<br>';
echo 'forma de pagamento: ' . $pagamento . '<br>';


function valorTotal($vl,$pg,$qtd){
    if($pg == "pix"){
        $DescontoPix = $vl - ($vl * (5/100));
        return  $DescontoPix*$qtd;
        
    }
    else if($pg){
        $PagCredito = ($vl * 7/100) + $vl;
        return $PagCredito;
    }
}



// $produto          = $_GET["produto"];
// $valor            = $_GET["valor"];
// $quantidade       = $_GET["quantidade"];
// $vencimento       = $_GET["vencimento"];
// $pagamento        = $_GET["pagamento"];

// echo '*** recibo ***' . '<br>';
// echo 'produto ' . $produto . '<br>';
// //.....
// echo 'valor final' . ValorFinal($Valor,$quantidade,$pagamento);

// function ValorFinal($Vl,$Qt,$Pg)
// {
//     if($Pg == "pix"){
//         $VlFinal = descto;
//     }
//     else{
//         $VlFinal = acresc;
//     }
//     return $VlFinal;
// }