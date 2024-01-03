<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media Nota</title>
</head>
<body>
    <h1>Media Boletim</h1>

    <form action="controle.php" method="get">
        <label for="matricula">Matricula</label>
        <input type="number" name="matricula" id="matricula"><br>

        <label for="nota1">Nota1</label>
        <input type="number" name="nota1" id="nota1"><br>

        <label for="nota2">Nota2</label>
        <input type="number" name="nota2" id="nota2"><br>

        <label for="nota3">Nota3</label>
        <input type="number" name="nota3" id="nota3"><br>

        <input type="submit" value="Calcular">
        <input type="reset" value="Apagar">

    </form>
</body>
</html>