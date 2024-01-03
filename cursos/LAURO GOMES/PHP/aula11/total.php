<?php

class total
{

    private $codProduto;
    public $Descricao;
    public $Valor;
    public $Quant;
    public $Pagto;


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
        return $this->Descricao;
    }
    public function setDescricao($Descricao)
    {
        $this->Descricao = $Descricao;
    }



    public function getValor()
    {
        return $this->Valor;
    }
    public function setValor($Valor)
    {
        $this->Valor = $Valor;
    }



    public function getQuant()
    {
        return $this->Quant;
    }
    public function setQuant($Quant)
    {
        $this->Quant = $Quant;
    }

    public function getPagto()
    {
        return $this->Pagto;
    }
    public function setPagto($Pagto)
    {
        $this->Pagto = $Pagto;
    }

    public function ValorFinal()
    {

        $calculo = $this->Valor * $this->Quant;
        if ($this->Pagto == "credito") {
            $calculo = $calculo + ($calculo * 0.035);
        }
        return  $calculo;
    }
}
