class CardNews extends HTMLElement{

    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());

    }

    // Construindo os componentes...
    build(){

        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "Card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Annonymous");

        const titulo = document.createElement("h1");
        titulo.textContent = this.getAttribute("titulo");

        const texto = document.createElement("p");
        texto.textContent = this.getAttribute("texto");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(titulo);
        cardLeft.appendChild(texto);
    

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const image = document.createElement("img");
        image.src = this.getAttribute("imagem") || "Assets/defaul photo.jpeg";
        image.alt = "Foto de noticia";

        cardRight.appendChild(image);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot
    }

    // Estilizando os componentes..
    style(){

        const style = document.createElement("style");
        style.textContent = `

                *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Segoe UI, sans-serif;
            }

            .Card{
                margin: 30px 0px 30px 0px;
                width: 80%;
                box-shadow: 1px 11px 26px 1px rgba(0,0,0,0.56);
            -webkit-box-shadow: 1px 11px 26px 1px rgba(0,0,0,0.56);
            -moz-box-shadow: 1px 11px 26px 1px rgba(0,0,0,0.56);
                border-radius:40px;
                background-color: rgb(46, 45, 45);
                color: white;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            .card_left{
                display: flex;
                flex-direction: column; 
                justify-content: center;
                padding-left: 15px;
            }

            .card_left > span{
                padding-left: 20px;
                padding-top: 20px;
            }

            .card_left > h1{
                padding-top: 15px;
               
            }

            .card_left > p{
                color: gray;
            }
                
            .card_right > img{
                width: 50%;
            }
        `;

        return style;

    }
}

customElements.define('card-news', CardNews);