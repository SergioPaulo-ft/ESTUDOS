<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Consulta</title>
</head>
<body>
    <form action="controle.php" method="get">
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome" maxlenght="999"> <br>


        <label for="dtaAtend">Data de Atendimento</label>
        <input type="date" name="dtaAtend" id="dtaAtend"> <br>

        <label for="cpf">CPF</label>
        <input type="number" name="cpf" id="cpf"> <br>

        <h2>Serviços</h2>

        
        <label for="servicos">Serviços</label>
        <br>
        <label><input type="radio" value="consulta" name="servicos" id="servicos">Consulta</label>
        <br>
        <label><input type="radio" value="medicacao" name="servicos" id="servicos">Medicacao</label>
        <br>

        <label><input type="checkbox" name="convenio" id="servicos">Convenio</label>
        <br>

        <input type="submit" value="Recibo">
    </form>
</body>
</html>