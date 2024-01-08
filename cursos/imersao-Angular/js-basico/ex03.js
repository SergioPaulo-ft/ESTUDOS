
function calcularCompra(precoEtiqueta,formaPagto){
    var calc = 0;
    if(formaPagto === 1){ 
        /*debito a vista -10%*/
        return calc = precoEtiqueta * 0.9;
    }else if(formaPagto === 2){ 
        /*pix ou dinheiro a vista -15%*/
        return calc = precoEtiqueta * 0.85;
    }else if(formaPagto === 3){ 
        /*duas vezes sem juros*/
        return calc = precoEtiqueta;
    }else if(formaPagto === 4){ 
        /*parcelado em mais de 2 vezes +10%*/
        return calc = precoEtiqueta * 1.1;
    }
}

(()=>{
    console.log(`${calcularCompra(100,2).toFixed(2)} R$`);
})()
