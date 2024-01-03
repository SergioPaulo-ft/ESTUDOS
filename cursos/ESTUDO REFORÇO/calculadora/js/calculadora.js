const resposta = document.querySelector("#resposta")
const btResp = document.querySelector("#bt-resp")
const input = document.querySelector("#numero")

input.addEventListener("keydown", (e) => {
    const inputValue = e.target.value
    const entrada ={
        soma: "+",
        subtração: "-",
        multiplicacao: "*",
        divisao: "/"
    } 

    if (e.key === "Enter") {
        for (const key in entrada) {
            if (inputValue.includes(entrada[key])) {
                console.log(`Operator found: ${entrada[key]}`);
                // Perform the desired action for the operator here
                break; // Exit the loop once a match is found
            }
        }
    }
})

btResp.addEventListener("click", (e) => {

})

