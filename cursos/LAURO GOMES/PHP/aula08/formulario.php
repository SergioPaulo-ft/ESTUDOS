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
            background-image: linear-gradient(to right, purple, #102647);
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
        .data-hora{
            padding: 15px;
        }
        .data-hora input{
            margin: 10px;
        }
        input:focus{
            outline: none;
        }
    </style>
</head>

<body>
    <section class="section-form">
        <form action="controle.php" method="get" name="controle" id="controle">
            <label for="placa">Placa</label>
            <input type="text" name="placa" size="30" maxlength="50" id="placa">

            <label for="marca">Marca</label>
            <input type="text" name="marca" size="30" maxlength="50" id="marca">
            

            <label for="modelo">Modelo</label>
            <input type="text" name="modelo"  size="30" maxlength="50" id="modelo">
            
            <label for="convenio">Convênio</label>
            <label><input type="radio" value="sim" name="convenio" id="convenio">sim</label>
            <label><input type="radio" value="nao" name="convenio" id="convenio">nao</label>

            <input type="date" name="data" id="data">

            <div class="data-hora">
                <label>Entrada<input type="time" name="entrada" id="entrada"></label>
                <label>Saida<input type="time" name="saida" id="saida"></label>
            </div>
            
            <input type="submit" value="fechamento" id="fechamento" name="botao">
            <input type="reset" value="limpar" id="limpar" name="botao">
        </form>
    </section>
</body>
</html>