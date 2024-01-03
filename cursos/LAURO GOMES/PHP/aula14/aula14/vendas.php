<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>site da rosinha 2</title>
</head>
<body>
    <h1>Vendas</h1>
    <form action="controle.php" method="GET">
        <label for="codProd">Codigo produto</label>
        <input type="number" name="codProd" id="codProd"><br>

        <label for="descricao">Descricao</label>
        <input type="text" name="descricao" id="descricao"><br>

        <label for="valor">Valor R$</label>
        <input type="text" name="valor" id="valor"><br>

        <label for="quant">Quantidade</label>
        <input type="number" name="quant" id="quant"><br>

        <h2>Tipo de Pagamento</h2>
        <label><input type="radio" value="credito" name="pag" id="pag">Credito</label><br>
        <label><input type="radio" value="pix" name="pag" id="pag">Pix</label><br>

        <input type="submit" value="Confirmar" name="Confirmar" id="Confirmar">
        <input type="submit" value="Apagar" name="Apagar" id="Apagar">
    </form>
</body>
</html>