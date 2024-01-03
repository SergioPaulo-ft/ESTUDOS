<?php

class clsMens
{
    private $Cpf;
    private $DtPagto;
    private $Mens;
    private $ExMedico;

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
    public function gettPagto()
    {
        return $this->DtPagto;
    }
    public function setDtPagto($dt)
    {
        $this->DtPagto = $dt;
    }
    //-------------------------------------------------------------------
    public function getMens()
    {
        return $this->Mens;
    }
    public function setMens($Mens)
    {
        $this->Mens = $Mens;
    }
    //-------------------------------------------------------------------
    public function getExMedico()
    {
        return $this->ExMedico;
    }
    public function setExMedico($exmed)
    {
        $this->ExMedico = $exmed;
    }
    //--------------------------------------------------------------------
    public function Enviar(){
    include_once "conexao.php";

    try{
        $Comando=$conexao->prepare("insert into TableMens (Cpf,DtPagto, Mens, ExMedico) values(?,?,?,?)");
        $Comando->bindParam(1,$this->Cpf);
        $Comando->bindParam(2,$this->DtPagto);
        $Comando->bindParam(3,$this->Mens);
        $Comando->bindParam(4,$this->ExMedico);


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
            $Comando=$conexao->prepare("delete from TableMens where Cpf = ?");
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
    //--------------------------------------------------------------------
    public function Pesquisar(){
        include_once "conexao.php";
    
            try {
                $Comando = $conexao->prepare("select * from TableMens");
    
                if ($Comando->execute()) {
                    $resultados = $Comando->fetchAll(PDO::FETCH_ASSOC);
    
                    if ($resultados) {
                        $Retorno = "<p>Pesquisa bem-sucedida</p>";
    
                        $table = '<table>
                            <tr>
                                <td>Cpf</td>
                                <td>DtPagto</td>
                                <td>Mens</td>
                                <td>ExMedico</td>
                            </tr>';
    
                        foreach ($resultados as $resultado) {
                            //Cpf,DtPagto, Mens, ExMedico
                            $table .= '<tr>
                                <td>' . $resultado['Cpf'] . '</td>
                                <td>' . $resultado['DtPagto'] . '</td>
                                <td>' . $resultado['Mens'] . '</td>
                                <td>' . $resultado['ExMedico'] . '</td>
                            </tr>';
                        }
    
                        $table .= '</table>';
                    } else {
                        $Retorno = "Nenhum registro encontrado na tabela de TableMens.";
                    }
                }
            } catch (PDOException $Erro) {
                $Retorno = "Erro " . $Erro->getMessage();
            }
            return $table ?? $Retorno;
        }
   
} 
