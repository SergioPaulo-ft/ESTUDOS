const arr = [1,5,10,"Ola",true]

let sohNumeros = arr.some(function(el){  
    //some = porta OR, every = porta AND
    return typeof el === "number" 
})

/*arr.filter(function(el,i,_arr){
    //nao altera a array original
    console.log(el)
    console.log(i)
    console.log(_arr)
    return false
})*/

const arr1 = arr.filter(function(el,i,_arr){
    return typeof el === "number"
})

const arr2 = arr.forEach(function(el,i,arr){
    return el 
})

const arr3 = arr.map(function (el,i,_arr){
    return el*el //el²
})



