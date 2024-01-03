<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarefa</title>
    <script src="jquery-1.8.2.min.js" type="text/javascript"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <form id="cadTarefa" action="" method="POST">
        <h4>Tarefa Nova</h4>
        <label>Tarefa:</label>
        <input type="text" name="nome" id="nome" maxlength="20">
        <label>Descrição:</label><br>
        <textarea name="descricao" id="descricao" cols="50" rows="10" maxlength="200"></textarea>
        <label>Status</label>
        <select name="stats" id="stats">
            <option value="pendente"  name="descricao" id="descricao">Pendente</option>
            <option value="andamento" name="descricao" id="descricao">Andamento</option>
            <option value="concluída" name="descricao" id="descricao">Concluída</option>
        </select><br><br>
        <div class="box">
            <input type="button" value="salvar" id="salvar">
        <input type="button" value="apagar" id="delete">
        </div>
    </form>
    <div class="box-table">
        <table>
            <tr>
                <td>ID</td>
                <td>Nome</td>
                <td>Descrição</td>
                <td>Status</td>
            </tr>
            <?php
                //chamando a conexão.php
                include 'conexao.php';
                //select para fazer todos os usuarios
                $select = 'select * from tarefa';
                $result = mysqli_query($conexao,$select);

                //percorro a var. para exibir os dados
                while($linha = mysqli_fetch_array($result))
                {
                    echo    "<tr>
                            <td>".$linha['id']."</td>
                            <td>".$linha['nome']."</td>
                            <td>".$linha['descricao']."</td>
                            <td>".$linha['stats']."</td>
                            </tr>";
                }
            ?>
        </table>
    </div>
    

    
</body>

<script type="text/javascript" language="javascript">
         $(document).ready(function()
    {
        //ao clicar em salvar, iremos mandar os dados para o BD
        $('#salvar').click(function()
        {
            var dados = $('#cadTarefa').serialize();
            $.ajax({
                type: 'POST',
                dataType:'json',
                url:'tarSav.php',
                async: true,
                data: dados,
                success: function(response)
                {
                    location.reload();
                }
            });
            return false;
        });
        $('#delete').click(function()
        {
            var dados = $('#cadTarefa').serialize();
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url:'tarDel.php',
                async: true,
                data: dados,
                success: function(response)
                {
                    location.reload();
                }
            });
            return false;
        });
  
    });
    </script>
    </html>