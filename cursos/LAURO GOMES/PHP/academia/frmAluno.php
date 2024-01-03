<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Cadastro Aluno</title>
	<link rel="stylesheet" href="css/form.css">
</head>
<body>

	<h1>CADASTRO DE ALUNOS</h1>	

	<div class="Form" id="Form">
		<form name="frmAluno" id="frmAluno" action="controleAluno.php" method="get">
			<label>Nome</label>
			<input type="text" name="nome" id="nome" size="100" maxlength="100" >
			<br><br>

			<label>CPF</label>
			<input type="number" name="cpf" id="cpf">
			<br><br>

			<label>Celular</label>
			<input type="number" name="celular" id="celular">
			<br><br>

			<label>Email</label>
			<input type="text" name="email" id="email">
			<br><br>

			<input type="submit" value="Enviar" name="Enviar" id="Enviar">
			<input type="submit" value="Excluir" name="Excluir" id="Excluir">
	
		</form>
	</div>
</body>
</html>