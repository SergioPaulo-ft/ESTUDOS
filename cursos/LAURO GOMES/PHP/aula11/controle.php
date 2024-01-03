<?php

include "total.php";

$ValorTotal = new total();

$codProd = $_GET["codProd"];
$descricao = $_GET["descricao"];
$valor = $_GET["valor"];
$quant = $_GET["quant"];
$pag = $_GET["pag"];


$ValorTotal->setcodProduto($codProd);
$ValorTotal->setDescricao($descricao);
$ValorTotal->setValor($valor);
$ValorTotal->setQuant($quant);
$ValorTotal->setPagto($pag);

echo "Produto: ". $ValorTotal->getcodProduto(). "<br>";
echo "Descricao: ". $ValorTotal->getDescricao(). "<br>";
echo "Valor do produto: ". $ValorTotal->getValor(). "<br>";
echo "Quantidade: ". $ValorTotal->getQuant(). "<br>";
echo "Metodo de Pagamento: ". $ValorTotal->getPagto(). "<br>";

echo "Valor Total: ". $ValorTotal->ValorFinal(). "<br>";



