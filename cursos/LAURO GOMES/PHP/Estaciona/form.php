<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title></title>
</head>
<body>

	<h1>ESTACIONAMENTO JÁ-FOI-TARDE</h1>	

	<div id="FormEstaciona">
		<form name="frmEstaciona" id="frmEstaciona" action="controle.php" method="get">
			<label>Placa</label>
			<input type="text" name="Placa" id="Placa" size="8" maxlength="8" required placeholder="XXX 9X99">
			<br><br>

			<label>Marca</label>
			<select name="Marca" id="Marca">
				<option value="vw">VW</option>
				<option value="ft">Fiat</option>
			</select>
			<br><br>

			<label>Modelo</label>
			<select name="Modelo" id="Modelo">
				<option value="Polo">Polo</option>
				<option value="Uno">Uno</option>
			</select>
			<br><br>
			<label>Data</label>
			<input type="date" name="Data" id="Data">
			<br><br>

			<label>Entrada</label>
			<input type="time" name="Entrada" id="Entrada">
			<br><br>

			<label>Saida</label>
			<input type="time" name="Saida" id="Saida">
			<br><br>

			<input type="submit" value="Gravar" name="Gravar" id="Gravar">
			<input type="submit" value="Apagar" name="Apagar" id="Apagar">
			<input type="submit" value="Pesquisar" name="Pesquisar" id="Pesquisar">
		</form>
	</div>
</body>
</html>