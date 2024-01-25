import { createNavbar, createBtnAddProduct } from "./components.js";
import { dispalyCardsBackoffice } from "./helper.js";
import { getFetch } from "./fetch.js";

window.addEventListener("DOMContentLoaded", init)
async function init() {
    let products = await getFetch()
    createNavbar()
    createBtnAddProduct()
    dispalyCardsBackoffice(products)
}