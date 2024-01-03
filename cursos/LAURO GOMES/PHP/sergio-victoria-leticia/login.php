<?php
include 'conexao.php';

$nome   =$_POST['nome'];
$email  =$_POST['email'];
$senha  =$_POST['senha'];

$sql    = "select email, senha from pessoa where email = '$email' and senha = '$senha'";

$result = mysqli_query($conexao,$sql) or die(error());

if(mysqli_num_rows($result) > 0) 
{
    header("Location: tarefa.php"); //existe
}
else
{   
    header("Location: index.php"); // não existe
}


?>