<?php

class clsAluno
{
    private $Nome;
    private $Cpf;
    private $Celular;
    private $Email;

    //-------------------------------------------------------------------

    public function getNome()
    {
        return $this->Nome;
    }
    public function setNome($Nm)
    {
        $this->Nome = $Nm;
    }
    //-------------------------------------------------------------------
    public function getCpf()
    {
        return $this->Cpf;
    }
    public function setCpf($Cpf)
    {
        $this->Cpf = $Cpf;
    }
    //-------------------------------------------------------------------
    public function getCelular()
    {
        return $this->Celular;
    }
    public function setCelular($cl)
    {
        $this->Celular = $cl;
    }
    //-------------------------------------------------------------------
    public function getEmail()
    {
        return $this->Email;
    }
    public function setEmail($Em)
    {
        $this->Email = $Em;
    }
    //-------------------------------------------------------------------
    public function Enviar(){
    include_once "conexao.php";

    try{
        $Comando=$conexao->prepare("insert into alunos (Nome, Cpf, Celular, Email) values(?,?,?,?)");
        $Comando->bindParam(1,$this->Nome);
        $Comando->bindParam(2,$this->Cpf);
        $Comando->bindParam(3,$this->Celular);
        $Comando->bindParam(4,$this->Email);


        if ($Comando->execute()) {
            $Retorno = "Gravação com sucesso";
        }
    }
    catch (PDOException $Erro) {
        $Retorno = "Erro " . $Erro->getMessage();
    }
    return $Retorno;
    }
    //-------------------------------------------------------------------
    public function Excluir(){
        include_once "conexao.php";
    
        try{
            $Comando=$conexao->prepare("delete from alunos where Cpf = ?");
            $Comando->bindParam(1, $this->Cpf); 
            if ($Comando->execute()) {
                $Retorno = "Coluna deletada";
            }
        }
        catch (PDOException $Erro) {
            $Retorno = "Erro " . $Erro->getMessage();
        }
        return $Retorno;
    }
    //-------------------------------------------------------------------
    public function Pesquisar(){
    include_once "conexao.php";

        try {
            $Comando = $conexao->prepare("select * from alunos");

            if ($Comando->execute()) {
                $resultados = $Comando->fetchAll(PDO::FETCH_ASSOC);

                if ($resultados) {
                    $Retorno = "<p>Pesquisa bem-sucedida</p>";

                    $table = '<table>
                        <tr>
                            <td>Cpf</td>
                            <td>Nome</td>
                            <td>Celular</td>
                            <td>Email</td>
                        </tr>';

                    foreach ($resultados as $resultado) {
                        $table .= '<tr>
                            <td>' . $resultado['Cpf'] . '</td>
                            <td>' . $resultado['Nome'] . '</td>
                            <td>' . $resultado['Celular'] . '</td>
                            <td>' . $resultado['Email'] . '</td>
                        </tr>';
                    }

                    $table .= '</table>';
                } else {
                    $Retorno = "Nenhum registro encontrado na tabela de alunos.";
                }
            }
        } catch (PDOException $Erro) {
            $Retorno = "Erro " . $Erro->getMessage();
        }
        return $table ?? $Retorno;
    }
   
} 
