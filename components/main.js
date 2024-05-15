import { fetchAPI } from "../services/index.js";
//fecheo las categorias
const dataProducts = async (category = "all") => {
  const url =
    category === "all" ? "/products" : `/products/category/${category}`;
  const res = await fetchAPI(url);
  return res;
};

export function init() {
  class Main extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }

    async render(category = "all") {
      const shadow = this.shadowRoot; // Usar shadowRoot ya que el shadow DOM se crea una sola vez

      const style = document.createElement("style");
      style.innerHTML = `
        .container {
            display: grid;
            grid-auto-rows: minmax(22rem, auto);
            grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
            gap: 1rem;
            padding: 1rem;
            box-sizing: border-box;
        }
      `;

      const div = document.createElement("div");
      div.classList.add("root");

      div.innerHTML = `<div class="container">
            ${await dataProducts(category).then((data) => {
              return data
                .map((product) => {
                  return `<card-component
                    id="${product.id}"
                    image="${product.image}"
                    title="${product.title}"
                    price="${product.price}"
                    description="${product.description}"
                  ></card-component>`;
                })
                .join("");
            })}
          </div>`;

      shadow.innerHTML = ""; // limpiar el contenido anterior que se tenía antes de renderizar
      shadow.appendChild(style);
      shadow.appendChild(div);
    }

    //modificar el render
    async update(category) {
      this.render(category);
    }
  }

  customElements.define("main-component", Main);
}
