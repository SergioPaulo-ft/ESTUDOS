<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
    <script src="js/jquery-1.8.2.min.js" type="text/javascript"></script>
    <script src="js/index.js" defer></script>
</head>
<body>
<h1>Cadastro</h1>
       <form id="FormCad" action="login.php" method="GET">
        <label>Nome:</label>
        <input type="text" name="nome" id="nome" maxlength="30">
        <label>Email:</label>
        <input type="text" name="email" id="email" maxlength="50">
        <label>Senha:</label>
        <input type="text" name="senha" id="senha" maxlength="50">
        <br><br>
        <input type="button" value="salvar" id="salvar">
        <input type="submit" value="login" id="login" name="login">
       </form>    
</body>
</html>