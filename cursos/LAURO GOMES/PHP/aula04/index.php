<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
</head>
<body>
    <h1>CADASTRO</h1>
    <form action="Media.php" method="get" id="Media">
    <label for="Matricula">Matricula</label>
    <input type="number" name="Matricula" id="Matricula" min=1 max=9999><br>

    <label for="Nome">Nome</label>
    <input type="text" name="Nome" id="Nome" placeholder="NomeCompleto" size=30 maxlength=60><br>

    <label for="Nota1">Nota1</label>
    <input type="number" name="Nota1" id="Nota1" min=1 max=10 step="0.01"><br>

    <label for="Nota2">Nota2</label>
    <input type="number" name="Nota2" id="Nota2" min=1 max=10 step="0.01"><br>

    <label for="Nota3">Nota3</label>
    <input type="number" name="Nota3" id="Nota3" min=1 max=10 step="0.01"><br>

    <input type="submit" value="Calcular" name="Botao" id="Calcular">
    <input type="reset" value="Limpar" name="Botao" id="Limpar">

    </form>    
    <script src="index.js"></script>
</body>
</html>