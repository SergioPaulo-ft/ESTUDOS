const addressForm =  document.querySelector("#address-form")
const cepInput = document.querySelector("#cep")
const addressInput = document.querySelector("#address")
const cityInput = document.querySelector("#city")
const neighborhoodInput = document.querySelector("#neighborhood")
const regionInput = document.querySelector("#region")
const formInputs = document.querySelectorAll("[data-input]")

const closeButton = document.querySelector("#close-message")

//Validate CEP input
cepInput.addEventListener("keypress", (e)=>{
    const onlyNumbers = /[0-9]/ //validando numero de 0 a 9
    const key = String.fromCharCode(e.keyCode) //validando apenas tipo char


    // allow only numbers
    if(!onlyNumbers.test(key)){
        e.preventDefault()
        return
    }

})

//Get address event
cepInput.addEventListener("keyup", (e)=>{
     //mostra todos os eventos valido dentro do cep
    console.log(e.target.value)

    // check if we have the corret lenght
    if(inputValue.length === 8){
        getAddress(inputValue)
    }
})

//Get customer address from API
const getAddress = async (cep) => {
    console.log(cep)
}

