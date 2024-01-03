$(document).ready(function()
{
    //ao clicar em salvar, iremos mandar os dados para o BD
    $('#salvar').click(function()
    {
        var dados = $('#FormCad').serialize();
        $.ajax({
            type: 'GET',
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
        var dados = $('#FormCad').serialize();
        $.ajax({
            type: 'GET',
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