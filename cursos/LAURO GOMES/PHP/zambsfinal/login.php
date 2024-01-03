<?php

$nome = filter_input(INPUT_GET, 'nome', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_GET, 'email', FILTER_SANITIZE_EMAIL);
$senha = filter_input(INPUT_GET, 'senha', FILTER_SANITIZE_STRING);

include_once "conexao.php";

try {
    // Ajuste para uma consulta de seleção
    $Comando = $conexao->prepare("SELECT email, senha FROM cadastro WHERE email = :email AND senha = :senha");
    
    // Substitui os valores diretamente na consulta (não é o ideal, veja observação abaixo)
    $Comando->bindParam(':email', $email, PDO::PARAM_STR);
    $Comando->bindParam(':senha', $senha, PDO::PARAM_STR);

    // Executa a instrução preparada
    $Comando->execute();

    if ($Comando->rowCount() > 0) {
        header("Location: FormTarefas.php");
        exit();
    } else {
        header("Location: FormCad.php");
        exit();
    }
} catch (PDOException $Erro) {
    header("Location: FormCad.php"); // Não existe
    exit();
}
?>
