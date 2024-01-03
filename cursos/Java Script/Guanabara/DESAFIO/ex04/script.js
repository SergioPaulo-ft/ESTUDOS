function button(){
    var res = document.getElementById('res')
    var txt1 = document.getElementById('txt1')
    var txt2 = document.getElementById('txt2')
    var txt3 = document.getElementById('txt3')
    var i = Number(txt1.value)
    var f = Number(txt2.value)
    var s = Number(txt3.value)

    
    for(let c=i; c<=f ; c+=s){
        res.innerHTML += `${c}👌`
    }

    for(let c=i; c>=f ; c-=s){
        res.innerHTML += `${c}👌`
    }
  
}
