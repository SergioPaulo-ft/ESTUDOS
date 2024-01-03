<?php

class ClsEstaciona
{
    private $Placa;
    private $Modelo;
    private $Marca;
    private $Entrada;
    private $Saida;
    private $Dta;

    //-------------------------------------------------------------------

    public function getPlaca()
    {
        return $this->Placa;
    }
    public function setPlaca($plc)
    {
        $this->Placa = $plc;
    }
    //-------------------------------------------------------------------
    public function getModelo()
    {
        return $this->Modelo;
    }
    public function setModelo($mdl)
    {
        $this->Modelo = $mdl;
    }
    //-------------------------------------------------------------------
    public function getMarca()
    {
        return $this->Marca;
    }
    public function setMarca($mc)
    {
        $this->Marca = $mc;
    }
     //-------------------------------------------------------------------
     public function getEntrada()
     {
         return $this->Entrada;
     }
     public function setEntrada($entr)
     {
         $this->Entrada = $entr;
     }
      //-------------------------------------------------------------------
      public function getSaida()
      {
          return $this->Saida;
      }
      public function setSaida($sd)
      {
          $this->Saida = $sd;
      }
      //-------------------------------------------------------------------
      public function getData()
      {
          return $this->Dta;
      }
      public function setData($dt)
      {
          $this->Dta = $dt;
      }
      //--------------------------------------------------------------------
      public function Gravar(){
        include_once "conexao.php";
    
        try{
            $Comando=$conexao->prepare("insert into estaciona (Placa, Modelo, Marca, Dta, Entrada, Saida) values(?,?,?,?,?,?)");
            $Comando->bindParam(1,$this->Placa);
            $Comando->bindParam(2,$this->Modelo);
            $Comando->bindParam(3,$this->Marca);
            $Comando->bindParam(4,$this->Dta);
            $Comando->bindParam(5,$this->Entrada);
            $Comando->bindParam(6,$this->Saida);

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
    public function Apagar(){
        include_once "conexao.php";
    
        try{
            $Comando=$conexao->prepare("delete from estaciona where Placa = ?");
            $Comando->bindParam(1, $this->Placa); 
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
    public function Pesquisar()
    {
        include_once "conexao.php";

        try {
            $Comando = $conexao->prepare("select * from estaciona where Placa = ?");
            $Comando->bindParam(1, $this->Placa);

            if ($Comando->execute()) {
                $resultado = $Comando->fetch(PDO::FETCH_ASSOC);

                if ($resultado) {
                    // Atualizar os valores da instância com os dados recuperados
                    $this->Placa = $resultado['Placa'];
                    $this->Modelo = $resultado['Modelo'];
                    $this->Marca = $resultado['Marca'];
                    $this->Dta = $resultado['Dta'];
                    $this->Entrada = $resultado['Entrada'];
                    $this->Saida = $resultado['Saida'];

                    $Retorno = "<p>Pesquisa bem-sucedida</p>" ."Placa". $this->Placa. "<br>"."Modelo". $this->Modelo. "<br>"."Marca". $this->Marca. "<br>"."Dta". $this->Dta. "<br>"."Entrada". $this->Entrada. "<br>"."Saida". $this->Saida;
                } else {
                    $Retorno = "Nenhum resultado encontrado para a Placa: " . $this->Placa;
                }
            }
        } catch (PDOException $Erro) {
            $Retorno = "Erro " . $Erro->getMessage();
        }

        return $Retorno;
    }
} 
