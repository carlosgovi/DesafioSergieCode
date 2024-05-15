export function init() {
  class Card extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const style = document.createElement("style");
      style.innerHTML = `
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 10px;
          border: 2px solid #000;
          border-radius: 4px;
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          position: relative;
          background-color: white;
        }
        .container:hover {
            transform: translateY(-5px); 
        }
        .image {
          width: 100%;
          height: auto;
          
        }
        .text-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 10px;
        }
        .title {
            
            font-weight: 700; 
            font-size: 1.5rem; 
            color: #333; 
            margin-bottom: 0.5rem; 
            text-transform: uppercase; 
            letter-spacing: 0.02em; 
            position: relative; 
          }
          
          .title::after {
            content: '';
            display: block;
            width: 50%; 
            height: 3px; 
            background: #ff5722; 
            position: absolute;
            bottom: -0.3rem; 
            left: 0;
          }
          
        .price {
            font-weight: 700; 
            color: #ff5722; 
            font-size: 1.5rem; 
            margin: 0.5rem 0; 
            position: relative; 
            display: inline-block; 
            background: linear-gradient(45deg, #ff5722, #ff8a50); 
            -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; 
          }
          
          .price::before {
            content: '$'; 
            font-size: 1.2rem; 
            vertical-align: top; 
            margin-right: 0.2rem; 
            color: #ff8a50; 
            font-weight: 400; 
          }
          
          .price::after {
            content: ''; 
            display: block;
            width: 100%;
            height: 2px; 
            background: #ff8a50; 
            position: absolute; 
            bottom: -0.2rem; 
            left: 0;
          }
          
        .modal {
          display: none;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          border: 2px solid #000;
          border-radius: 4px;
          padding: 10px;
          z-index: 10;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          width: 100%;
        }
        .modal.visible {
          display: block;
        }
        .description {
          font-size: 0.8rem;
          color: #555;
          
        }
        `;

      const div = document.createElement("div");
      const id = this.getAttribute("id");
      const image = this.getAttribute("image");
      const title = this.getAttribute("title");
      const price = this.getAttribute("price");
      const description = this.getAttribute("description");

      div.classList.add("container");

      div.innerHTML = `
        <div>
          <img class="image" src="${image}" alt="${title}"/>
        </div>
        <div class="text-container">
          <h3 class="title">${title}</h3>
          <div class="price">${price}</div>
        </div>
        
        <div class="modal">
          <p class="description">${description}</p>
        </div>
        `;
      //agregar evento para mostrar el modal con la descripción
      div.addEventListener("mouseenter", () => {
        const modal = div.querySelector(".modal");
        modal.classList.add("visible");
      });

      div.addEventListener("mouseleave", () => {
        const modal = div.querySelector(".modal");
        modal.classList.remove("visible");
      });

      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }

  customElements.define("card-component", Card);
}
