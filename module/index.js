import { createNavbar, createSearchbar } from "./components.js";
import { dispalyCardsIndex } from "./helper.js";
import { getFetch } from "./fetch.js";

window.addEventListener("DOMContentLoaded", init)
async function init() {
    let products = await getFetch()
    createNavbar()
    createSearchbar()
    dispalyCardsIndex(products)
}