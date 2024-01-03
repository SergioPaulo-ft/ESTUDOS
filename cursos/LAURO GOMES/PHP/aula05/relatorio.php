<?php
//Informações Basicas
$Nome       = $_GET["Nome"];
$Nascimento = $_GET["Nascimento"];
$Peso       = floatval($_GET["Peso"]);
$Altura     = floatval($_GET["Altura"]);

//Genero type = radio
$Genero   = $_GET["Genero"];

//Hobbie type = checkbox
$Hobby   = $_GET["Hobby"];

//Informações do usuario
echo "<h1>Relatorio</h1>";
echo "Nome: ".$Nome;
echo "  Dta Nascimento: ".$Nascimento."<br>";
echo "Peso: ".$Peso;
echo "  Altura: ".$Altura."<br>"; 

//Calculo IMC
    if(($Peso && $Altura) != 0){
        $IMC= $Peso/($Altura*$Altura);
        echo "IMC: ".$IMC."<br>"; 
    }else{
        echo "Campos peso e altura nao preenchidos <br>";
    }

// Mostrar genero selecionado
if (isset($Genero)) {
    echo "Gênero: " . $Genero . "<br>";
} else {
    echo "Você precisa selecionar um gênero.";
}

    
// Mostrar Atividades selecionadas
echo "<h2>Atividade Complementar</h2><br>";
    if(isset($Hobby)) {
        foreach ($Hobby as $opcao){
            echo $opcao. "<br>";
        }
    }else{ 
        echo "Você precisa selecionar um Hobby";
    }

