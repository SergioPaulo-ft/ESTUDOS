<?php

include "clsMedia.php";

$ValorMedia = new clsMedia();


$matricula = $_GET["matricula"];



$ValorMedia->setnota1($_GET["nota1"]);
$ValorMedia->setnota2($_GET["nota2"]);
$ValorMedia->setnota3($_GET["nota3"]);

echo "nota1: ". $ValorMedia->getnota1(). "<br>";
echo "nota2: ". $ValorMedia->getnota2(). "<br>";
echo "nota3: ". $ValorMedia->getnota3(). "<br>";
echo "Nota Media:". round($ValorMedia->NotaMedia(),2);



