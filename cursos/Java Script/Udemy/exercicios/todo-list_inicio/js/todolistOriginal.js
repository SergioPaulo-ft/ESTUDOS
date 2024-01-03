; (function () {
    "use strict"
    //ARMAZENANO DOCUMENTO EM VARRIAVEIS
    const itemInput = document.getElementById("item-input")//input
    const todoAddform = document.getElementById("todo-add")//formulario
    const ul = document.getElementById("todo-list")//ul
    //const lis = ul.getElementsByTagName("li")//li

    let arrTasks = [
        {
            name : "task 1",
            createAt: Date.now(),
            completed: false
        }
    ]
   

    /*function addEventLi(li) { //respodendo ao click do li
        li.addEventListener("click", function () {
            console.log(this)
        })
    }*/

    function generateLiTask(obj){
        const li = document.createElement("li") //cria o elemento
        const p = document.createElement("p")
        const checkButton = document.createElement("button")
        const editButton = document.createElement("i")
        const deleteButton = document.createElement("i")

        li.className = "todo-item" //da uma classe para o eloemento  
        checkButton.className = "button-check"
        checkButton.innerHTML = '<i class="fas fa-check displayNone"></i>'
        checkButton.setAttribute("data-action", "checkButton")

        li.appendChild(checkButton)
        p.className = "task-name"
        p.textContent = obj.name  // recebe obj "arrTasks"
        li.appendChild(p)

        editButton.className = "fas fa-edit"
        li.appendChild(editButton)

        const containerEdit = document.createElement("div")
        containerEdit.className = 'editContainer'
        const inputEdit = document.createElement("input")
        inputEdit.setAttribute("type", "text")
        inputEdit.className = "editInput"

        containerEdit.appendChild(inputEdit)
        const containerEditButton = document.createElement("button")
        containerEditButton.className = "editButton"
        containerEditButton.textContent = "Edit"
        containerEditButton.setAttribute("data-action", "containerEditButton")
        containerEdit.appendChild(containerEditButton)
        const containerCancelButton = document.createElement("button")
        containerCancelButton.className = "cancelButton"
        containerCancelButton.textContent = "Cancel"
        containerCancelButton.setAttribute("data-action", "containerCancelButton")

        containerEdit.appendChild(containerCancelButton)
        li.appendChild(containerEdit)

        deleteButton.className = "fas fa-trash-alt"
        deleteButton.setAttribute("data-action", "deleteButton")
        li.appendChild(deleteButton)

        //addEventLi(li)
        return li
    }

    function renderTasks(){ // atualiza a pagina
        ul.innerHTML = ""
        arrTasks.forEach(task => { // respondendo ao click do li
            ul.appendChild(generateLiTask(task)) // escreve "arrTasks" dentro da ul
        })
    }

    function addTask(task) { //cria o html da lista
        renderTasks()
        arrTasks.push({
            name : task,
            createAt: Date.now(),
            completed: false
        })
    }

    function clickedUl(e){
        console.log(e.target)
        console.log(e.target.getAttribute("data-action"))
    }

    todoAddform.addEventListener("submit", function (e) {
        e.preventDefault()
        console.log(itemInput.value)
        addTask(itemInput.value) //ativa lista /"task" recebe "itemInput.value"
        itemInput.value = "" //limpa input
        itemInput.focus()
    });   // ; É IMPORTANTE

    ul.addEventListener("click", clickedUl)

    renderTasks()
})()

/*

*/ 