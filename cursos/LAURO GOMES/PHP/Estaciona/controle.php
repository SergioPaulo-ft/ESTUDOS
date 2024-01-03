<?php
include_once "ClsEstaciona.php";

$Cad = new ClsEstaciona();

$Placa   = filter_input(INPUT_GET, "Placa");
$Modelo  = filter_input(INPUT_GET, "Modelo");
$Marca   = filter_input(INPUT_GET, "Marca");
$Entrada = filter_input(INPUT_GET, "Entrada");
$Saida   = filter_input(INPUT_GET, "Saida");
$Data  = filter_input(INPUT_GET, "Data");

// $Tempo = TempoEstadia($Entrada,$Saida);

$Cad-> setPlaca($Placa);
$Cad-> setModelo($Modelo);
$Cad-> setMarca($Marca);
$Cad-> setEntrada($Entrada);
$Cad-> setSaida($Saida);
$Cad-> setData($Data);

$resultadoPesquisa = $Cad->Pesquisar($Placa);
echo $resultadoPesquisa;

if(isset($_GET["Gravar"]))
{
    echo $Cad->Gravar();
}

if(isset($_GET["Apagar"])){
    echo $Cad->Apagar();
}

if(isset ($_GET['Pesquisar'])){
    $resultadoPesquisa = $Cad->Pesquisar();
    echo $resultadoPesquisa;
}

echo '    Placa    ' . $Placa      . '<br>';
echo str_repeat("=",22) . '<br>';
echo 'Entrada ' . $Entrada . '  -->  Saida ' .  $Saida . '<br>';
// echo 'Tempo de estadia ------- ' . $Tempo     . '<br>';
echo 'Data ------- ' . $Data     . '<br>';

echo str_repeat("=",22) . '<br>';




// function TempoEstadia($Entr,$Sai){
//     // Converte as duas datas para um objeto DateTime do PHP
//     $Inicio = new DateTime($Entr);
//     $Fim = new DateTime($Sai);
//     $Intervalo = $Inicio->diff($Fim);
//     return $Intervalo->format('%H:%I');
// }
 

