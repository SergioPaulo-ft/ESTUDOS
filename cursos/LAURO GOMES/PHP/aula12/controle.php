<?php
$nome     = $_GET['nome'];
$dtaAtend = $_GET['dtaAtend'];
$cpf      = $_GET['cpf'];
$servicos = isset($_GET['servicos']) ? $_GET['servicos'] : '';
$convenio = isset($_GET['convenio']) ? $_GET['convenio'] : '';

// if($convenio == "on"){
//     $convenio = "tem convenio (nome do convênio)";
// }else{
//     $convenio = "não tem convenio";
// }

include "pagamento.php";
$recibo = new pagamento();

echo "nome: ". $nome. "<br>";
echo "Data de Atendimento: ". $dtaAtend. "<br>";
echo "cpf: ". $cpf. "<br>";
echo "serviço utilizado: ". $servicos. "<br>";
echo  $convenio. "<br>";


echo "Valor Total: ". $recibo->ValorFinal($servicos). "<br>";



