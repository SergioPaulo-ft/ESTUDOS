<?php

class ClsVendas
{

    private $codProduto;
    public $descricao;
    public $valor;
    public $quant;
    public $pagto;


    public function getcodProduto() //pega um valor do formulario
    {
        return $this->codProduto;
    }

    public function setcodProduto($codProduto) //atribui um valor dentro do atributo da classe
    {
        $this->codProduto = $codProduto;
    }




    public function getDescricao()
    {
        return $this->descricao;
    }
    public function setDescricao($descricao)
    {
        $this->descricao = $descricao;
    }



    public function getValor()
    {
        return $this->valor;
    }
    public function setValor($valor)
    {
        $this->valor = $valor;
    }



    public function getQuant()
    {
        return $this->quant;
    }
    public function setQuant($quant)
    {
        $this->quant = $quant;
    }

    public function getPagto()
    {
        return $this->pagto;
    }
    public function setPagto($pagto)
    {
        $this->pagto = $pagto;
    }

    public function ValorFinal()
    {

        $calculo = $this->valor * $this->quant;
        if ($this->pagto == "credito") {
            $calculo = $calculo + ($calculo * 0.035);
        }
        return  $calculo;
    }
    public function Inserir(){
        include_once "conexao.php";

        try{
            $Comando=$conexao->prepare("insert into vendas (codProd, descricao, valor, quant, pag) values(?,?,?,?,?)");
            $Comando->bindParam(1,$this->codProduto);
            $Comando->bindParam(2,$this->descricao);
            $Comando->bindParam(3,$this->valor);
            $Comando->bindParam(4,$this->quant);
            $Comando->bindParam(5,$this->pagto);

            if ($Comando->execute()) {
                $Retorno = "Gravação com sucesso";
            }
        }
        catch (PDOException $Erro) {
            $Retorno = "Erro " . $Erro->getMessage();
        }
        return $Retorno;
    }
    // public function Apagar(){
    //     include_once "conexao.php";

    //     try{
    //         $Comando=$conexao->prepare("delete from vendas where codProd = ?");
    //         $Comando->bindParam(1,$this->codProduto);
    //         $Comando->bindParam(2,$this->descricao);
    //         $Comando->bindParam(3,$this->valor);
    //         $Comando->bindParam(4,$this->quant);
    //         $Comando->bindParam(5,$this->pagto);

    //         if ($Comando->execute()) {
    //             $Retorno = "Linha deletada";
    //         }
    //     }
    //     catch (PDOException $Erro) {
    //         $Retorno = "Erro " . $Erro->getMessage();
    //     }
    //     return $Retorno;
    // }
}
