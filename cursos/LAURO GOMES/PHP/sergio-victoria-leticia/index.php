<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Formulário</title>
        <script src="jquery-1.8.2.min.js" type="text/javascript"></script>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
       <!---caixa de texto para inserir campos no bd--->
    
       <form id="cadUsuario" action="login.php" method="POST">
        <h4>Cadastro</h4>
        
        <label>Nome:</label>
        <input type="text" name="nome" id="nome" maxlength="30">
        <label>Email:</label>
        <input type="text" name="email" id="email" maxlength="50">
        <label>Senha:</label>
        <input type="text" name="senha" id="senha" maxlength="50">
        <br><br>
        <input type="button" value="salvar" id="salvar">
        <input type="submit" value="login" id="">
       </form>


    </body>
</html>
<script type="text/javascript" language="javascript">
    $(document).ready(function()
    {
        //ao clicar em salvar, iremos mandar os dados para o BD
        $('#salvar').click(function()
        {
            var dados = $('#cadUsuario').serialize();
            $.ajax({
                type: 'POST',
                dataType:'json',
                url:'salvar.php',
                async: true,
                data: dados,
                success: function(response)
                {
                    location.reload();
                }
            });
            return false;
        });
        $('#login').click(function()
        {
            var dados = $('#cadUsuario').serialize();
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url:'login.php',
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
