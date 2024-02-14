class Cardnews extends HTMLElement{
  constructor(){
    super();

    const shadow = this.attachShadow({mode: "open"});
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build(){
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class","card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class","card__left");

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class","card__right");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url")

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content")

    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo") || "assets/img/user-default.jpg"
    newsImage.alt = "texto da noticia"
    
    
    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    return componentRoot;
  }

  styles(){
    const style = document.createElement("style");
    style.textContent = `
    .container{
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-size: 18px;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      max-width: 900px;
      background-color: azure;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  
  .card__left{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 15px;
  }
  .card__left span{
      margin-bottom: 15px;
      color: gray;
  }
  
  .card__left a{
      text-decoration: none;
      color: black;
      margin-bottom: 10px;
      font-weight: bold;
  }
  
  .card__left p{
      color: gray;
  }
  .card{
      display: flex;
  }
  
  
    `
    return style
  }
}

customElements.define("card-news", Cardnews);