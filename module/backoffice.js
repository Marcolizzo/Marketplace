import { postFetch } from "./fetch.js";
import { backofficeHtml } from "./components.js";
import { getFetch, getFetchById, updateProd, deleteProd } from "./fetch.js";


window.addEventListener("DOMContentLoaded", init)
async function init() {
    let products = await getFetch()
    const list = document.querySelector(".list")
    products.forEach(product => {
        list.innerHTML += backofficeHtml(product)
    });
    eventHandler()
}

function eventHandler() {
    // Add Product
    const addProduct = document.getElementById("addProduct")
    addProduct.addEventListener("click", () => {
        const product = createProduct()
        postFetch(product)
        createNewList()
    })

    // Delete Product
    const btnDelete = document.querySelectorAll(".btnDelete")
    btnDelete.forEach((btn) => {
        btn.addEventListener("click", (ev) => {
            const id = ev.target.closest(".card").id
            deleteProd(id)
            createNewList()
        })
    })

    // Edit Product
    const btnEdit = document.querySelectorAll(".btnEdit")
    btnEdit.forEach((btn) => {
        btn.addEventListener("click", (ev) => {
            const id = ev.target.closest(".card").id
            editProduct(id)
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

async function editProduct(id) {
    let product = await getFetchById(id)
    let modalName = document.getElementById("modal-name")
    let modalDescription = document.getElementById("modal-description")
    let modalBrand = document.getElementById("modal-brand")
    let modalImageUrl = document.getElementById("modal-imageUrl")
    let modalPrice = document.getElementById("modal-price")

    modalName.value = product.name
    modalDescription.value = product.description
    modalBrand.value = product.brand
    modalImageUrl.value = product.imageUrl
    modalPrice.value = product.price

    // const modalElement = document.getElementById("modal")
    // const modal = new bootstrap.Modal(modalElement)
    // modal.show()


    const btnUpdate = document.getElementById("btnUpdate")
    btnUpdate.addEventListener("click", async () => {
        const editedProduct = {
            name: modalName.value,
            description: modalDescription.value,
            brand: modalBrand.value,
            imageUrl: modalImageUrl.value,
            price: modalPrice.value
        };
        updateProd(id, editedProduct)
        // modal.hide()
        createNewList()
    })
}

async function createNewList() {
    let products = await getFetch()
    const list = document.querySelector(".list")
    list.innerHTML = ""
    products.forEach(product => {
        list.innerHTML += backofficeHtml(product)
    });
}