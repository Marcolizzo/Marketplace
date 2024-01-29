import { createNavbar, createForm, createBtnAddProduct } from "./components.js";
import { dispalyCardsBackoffice } from "./helper.js";
import { getFetch } from "./fetch.js";

// Backoffice page initialization
window.addEventListener("DOMContentLoaded", init)
async function init() {
    let products = await getFetch()
    createNavbar()
    createForm()
    createBtnAddProduct()
    dispalyCardsBackoffice(products)
}