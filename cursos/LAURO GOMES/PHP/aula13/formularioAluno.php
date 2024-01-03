<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <form action="controleAluno.php" method="get">
        <label for="Matricula">Matricula</label>
        <input type="number" name="Matricula" id="Matricula" min="1" max="9999"><br>

        <label for="Nome">Nome</label>
        <input type="text" name="Nome" id="Nome" placeholder="NomeCompleto" size="30" maxlength="60"><br>

        <label for="Nasc">Nascimento</label>
        <input type="date" name="Nasc" id="Nasc"><br>

        <label for="Mens">Mensalidade</label>
        <input type="number" name="Mens" id="Mens" step="0.1" min="100" max="9999"><br>

        <input type="submit" value="Gravar" name="Gravar" id="Gravar">
        <input type="submit" value="Excluir" name="Excluir" id="Excluir">
    </form>
    
</body>
</html>