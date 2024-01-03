<?php
include_once "clsMens.php";

$Cad = new clsMens();

$Cpf  = filter_input(INPUT_GET, "Cpf");
$DtPagto   = filter_input(INPUT_GET, "DtPagto");
$Mens   = filter_input(INPUT_GET, "Mens");
$ExMedico = filter_input(INPUT_GET, "ExMedico");


$Cad-> setCpf($Cpf);
$Cad-> setDtPagto($DtPagto);
$Cad-> setMens($Mens);
$Cad-> setExMedico($ExMedico);


if(isset($_GET["Enviar"]))
{
    echo $Cad->Enviar();
}

if(isset($_GET["Excluir"])){
    echo $Cad->Excluir();
}
