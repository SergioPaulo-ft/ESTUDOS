<?php
$nome = $_GET["nome"];
$dtaNascimento = $_GET["dtaNascimento"];
$genero = $_GET["genero"];
$escola = $_GET["escola"];
$nota01 = floatval($_GET["nota01"]);
$nota02 = floatval($_GET["nota02"]);
$nota03 = floatval($_GET["nota03"]);

function FiltrarDados($nome,$dtaNascimento,$genero,$escola,$nota01,$nota02,$nota03) {
    $media = ($nota01 + $nota02 + $nota03)/3;
    $status = "indefinido";
    if($media <=5){
        $status = "reprovado";
    }else if($media >5 && $media<7.99){
        $status = "recuperação";
    }else if($media >7.99 && $media<9){
        $status = "aprovado";
    }else if($media > 9 && $media < 10.1){
        $status = "aprovado com merito";
    }else{
        $status = "nota invalida";
    }
    $relatorio = 'nome:' .$nome. '<br>Data de Nascimento:' .$dtaNascimento. '<br>genero:' .$genero. '<br>escola:' .$escola.'<br>nota01:' .$nota01.'<br>nota02:' .$nota02. '<br>nota03:' .$nota03. '<br>media:' .$media. '<br>status:' .$status;  
    return $relatorio;
}

// Chamando a função com parâmetros
echo FiltrarDados($nome,$dtaNascimento,$genero,$escola,$nota01,$nota02,$nota03);

