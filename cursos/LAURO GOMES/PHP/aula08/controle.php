<?php
$marca = $_GET["marca"];
$modelo = $_GET["modelo"];
$convenio = $_GET["convenio"];
$data = $_GET["data"];
$entrada =floatval( $_GET["entrada"]);
$saida = floatval($_GET["saida"]);



function ValorTotal($entr, $said, $conv){
    $tempo = $said-$entr;
    $preco = 0;

    if($tempo <= 1){
        $preco = 5;
        return $preco;
    }
    else if($tempo > 1 && $tempo <= 3){
        $preco = 7;
        return $preco;
    }else if($tempo >= 5){
        $preco = 10;
        return $preco;
    }
    return $preco. $conv;
}




echo ValorTotal($entrada, $saida, $convenio);

