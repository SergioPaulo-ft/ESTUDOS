<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="mediaNota.php" method="get" id="mediaNota" name="mediaNota">
        <label for="nome">nome</label>
        <input type="text" name="nome" id="nome" min=1 max=9999>
        <br>

        <label for="dtaNascimento">Data de Nascimento</label>
        <input type="date" name="dtaNascimento" id="dtaNascimento">
        <br>

        <label><input type="radio" name="genero" id="genero" value="masculino">Masculino</label>
        <label><input type="radio" name="genero" id="genero" value="feminino">Feminino</label>
        <br>

        <select name="escola" id="escola">
            <option value="escola01">escola01</option>
            <option value="escola02">escola02</option>
            <option value="escola03">escola03</option>
            <option value="escola04">escola04</option>
        </select>

        <label for="nota01">Nota 1</label>
        <input type="number" name="nota01" id="nota01" min="0" max="10" step="0.1">
        <label for="nota02">Nota 2</label>
        <input type="number" name="nota02" id="nota02" min="0" max="10" step="0.1">
        <label for="nota03">Nota 3</label>
        <input type="number" name="nota03" id="nota03" min="0" max="10" step="0.1">
        <br>
       
        <input type="submit" value="Media" name="media" id="media">
        <input type="reset" value="Resetar" name="reset" id="reset">
    </form>

    
</body>
</html>