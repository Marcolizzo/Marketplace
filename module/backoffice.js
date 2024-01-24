import { postFetch } from "./API.js";

const addProduct = document.getElementById("addProduct")

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

addProduct.addEventListener("click", () => {
    const product = createProduct()
    console.log(product)
    postFetch(product)
})