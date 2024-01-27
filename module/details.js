import { createNavbar, createCard } from "./components.js";
import { getFetchById } from "./fetch.js"

// Details page initialization
window.addEventListener("DOMContentLoaded", init)
async function init() {
    const params = new URLSearchParams(location.search)
    const id = params.get('id')
    let product = await getFetchById(id)
    createNavbar()
    createCard(product)
}