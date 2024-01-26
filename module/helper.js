import { createCard, createBtnDetails, createBtnEdit, createBtnDelete } from "./components.js";

export function dispalyCardsIndex(products) {
    products.forEach(product => {
        createCard(product)
        createBtnDetails(product)
    });
}
export function dispalyCardsBackoffice(products) {
    products.forEach(product => {
        createCard(product)
        createBtnEdit(product)
        createBtnDelete(product)
    });
}
