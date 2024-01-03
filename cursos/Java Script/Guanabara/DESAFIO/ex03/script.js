function button(){
    let res = document.getElementById('list')
    let txt = document.getElementById('txtn')
    var n = Number(txt.value)
    var x = 0
    i = n * x
    res.innerHTML = ` `
   
  while(x<=10){
      res.innerHTML += `<ol><li>${n}x${x}=${i}</li></ol>`
      x=x+1
      i = n * x
  }
}