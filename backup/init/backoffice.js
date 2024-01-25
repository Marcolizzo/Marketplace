import { getFetch } from "../module/fetch.js";
import { eventHandler } from "../module/helper.js";
import { backofficeHtml } from "../module/components.js";

window.addEventListener("DOMContentLoaded", init)
async function init() {
    let products = await getFetch()
    const list = document.querySelector(".list")
    products.forEach(product => {
        list.innerHTML += backofficeHtml(product)
    });
    eventHandler()
}