<?php
    $cnpj       = $_GET["cnpj"];

    echo ValidaCnpj($cnpj);
   
    function ValidaCnpj($cj){
        $d1 = substr($cj,0,1)*2;
        $d2 = substr($cj,1,1)*3;
        $d3 = substr($cj,2,1)*4;
        $d4 = substr($cj,3,1)*5;
        $d5 = substr($cj,4,1)*6;
        $d6 = substr($cj,5,1)*7;
        $d7 = substr($cj,6,1)*8;
        $d8 = substr($cj,7,1)*9;
        $d9 = substr($cj,8,1)*2;
        $d10 = substr($cj,9,1)*3;
        $d11 = 0;
        $d12 = 0;
      
        if(strlen($cj) == 10){
        $soma = $d1+$d2+$d3+$d4+$d5+$d6+$d7+$d8+$d9+$d10;
        $resto = $soma%11;
        $digito11 = 11 - $resto;
        
        if($resto < 2){
            $digito11 = 0;
        }

        $cnpj= $cj+$digito11;

        if(strlen($cj) == 11){
            $d11 = $digito11*4;
            $soma = $d1+$d2+$d3+$d4+$d5+$d6+$d7+$d8+$d9+$d10+$d11;
            $resto = $soma%11;
            $digito12 = 11 - $resto;
            
            if($resto < 2){
                $digito12 = 0;
            }
            $cnpj= $cnpj+$digito12;

        }
        return $cnpj;
        }

        
    }










































































     // $contador = [];

    // for($i = 2; $i <= 9; $i++){
    //      $contador[$i] = $i;
    //      echo $contador[$i];
    // }