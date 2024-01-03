
    
    let res = document.querySelector("#newsletterFeedback")

    function cadastrarEmail(){
        let email = document.getElementById("txtEmail").value 
        // input sempre usa .value 
        res.innerHTML = `O email ${email} foi cadastrado com sucesso`
    }