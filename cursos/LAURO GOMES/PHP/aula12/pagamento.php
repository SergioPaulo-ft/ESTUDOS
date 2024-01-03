
<?php

class pagamento
{    

    public $servicos;
   
    public function ValorFinal($servicos)
    {
        $total = 0;
        if($servicos == "consulta"){
         $total = 250;
        }
        if($servicos == "medicacao"){
            $total = 100;
        }
        return $total;
        
    }
}
