<?php

include 'conexao.php';

$nome       =$_POST['nome'];
$descricao  =$_POST['descricao'];
$stats     =$_POST['stats'];

$sql    = "delete from tarefa where('$nome')";

mysqli_query($conexao,$sql);
$response = array("success" => true);
echo json_encode($response);

?>