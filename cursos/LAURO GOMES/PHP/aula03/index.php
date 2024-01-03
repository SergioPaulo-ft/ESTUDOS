<?php
$Re = 123456;
$Func = 'Sergio';
$ValorBruto = 300.000;

$FGTS = $ValorBruto*0.085;
$INSS = $ValorBruto*0.09;
$ValeTransp = $ValorBruto*0.06;

$ValorLiquido = ($ValorBruto-$INSS)-$ValeTransp;
echo 
'Numero de Regitro: '.$Re.
'<br>'.'Funcionario: '.$Func.
'<br>'.'Valor bruto: '.$ValorBruto.
'<br>'.'<br>'.'FGTS: '.$FGTS.
'<br>'.'INSS: '.$INSS.
'<br>'.'Vale transporte: '.$ValeTransp.
'<br>'.'Valor liquido✝🖤: '.$ValorLiquido;