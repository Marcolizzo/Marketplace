import { createCard, createBtnDetails, createBtnEdit, createBtnDelete } from "./components.js";
import { getFetch, postFetch } from "./fetch.js";

export function dispalyCardsIndex(products) {
    products.forEach(product => {
        createCard(product)
        createBtnDetails(product)
    });
}
export function dispalyCardsBackoffice(products) {
    const prodContainer = document.querySelector(".prod-container")
    prodContainer.innerHTML = ''
    products.forEach(product => {
        createCard(product)
        createBtnEdit(product)
        createBtnDelete(product)
    });
}

export function searchProduct() {
    const inputSearch = document.getElementById('inputSearch')
    const cards = document.querySelectorAll('.card')
    console.log(inputSearch.value)
    cards.forEach((card) => {
        const title = card.querySelector('.card-title').innerText.toLowerCase()
        const brand = card.querySelector('.brand').innerText.toLowerCase()
        console.log(brand)
        if ((title.includes(inputSearch.value)) || (brand.includes(inputSearch.value))) {
            card.style.display = 'block'
        } else {
            card.style.display = 'none'
        }
    })
    inputSearch.value = ''
}

export function checkIfInputsAreEmpty(name, description, brand, imageUrl, price) {
    const inputs = [name, description, brand, imageUrl, price]
    inputs.forEach((input) => {
        input.addEventListener("keyup", () => {
            if (
                (name.value !== "") &&
                (description.value !== "") &&
                (brand.value !== "") &&
                (imageUrl.value !== "") &&
                (price.value !== "")
            ) {
                activateBtn(name, description, brand, imageUrl, price)
            }
        })
    })
}

export function activateBtn(name, description, brand, imageUrl, price) {
    const btnAddNewProduct = document.getElementById('addNewProduct')
    btnAddNewProduct.disabled = false

    btnAddNewProduct.onclick = () => {
        addNewProduct(name, description, brand, imageUrl, price)
        const inputs = [name, description, brand, imageUrl, price]
        inputs.forEach((input) => {
            input.value = ""
        })
    }
}

export async function addNewProduct(NewName, NewDescription, NewBrand, NewImageUrl, NewPrice) {
    let product = {
        name: NewName.value,
        description: NewDescription.value,
        brand: NewBrand.value,
        imageUrl: NewImageUrl.value,
        price: NewPrice.value
    }

    postFetch(product)
    let products = await getFetch()
    dispalyCardsBackoffice(products)

}