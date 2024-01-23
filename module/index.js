import { products } from "./ArrProducts.js";
import { cardHtml } from "./components.js";



window.addEventListener("DOMContentLoaded", init)
function init() {
  displayProducts(products)
}

function displayProducts(products) {
  const container = document.querySelector(".container")
  products.forEach((product) => {
    container.innerHTML += cardHtml(product)
  })
}
