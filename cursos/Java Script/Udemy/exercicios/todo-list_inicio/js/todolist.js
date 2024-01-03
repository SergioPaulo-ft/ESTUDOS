; (function () {
    "use strict"
    //ARMAZENANDO O DOM NAS VARIAVEIS
    const itemInput = document.getElementById("item-input")
    const todoAddForm = document.getElementById("todo-add")
    const ul = document.getElementById("todo-list")
    const lis = ul.getElementsByTagName("li")

    let arrTasks = [ //minha estrutura de dados arrTasks
        {
            name: "task 1",
            createAt: Date.now(),
            completed: false
        }
        
    ]
    // function addEventLi(li){
    //     li.addEventListener("click", function(){
    //         console.log(this)
    //     })
    // }
    function generateLiTasks(obj){ // criação de tags ul, p, li passando como parametro um (obj.name = taskObj.name =  arrTasks.name), que é uma variavel do meu  arrTasks
        const li = document.createElement("li")
        const p = document.createElement("p")
        const checkButton = document.createElement("button")
        const editButton = document.createElement("i")
        const deleteButton = document.createElement("i")

        li.className = "todo-item"

        checkButton.className = "button-check"
        checkButton.innerHTML = `<i class="fas fa-check displayNone"></i>`
        checkButton.setAttribute("data-action", "checkButton")
        li.appendChild(checkButton)

        p.className = "task-name"
        p.textContent = obj.name
        li.appendChild(p)

        editButton.className = "fas fa-edit"
        editButton.setAttribute("data-action", "editButton")
        li.appendChild(editButton)

        deleteButton.className = "fas fa-trash-alt"
        deleteButton.setAttribute("data-action", "deleteButton")
        li.appendChild(deleteButton)

        const containerEdit = document.createElement("div")
        containerEdit.className = "editContainer"
        
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

        li.appendChild(containerEdit)

        // addEventLi(li)
        return li
    }
    function renderTasks(){ //adiciona arrTasks dentro de uma li usando forEach
        ul.innerHTML = ""
        arrTasks.forEach(taskObj => {
            ul.appendChild(generateLiTasks(taskObj))
        });
    }
    function addTesk(task){ //adiciona um input.value dentro da arrTasks usando .push
        arrTasks.push(
            {
                name: task,
                createAt: Date.now(),
                completed: false
            }
        )
    }

    function clickedUl(e){
        const dataAction = e.target.getAttribute("data-action")
        console.log(e.target)
        console.log(e.target.getAttribute("data-action"))
        console.log(lis)

        if(!dataAction) return

        let currentLi = e.target
        while(currentLi.nodeName !=="LI"){
            currentLi = currentLi.parentElement
        }

        const currentLiIndex = [...lis].indexOf(currentLi)
        console.log(currentLiIndex)
        const actions = {
            editButton: function(){
                const editContainer = currentLi.querySelector(".editContainer")
                

                [...(ul.querySelectorAll(".editContainer"))].forEach( container =>{
                    container.removeAtribute("style")
                });
                editContainer.style.display = "flex";
            },
            deleteButton: function() {
                arrTasks.splice(currentLiIndex, 1)
                console.log(arrTasks)
                renderTasks()
                //currentLi.parentElement.removeChild(currentLi)
            }
        }
        
        if(actions[dataAction]){
            actions[dataAction]()
        }
        
    }

    todoAddForm.addEventListener("submit", function(e){
        e.preventDefault()
        console.log(itemInput.value)
        addTesk(itemInput.value)
        renderTasks()
        // ul.innerHTML += `
        // <li class="todo-item">
        //     <p class="task-name">${itemInput.value}</p>
        // </li>` 
        itemInput.value = ""
        itemInput.focus()
    });
    
    ul.addEventListener("click", clickedUl)
    
})()