<?php
include_once "clsAluno.php";

$Cad = new clsAluno();

$nome   = filter_input(INPUT_GET, "nome");
$cpf  = filter_input(INPUT_GET, "cpf");
$celular   = filter_input(INPUT_GET, "celular");
$email = filter_input(INPUT_GET, "email");


$Cad-> setNome($nome);
$Cad-> setCpf($cpf);
$Cad-> setCelular($celular);
$Cad-> setEmail($email);


if(isset($_GET["Enviar"]))
{
    echo $Cad->Enviar();
}

if(isset($_GET["Excluir"])){
    echo $Cad->Excluir();
}

