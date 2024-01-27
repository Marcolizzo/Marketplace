import { createCard, createBtnDetails, createBtnEdit, createBtnDelete } from "./components.js";
import { getFetch, postFetch, deleteFetch, editFetch } from "./fetch.js";

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
            const areInputsEmpty = inputs.some(input => input.value === "");
            if (!areInputsEmpty) {
                activateBtn(name, description, brand, imageUrl, price);
            } else {
                disableBtn()
            }
        })
    })
}

export function activateBtn(name, description, brand, imageUrl, price) {
    const btnAddNewProduct = document.getElementById('addNewProduct');
    const inputs = [name, description, brand, imageUrl, price];

    const areInputsEmpty = inputs.some(input => input.value === "");
    btnAddNewProduct.disabled = areInputsEmpty;

    if (!areInputsEmpty) {
        btnAddNewProduct.onclick = () => {
            addNewProduct(name, description, brand, imageUrl, price);
            inputs.forEach((input) => {
                input.value = ""
            });
            disableBtn();
        }
    } else {
        btnAddNewProduct.onclick = null;
    }
};

function disableBtn() {
    const btnAddNewProduct = document.getElementById('addNewProduct');
    btnAddNewProduct.disabled = true
    btnAddNewProduct.onclick = null
}

export async function addNewProduct(NewName, NewDescription, NewBrand, NewImageUrl, NewPrice) {
    let newProduct = {
        name: NewName.value,
        description: NewDescription.value,
        brand: NewBrand.value,
        imageUrl: NewImageUrl.value,
        price: NewPrice.value
    }

    const btnAddNewProduct = document.getElementById('addNewProduct')
    btnAddNewProduct.disabled = true

    await postFetch(newProduct)
    let products = await getFetch()
    dispalyCardsBackoffice(products)
}

export async function deleteProd(id) {
    await deleteFetch(id)
    let products = await getFetch()
    dispalyCardsBackoffice(products)
}

export async function editProduct(EditedName, EditedDescription, EditedBrand, EditedImageUrl, EditedPrice, id) {
    let editedProduct = {
        name: EditedName.value,
        description: EditedDescription.value,
        brand: EditedBrand.value,
        imageUrl: EditedImageUrl.value,
        price: EditedPrice.value
    }

    await editFetch(id, editedProduct)
    let products = await getFetch()
    dispalyCardsBackoffice(products)
}