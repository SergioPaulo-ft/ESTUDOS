<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cnpj</title>
</head>
<body>
    <form id="form" action="controle.php"> 
        <label for="cnpj">CNPJ</label>
        <input type="number" name="cnpj" id="cnpj" minlength="11">
        <input type="submit" value="validar" >
    </form>
</body>

<script>
    const cnpj = document.getElementById("cnpj")
    cnpj.addEventListener("keyup", (e)=>{
        
    if(e.target.value.length>11){
        alert("digite no maximo 11 digitos")
    }      
    
    })
</script>
</html>