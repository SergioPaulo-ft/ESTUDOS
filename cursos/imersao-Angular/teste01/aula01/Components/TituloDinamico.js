class TituloDinamico extends HTMLElement {
    constructor(){
        super();

        const shadown = this.attachShadow({mode:"open"})

        //base do component
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo")
        
        //estilizando component
        const style = document.createElement("style");
        style.textContent = `
            h1{
                color:red;
            }
        `

        //enviar para a shadow
        shadown.appendChild(componentRoot);
        shadown.appendChild(style);
    }
}

customElements.define("titulo-dinamico",TituloDinamico)