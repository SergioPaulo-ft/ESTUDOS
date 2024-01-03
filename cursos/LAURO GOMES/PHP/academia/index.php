<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .menu{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 300px;
            font-size: 30px;
        }
        a{
            text-decoration : none;
        }
    </style>
</head>
<body>
    <div class="menu">
        
        <i><a href="frmAluno.php"  value="cadAluno" name="cadAluno" id="cadAluno">Cadastrar Aluno</a></i>
        <i><a href="frmMensal.php" value="cadMensalidade" name="cadMensalidade" id="cadMensalidade">Cadastrar Mensalidade</a></i>
        <i><a href="listAluno.php" value="listAluno" name="listAluno" id="listAluno">Lista de Alunos</a></i>
        <i><a href="listMens.php" value="listPagto" name="listPagto" id="listPagto">Listar Pagamento</a></i>

    </div>	
</body>
</html>