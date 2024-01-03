<?php

$Matricula = $_GET["Matricula"];
$Nome      = $_GET["Nome"];
$Nota1     = $_GET["Nota1"];
$Nota2     = $_GET["Nota2"];
$Nota3     = $_GET["Nota3"];

$Media = ($Nota1 + $Nota2 + $Nota3) / 3;

echo '*** Boletim ***' . '<br>';
echo 'Matricula ' . $Matricula . '<br>';
echo 'Nome      ' . $Nome      . '<br>';

if ($Media >= 0 && $Media <=4.99)
{
    echo 'reprovado';
}
else if ($Media >= 5 && $Media <=7.99)
{
    echo 'recuperacao';
}
else if ($Media >= 8 && $Media <=10)
{
    echo 'aprovadeee😝😜';
}
else
{
    echo 'fora faixa de calculo';
}