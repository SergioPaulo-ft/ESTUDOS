<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Formulario</h1>
    <form action="relatorio.php" method="get" id="relatorio">
    <label for="Nome">Nome</label>
    <input type="text" name="Nome" id="Nome" min=1 max=9999>
    <br>

    <label for="Nascimento">Nascimento</label>
    <input type="date" name="Nascimento" id="Nascimento" min=1 max=10>   
    <br>

    <label for="Peso">Peso</label>
    <input type="number" name="Peso" id="Peso" min=1 max=200 step="0.1">

    <label for="Altura">Altura</label>
    <input type="number" name="Altura"  id="Altura" min=1 max=4 step="0.1">
   <br>

    <h2>Genero</h2>
    <label for="Feminino"><input type="radio" name="Genero" value="Feminino" id="Feminino">Feminino</label>
    <label for="Masculino"><input type="radio" name="Genero" value="Masculino" id="Masculino">Masculino</label>
    <label for="Outros"><input type="radio" name="Genero" value="Outros" id="Outros">Outros</label>

    <h2>Atividade Complementar</h2>

    <label for="Leitura"><input type="checkbox" name="Hobby[]" value="Leitura" id="Leitura">Leitura</label> 
    <label for="Musica"><input type="checkbox" name="Hobby[]" value="Musica" id="Musica">Musica</label> 
    <label for="Esporte"><input type="checkbox" name="Hobby[]" value="Esporte" id="Esporte">Esporte</label> <br> 

    <input type="submit" value="Relatório" name="relatorio" id="relatorio">
    <input type="reset" value="Limpar" name="limpar" id="limpar">
 
    
    </form>
</body>
</html>
