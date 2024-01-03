<?php 

class clsMedia
{

    public $nota1;
    public $nota2;
    public $nota3;

    

    public function getnota1() //pega um valor do formulario
    {
        return $this->nota1;
    }
    
    public function setnota1($n1) //atribui um valor dentro do atributo da classe
    {
        $this->nota1 = $n1;
    }




    public function getnota2()
    {
        return $this->nota2;
    }
    public function setnota2($n2)
    {
        $this->nota2 = $n2;
    }



    public function getnota3()
    {
        return $this->nota3;
    }
    public function setnota3($n3)
    {
        $this->nota3 = $n3;
    }

    public function NotaMedia()
    {
        
        $mediaCalc = ($this->nota1+$this->nota2+$this->nota3)/3; 
        return  $mediaCalc;
    }

       
}
   