<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compras</title>
</head>
<body>
    <form action="controle.php" method="$_GET">
        <label for="codigo">Codigo do produto</label>
        <input type="number" name="codigo" id="codigo" required><br>

        <label for="descricao">Descricao</label>
        <input type="text" name="descricao" id="descricao" required><br>

        <label for="valor">Valor R$</label>
        <input type="text" name="valor" id="valor" required><br>

        <label for="quant">Quantidade</label>
        <input type="number" name="quant" id="quant" required><br>    
        <br>
        
        <label for="pag">Tipo de Pagamento</label>
        <br>
        <label><input type="radio" value="credito" name="pag" id="pag">Credito</label>
        <br>
        <label><input type="radio" value="pix" name="pag" id="pag">Pix</label>
        <br>


        <input type="submit" value="Confirmar">
        <input type="reset" value="Limpar">
    </form>
</body>
</html>