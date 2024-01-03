<?php

include 'conexao.php';

$nome       =$_POST['nome'];
$descricao  =$_POST['descricao'];
$stats      =$_POST['stats'];

$sql    = "insert into tarefa(nome,descricao,stats) values('$nome','$descricao','$stats')";

mysqli_query($conexao,$sql) or die(error());
$response = array("success" => true);
echo json_encode($response);

?>