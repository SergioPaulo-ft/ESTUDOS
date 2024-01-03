<?php
include 'conexao.php';

$nome   =$_POST['nome'];
$email  =$_POST['email'];
$senha  =$_POST['senha'];

$sql    = "insert into pessoa(nome,email,senha) values('$nome','$email','$senha')";

mysqli_query($conexao,$sql) or die(error());
$response = array("success" => true);
echo json_encode($response);

echo '<script>alert("salvo")</script>';

?>