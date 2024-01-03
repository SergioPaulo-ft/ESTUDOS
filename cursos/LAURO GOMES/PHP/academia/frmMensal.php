<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Formulario Mensal</title>
	<link rel="stylesheet" href="css/form.css">
</head>
<body>

	<h1>CADASTRO DE MENSALIDADE</h1>	

	<div id="FormMensal">
		<form name="frmMensal" id="frmMensal" action="controleMens.php" method="get">
			<label>CPF</label>
			<input type="number" name="Cpf" id="Cpf" size="100" >
			<br><br>

			<label>Data de Pagamento</label>
			<input type="date" name="DtPagto" id="DtPagto">
			<br><br>

			<label>Mensalidade R$</label>
			<input type="number" name="Mens" id="Mens">
			<br><br>

			<label>Exame Médico R$</label>
			<input type="number" name="ExMedico" id="ExMedico">
			<br><br>

			<input type="submit" value="Enviar" name="Enviar" id="Enviar">
			<input type="submit" value="Excluir" name="Excluir" id="Excluir">
	
		</form>
	</div>
</body>
</html>