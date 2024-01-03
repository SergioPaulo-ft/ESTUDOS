<?php
 include_once "conexao.php";
class clsAluno{
    private $Matricula;
    private $Nome;
    private $Nasc;
    private $Mens;
    
    public function getMatricula(){
        return $this->Matricula;
    }
    public function setMatricula($Mt){
        $this->Matricula = $Mt;
    }
    /////////////////////////////////////////////////////
    public function getNome(){
        return $this->Nome;
    }
    public function setNome($Nome){
        $this->Nome = $Nome;
    }
    ////////////////////////////////////////////////////
    public function getNasc(){
        return $this->Nasc;
    }
    public function setNasc($Nasc){
        $this->Nasc = $Nasc;
    }
    ////////////////////////////////////////////////////
    public function getMens(){
        return $this->Mens;
    }
    public function setMens($Mens){
        $this->Mens = $Mens;
    }
    ////////////////////////////////////////////////////

    public function Inserir(){
        include_once "conexao.php";

        try{
            $Comando = $conexao->prepare("INSERT INTO Alunos (Matricula, Nome, Nasc, Mensalidade) VALUES (?, ?, ?, ?)");
            $Comando->bindParam(1, $this->Matricula);
            $Comando->bindParam(2, $this->Nome);
            $Comando->bindParam(3, $this->Nasc);
            $Comando->bindParam(4, $this->Mens);
            
            if($comando->execute()){
                $Retorno = "salvo com sucesso";
            }
            
        } catch (PDOException $Erro) {
           $Retorno = "Erro na conexão:" . $Erro->getMessage();
        }
        return $Retorno;
    }
    public function Excluir(){
        include_once "conexao.php";

        try{
            $Comando = $conexao->prepare("DELETE FROM Alunos WHERE Matricula = (?,?,?);");
            $Comando->bindParam(1, $this->Matricula);
            $Comando->bindParam(2, $this->Nome);
            $Comando->bindParam(3, $this->Nasc);
            $Comando->bindParam(4, $this->Mens);
            
            if($comando->execute()){
                $Retorno = "Dados excluido com sucesso";
            }
            
        } catch (PDOException $Erro) {
           $Retorno = "Erro na conexão:" . $Erro->getMessage();
        }
        return $Retorno;
    }
}