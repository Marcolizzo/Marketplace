// import { products } from "./ArrProducts.js";
import { displayProducts } from "../module/helper.js";
import { getFetch } from "../module/fetch.js";

window.addEventListener("DOMContentLoaded", init)
async function init() {
  let products = await getFetch()
  displayProducts(products)
}

// TO DO
// Pagina details funzionante x
// Backoffice (aggiungere, modificare ed eliminare prodotti) x
// barra search funzionante