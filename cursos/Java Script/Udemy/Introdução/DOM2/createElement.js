const title = document.createElement("h1") //criou
const atributo = document.createAttribute("id") //atribui
atributo.value = "titulo" // id = "titulo"
title.setAttributeNode(atributo) // adiciona (id = "titulo") a h1
console.log(title)
// comumente  usado: element.setAtribute("title, "title inserido")