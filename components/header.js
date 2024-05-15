import { fetchAPI } from "../services/index.js";

const dataCategories = async () => {
  const res = await fetchAPI("/products/categories");
  return res;
};

export function init() {
  class Header extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    async render() {
      const shadow = this.attachShadow({ mode: "open" });

      const style = document.createElement("style");
      style.innerHTML = `
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        box-sizing: border-box;
      }
      
      .form {
        width: 100%;
      }

      .label {
        display: block;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        margin-bottom: 0.5rem;
        color: #333;
      }

      .input, .button {
        box-sizing: border-box;
        display: block;
        width: 100%;
        padding: 0.75rem;
        margin-bottom: 1rem;
        border: 2px solid #000;
        border-radius: 4px;
        font-family: 'Roboto', sans-serif;
      }

      .input {
        height: 3rem;
      }

      .button {
        background-color: #9CBBE9;
        color: #fff;
        font-weight: 500;
        font-size: 1.25rem;
        cursor: pointer;
        border: none;
        transition: background-color 0.3s ease;
      }

      .button:hover {
        background-color: #7da2d8;
      }

      @media (max-width: 600px) {
        .container {
          padding: 10px;
        }

        .label {
          font-size: 0.9rem;
        }

        .input, .button {
          padding: 0.5rem;
        }

        .button {
          font-size: 1rem;
        }
      }
      `;

      const div = document.createElement("div");
      div.classList.add("container");

      div.innerHTML = `
        <form class="form">
          <label class="label">Seleccione Categoría</label>
          <select class="input">
            <option value="all">Todos</option>
            ${await dataCategories().then((data) =>
              data
                .map(
                  (category) =>
                    `<option value="${category}">${category}</option>`
                )
                .join("")
            )}
          </select>
          <button class="button" type="submit">Ver</button>
        </form>
      `;
      /// form para seleccionar la categoria
      const form = div.querySelector("form");
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const select = form.querySelector("select");
        const category = select.value;

        const mainComponent = document.querySelector("main-component");
        if (mainComponent) {
          mainComponent.update(category); // Llamar a update con la categoría seleccionada
        }
      });

      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }

  customElements.define("header-component", Header);
}
