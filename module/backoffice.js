import { postFetch } from "./fetch.js";
import { backofficeHtml } from "./components.js";
import { getFetch, deleteProd} from "./fetch.js";

window.addEventListener("DOMContentLoaded", init)
async function init() {
    let products = await getFetch()
    const container = document.querySelector(".container")
    products.forEach(product => {
        container.innerHTML += backofficeHtml(product)
    });
    eventHandler()
}

function eventHandler() {
    // Add Product
    const addProduct = document.getElementById("addProduct")
    addProduct.addEventListener("click", () => {
        const product = createProduct()
        console.log(product)
        postFetch(product)
    })

    // Delete Product
    const btnDelete = document.querySelectorAll(".btnDelete")
    btnDelete.forEach((btn)=>{
        btn.addEventListener("click", (ev)=>{
           const id = ev.target.closest(".card").id
           deleteProd(id)
        })
    })

    // Update Product
    const btnUpdate = document.querySelectorAll(".btnUpdate")
    btnUpdate.forEach((btn)=>{
        btn.addEventListener("click", (ev)=>{
            
        })
    })
}

function createProduct() {
    let prodName = document.getElementById("input-name").value
    const prodDescription = document.getElementById("input-description").value
    const prodBrand = document.getElementById("input-brand").value
    const prodImageUrl = document.getElementById("input-imageUrl").value
    const priceString = document.getElementById("input-price").value
    const prodPrice = parseFloat(priceString).toFixed(2)

    const product = {
        name: prodName,
        description: prodDescription,
        brand: prodBrand,
        imageUrl: prodImageUrl,
        price: prodPrice
    };
    return product
}
