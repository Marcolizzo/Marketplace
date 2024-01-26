import { createNavbar, createForm, createBtnAddProduct } from "./components.js";
import { dispalyCardsBackoffice, activateBtn } from "./helper.js";
import { getFetch } from "./fetch.js";

window.addEventListener("DOMContentLoaded", init)
async function init() {
    let products = await getFetch()
    createNavbar()
    createForm()
    createBtnAddProduct()
    dispalyCardsBackoffice(products)
}