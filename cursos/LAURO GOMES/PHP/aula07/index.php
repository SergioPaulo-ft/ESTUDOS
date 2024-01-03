<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            background: #102647;
            color: white;
            font-size: 22px;
            background-image: linear-gradient(to right, #102647, purple);
        }
        .section-form{
            margin-top: 200px;
        }
        form{
            display: flex;
            width: 600px;
            flex-direction: column;
            margin: auto;
        }
        a{
            color: gray;
            text-decoration: none;
            font-size: 22px;
        }
        a:hover{
            color: white;
        }
        input:focus{
            outline: none;
        }
    </style>

</head>
<body>
    <i><a href="index.php" >Menu</a></i>
    <section class="section-form">
        <form action="recibo.php" method="get" name="recibo" id="recibo">
            <label for="produto">Produto</label>
            <input type="text" name="produto" size="30" maxlength="50" id="produto">

            <label for="valor">valor</label>
            <input type="number" name="valor" id="valor" min="1" max="9999" step="0.01">

            <label for="quantidade">quantidade</label>
            <input type="number" name="quantidade" id="quantidade" min="1" max="9999" step="0.01">

            <label for="vencimento">vencimento</label>
            <input type="date" name="vencimento" id="vencimento">
            
            <label for="pagamento">pagamento</label>
            <label><input type="radio" value="pix" name="pagamento" id="pagamento">pix</label>
            <label><input type="radio" value="credito" name="pagamento" id="pagamento">credito</label>
            <input type="submit" value="recibo" id="recibo" name="botao">
            <input type="reset" value="limpar" id="limpar" name="botao">
        </form>
    </section>
    
</body>
</html>