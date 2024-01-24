// import { products } from "./ArrProducts.js";
import { displayProducts } from "./helper.js";
import { postFetch, getFetch } from "./API.js";

window.addEventListener("DOMContentLoaded", init)
async function init() {
  let products = await getFetch()
  displayProducts(products)
}

// TO DO
// Pagina details funzionante
// Backoffice (aggiungere, modificare ed eliminare prodotti)
// barra search funzionante