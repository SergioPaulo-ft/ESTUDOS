<?php

include "ClsVendas.php";

$ValorTotal = new ClsVendas();

$codProd = filter_input(INPUT_GET,"codProd",FILTER_VALIDATE_INT);
$descricao = filter_input(INPUT_GET,"descricao",FILTER_SANITIZE_SPECIAL_CHARS);
$valor = filter_input(INPUT_GET,"valor",FILTER_VALIDATE_FLOAT);
$quant = filter_input(INPUT_GET,"quant",FILTER_VALIDATE_FLOAT);
$pag = filter_input(INPUT_GET,"pag",FILTER_SANITIZE_SPECIAL_CHARS);

$ValorTotal->setcodProduto($codProd);
$ValorTotal->setDescricao($descricao);
$ValorTotal->setValor($valor);
$ValorTotal->setQuant($quant);
$ValorTotal->setPagto($pag);

if(isset($_GET["Confirmar"])){
    echo $ValorTotal ->Inserir();
}//else if(isset($_GET["Apagar"])){
//     echo $ValorTotal->Apagar();
// }

echo "Produto: ". $ValorTotal->getcodProduto(). "<br>";
echo "Descricao: ". $ValorTotal->getDescricao(). "<br>";
echo "Valor do produto: ". $ValorTotal->getValor(). "<br>";
echo "Quantidade: ". $ValorTotal->getQuant(). "<br>";
echo "Metodo de Pagamento: ". $ValorTotal->getPagto(). "<br>";

echo "Valor Total: ". $ValorTotal->ValorFinal(). "<br>";



