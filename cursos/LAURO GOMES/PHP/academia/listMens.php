<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/lista.css">
</head>
<body>
<h1>Lista de Pagamentos Mensais</h1>

    <?php
include_once "clsMens.php";

$Cad = new  clsMens();

echo $Cad->Pesquisar();

?>

</body>
</html>
