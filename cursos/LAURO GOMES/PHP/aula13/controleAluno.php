<?php 
include_once "clsAluno.php";

$Cad = new clsAluno();

$Matricula = filter_input(INPUT_GET,"Matricula",FILTER_VALIDATE_INT);
$Nome = filter_input(INPUT_GET,"Nome",FILTER_SANITIZE_SPECIAL_CHARS);
$Nasc = filter_input(INPUT_GET,"Nasc");
$Mens = filter_input(INPUT_GET,"Mens",FILTER_VALIDATE_FLOAT);

$Cad->setMatricula($Matricula);
$Cad->setNome($Nome);
$Cad->setNasc($Nasc);
$Cad->setMens($Mens);

if(isset($_GET["Gravar"]))
{
    echo $Cad->Inserir();
}
else if(isset($_GET["Excluir"]))
{
    echo $Cad->Excluir();
}





