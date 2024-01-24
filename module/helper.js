import { cardHtml } from "./components.js";
export {displayProducts}

function displayProducts(products) {
    const container = document.querySelector(".container")
    products.forEach((product) => {
      container.innerHTML += cardHtml(product)
    })
  }

function showDetails() {
    
}