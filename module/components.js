import { searchProduct, checkIfInputsAreEmpty, deleteProd } from "./helper.js";

export const createNavbar = () => {
    const navbar = document.createElement('nav');
    navbar.className = 'navbar bg-dark border-bottom border-body';
    navbar.setAttribute('data-bs-theme', 'dark')

    const containerFluid = document.createElement('div');
    containerFluid.className = 'container-fluid';
    navbar.appendChild(containerFluid);

    const containerLinks = document.createElement('div')
    containerLinks.className = 'd-flex align-items-center'
    containerFluid.appendChild(containerLinks)

    const home = document.createElement('a');
    home.className = 'navbar-brand';
    home.href = './index.html';
    home.textContent = 'Home';
    containerLinks.appendChild(home);

    const backoffice = document.createElement('a');
    backoffice.className = 'nav-link text-white';
    backoffice.href = './backoffice.html';
    backoffice.textContent = 'Backoffice';
    containerLinks.appendChild(backoffice);

    const navbarContainer = document.querySelector(".navbar-container");
    navbarContainer.appendChild(navbar);
}

export const createSearchbar = () => {
    const containerFluid = document.querySelector('.container-fluid')

    const form = document.createElement('form')
    form.className = 'd-flex'
    form.role = 'search'
    containerFluid.appendChild(form)

    const inputSearch = document.createElement('input')
    inputSearch.className = 'form-control me-2'
    inputSearch.id = 'inputSearch'
    inputSearch.type = 'search'
    inputSearch.placeholder = 'Search'
    inputSearch.ariaLabel = 'Search'
    form.appendChild(inputSearch)

    const btnSearch = document.createElement('button')
    btnSearch.className = 'btn btn-outline-success'
    btnSearch.type = 'button'
    btnSearch.textContent = 'Search'
    form.appendChild(btnSearch)

    btnSearch.onclick = () => {
        searchProduct()
    }
}

export const createCard = (product) => {
    const card = document.createElement('div')
    card.className = 'card mb-3'

    const row = document.createElement('div')
    row.className = 'row g-0'
    card.appendChild(row)

    const colImg = document.createElement('div')
    colImg.className = 'col-md-4 text-center my-4'
    row.appendChild(colImg)

    const img = document.createElement('img')
    img.className = 'img-fluid rounded-start'
    img.src = product.imageUrl
    img.alt = product.className
    img.style = 'max-height: 18rem;'
    colImg.appendChild(img)

    const colInfo = document.createElement('div')
    colInfo.className = 'col-md-8'
    row.appendChild(colInfo)

    const cardBody = document.createElement('div')
    cardBody.className = 'card-body'
    colInfo.appendChild(cardBody)

    const title = document.createElement('h5')
    title.className = 'card-title'
    title.textContent = product.name
    cardBody.appendChild(title)

    const description = document.createElement('p')
    description.className = 'card-text'
    description.textContent = product.description
    cardBody.appendChild(description)

    const brand = document.createElement('p')
    brand.className = 'card-text brand'
    brand.textContent = product.brand
    cardBody.appendChild(brand)

    const price = document.createElement('p')
    price.className = 'card-text'
    price.textContent = product.price.toFixed(2) + '$'
    cardBody.appendChild(price)

    const prodContainer = document.querySelector(".prod-container")
    prodContainer.appendChild(card)
}

export const createBtnDetails = (product) => {
    const cardBody = document.querySelectorAll(".card-body")
    const btnDetails = document.createElement('a')
    btnDetails.className = 'btn btn-primary'
    btnDetails.textContent = 'Details'
    btnDetails.href = `./details.html?id=${product._id}`

    cardBody.forEach((card) => {
        card.appendChild(btnDetails)
    })
}

export const createForm = () => {
    const formContainer = document.querySelector(".form-container")
    // INPUTS
    // NAME
    const inputGroupName = document.createElement('div')
    inputGroupName.className = 'input-group'
    formContainer.appendChild(inputGroupName)

    const spanName = document.createElement('span')
    spanName.className = 'input-group-text'
    spanName.textContent = 'Name'
    spanName.style = 'width: 100px'
    inputGroupName.appendChild(spanName)

    const inputName = document.createElement('input')
    inputName.className = 'form-control'
    inputName.type = 'text'
    inputName.placeholder = 'Name'
    inputName.ariaLabel = 'Name'
    inputName.setAttribute('aria-describedby', 'addon-wrapping')
    inputGroupName.appendChild(inputName)
    // DESCRIPTION
    const inputGroupDescription = document.createElement('div')
    inputGroupDescription.className = 'input-group'
    formContainer.appendChild(inputGroupDescription)

    const spanDescription = document.createElement('span')
    spanDescription.className = 'input-group-text'
    spanDescription.textContent = 'Description'
    spanDescription.style = 'width: 100px'
    inputGroupDescription.appendChild(spanDescription)

    const inputDescription = document.createElement('textarea')
    inputDescription.className = 'form-control'
    inputDescription.placeholder = 'Description'
    inputDescription.ariaLabel = 'Description'
    inputDescription.setAttribute('aria-describedby', 'addon-wrapping')
    inputGroupDescription.appendChild(inputDescription)

    // BRAND
    const inputGroupBrand = document.createElement('div')
    inputGroupBrand.className = 'input-group'
    formContainer.appendChild(inputGroupBrand)

    const spanBrand = document.createElement('span')
    spanBrand.className = 'input-group-text'
    spanBrand.textContent = 'Brand'
    spanBrand.style = 'width: 100px'
    inputGroupBrand.appendChild(spanBrand)

    const inputBrand = document.createElement('input')
    inputBrand.className = 'form-control'
    inputBrand.type = 'text'
    inputBrand.placeholder = 'Brand'
    inputBrand.ariaLabel = 'Brand'
    inputBrand.setAttribute('aria-describedby', 'addon-wrapping')
    inputGroupBrand.appendChild(inputBrand)

    // URL IMAGE
    const inputGroupImageUrl = document.createElement('div')
    inputGroupImageUrl.className = 'input-group'
    formContainer.appendChild(inputGroupImageUrl)

    const spanImageUrl = document.createElement('span')
    spanImageUrl.className = 'input-group-text'
    spanImageUrl.textContent = 'Image URL'
    spanImageUrl.style = 'width: 100px'
    inputGroupImageUrl.appendChild(spanImageUrl)

    const inputImageUrl = document.createElement('input')
    inputImageUrl.className = 'form-control'
    inputImageUrl.type = 'text'
    inputImageUrl.placeholder = 'Image URL'
    inputImageUrl.ariaLabel = 'Image URL'
    inputImageUrl.setAttribute('aria-describedby', 'addon-wrapping')
    inputGroupImageUrl.appendChild(inputImageUrl)

    // PRICE
    const inputGroupPrice = document.createElement('div')
    inputGroupPrice.className = 'input-group'
    formContainer.appendChild(inputGroupPrice)

    const spanPrice = document.createElement('span')
    spanPrice.className = 'input-group-text'
    spanPrice.textContent = 'Price'
    spanPrice.style = 'width: 100px'
    inputGroupPrice.appendChild(spanPrice)

    const inputPrice = document.createElement('input')
    inputPrice.className = 'form-control'
    inputPrice.type = 'number'
    inputPrice.placeholder = 'Price'
    inputPrice.ariaLabel = 'Price'
    inputPrice.setAttribute('aria-describedby', 'addon-wrapping')
    inputGroupPrice.appendChild(inputPrice)
    // END INPUTS

    checkIfInputsAreEmpty(inputName, inputDescription, inputBrand, inputImageUrl, inputPrice)
}

export const createBtnAddProduct = () => {
    const formContainer = document.querySelector(".form-container")
    const btnAddProduct = document.createElement('button')
    btnAddProduct.type = 'button'
    btnAddProduct.className = 'btn btn-success mb-5'
    btnAddProduct.id = 'addNewProduct'
    btnAddProduct.textContent = 'Add new Product'
    btnAddProduct.style = 'width: 180px'
    btnAddProduct.disabled = true

    formContainer.appendChild(btnAddProduct)
}

export const createBtnEdit = (product) => {
    const cardBody = document.querySelectorAll(".card-body")
    const btnEdit = document.createElement('button')
    btnEdit.className = 'btn btn-primary me-3'
    btnEdit.textContent = 'Edit'

    cardBody.forEach((card) => {
        card.appendChild(btnEdit)
    })

    btnEdit.onclick = () => {
        createModal(product)
        const modalElement = document.getElementById('editModal')
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    }
}

export const createBtnDelete = (product) => {
    const cardBody = document.querySelectorAll(".card-body")
    const btnDelete = document.createElement('button')
    btnDelete.className = 'btn btn-danger'
    btnDelete.textContent = 'Delete'

    cardBody.forEach((card) => {
        card.appendChild(btnDelete)
    })

    btnDelete.onclick = () => {
        deleteProd(product._id)
    }
}

export const createModal = (product) => {
    const modalContainer = document.querySelector('.modal-container')
    modalContainer.innerHTML = ''

    const modalDiv = document.createElement('div')
    modalDiv.className = 'modal fade'
    modalDiv.id = 'editModal'
    modalDiv.setAttribute(
        'data-bs-backdrop', 'static',
        'data-bs-keyboard', 'false',
        'tabindex', '-1',
        'aria-labelledby', 'staticBackdropLabel',
        'aria-hidden', 'true'
    )

    const modalDialog = document.createElement('div')
    modalDialog.className = 'modal-dialog'
    modalDiv.appendChild(modalDialog)

    const modalContent = document.createElement('div')
    modalContent.className = 'modal-content'
    modalDialog.appendChild(modalContent)

    const modalHeader = document.createElement('div')
    modalHeader.className = 'modal-header'
    modalContent.appendChild(modalHeader)

    const modalTitle = document.createElement('h1')
    modalTitle.className = 'modal-title fs-5'
    modalTitle.id = 'staticBackdropLabel'
    modalTitle.textContent = 'Edit Product'
    modalHeader.appendChild(modalTitle)

    const btnCloseUp = document.createElement('button')
    btnCloseUp.className = 'btn-close'
    btnCloseUp.type = 'button'
    btnCloseUp.ariaLabel = 'Close'
    btnCloseUp.setAttribute('data-bs-dismiss', 'modal')
    modalHeader.appendChild(btnCloseUp)

    const modalBody = document.createElement('div')
    modalBody.className = 'modal-body d-flex flex-column gap-2'
    modalContent.appendChild(modalBody)

    // INPUTS
    // NAME
    const inputGroupName = document.createElement('div')
    inputGroupName.className = 'input-group'
    modalBody.appendChild(inputGroupName)

    const spanName = document.createElement('span')
    spanName.className = 'input-group-text'
    spanName.textContent = 'Name'
    spanName.style = 'width: 100px'
    inputGroupName.appendChild(spanName)

    const inputName = document.createElement('input')
    inputName.className = 'form-control'
    inputName.type = 'text'
    inputName.placeholder = 'Name'
    inputName.ariaLabel = 'Name'
    inputName.setAttribute('aria-describedby', 'addon-wrapping')
    inputGroupName.appendChild(inputName)
    inputName.value = product.name
    // DESCRIPTION
    const inputGroupDescription = document.createElement('div')
    inputGroupDescription.className = 'input-group'
    modalBody.appendChild(inputGroupDescription)

    const spanDescription = document.createElement('span')
    spanDescription.className = 'input-group-text'
    spanDescription.textContent = 'Description'
    spanDescription.style = 'width: 100px'
    inputGroupDescription.appendChild(spanDescription)

    const inputDescription = document.createElement('textarea')
    inputDescription.className = 'form-control'
    inputDescription.placeholder = 'Description'
    inputDescription.ariaLabel = 'Description'
    inputDescription.setAttribute('aria-describedby', 'addon-wrapping')
    inputGroupDescription.appendChild(inputDescription)
    inputDescription.value = product.description

    // BRAND
    const inputGroupBrand = document.createElement('div')
    inputGroupBrand.className = 'input-group'
    modalBody.appendChild(inputGroupBrand)

    const spanBrand = document.createElement('span')
    spanBrand.className = 'input-group-text'
    spanBrand.textContent = 'Brand'
    spanBrand.style = 'width: 100px'
    inputGroupBrand.appendChild(spanBrand)

    const inputBrand = document.createElement('input')
    inputBrand.className = 'form-control'
    inputBrand.type = 'text'
    inputBrand.placeholder = 'Brand'
    inputBrand.ariaLabel = 'Brand'
    inputBrand.setAttribute('aria-describedby', 'addon-wrapping')
    inputGroupBrand.appendChild(inputBrand)
    inputBrand.value = product.brand

    // URL IMAGE
    const inputGroupImageUrl = document.createElement('div')
    inputGroupImageUrl.className = 'input-group'
    modalBody.appendChild(inputGroupImageUrl)

    const spanImageUrl = document.createElement('span')
    spanImageUrl.className = 'input-group-text'
    spanImageUrl.textContent = 'Image URL'
    spanImageUrl.style = 'width: 100px'
    inputGroupImageUrl.appendChild(spanImageUrl)

    const inputImageUrl = document.createElement('input')
    inputImageUrl.className = 'form-control'
    inputImageUrl.type = 'text'
    inputImageUrl.placeholder = 'Image URL'
    inputImageUrl.ariaLabel = 'Image URL'
    inputImageUrl.setAttribute('aria-describedby', 'addon-wrapping')
    inputGroupImageUrl.appendChild(inputImageUrl)
    inputImageUrl.value = product.imageUrl

    // PRICE
    const inputGroupPrice = document.createElement('div')
    inputGroupPrice.className = 'input-group'
    modalBody.appendChild(inputGroupPrice)

    const spanPrice = document.createElement('span')
    spanPrice.className = 'input-group-text'
    spanPrice.textContent = 'Price'
    spanPrice.style = 'width: 100px'
    inputGroupPrice.appendChild(spanPrice)

    const inputPrice = document.createElement('input')
    inputPrice.className = 'form-control'
    inputPrice.type = 'number'
    inputPrice.placeholder = 'Price'
    inputPrice.ariaLabel = 'Price'
    inputPrice.setAttribute('aria-describedby', 'addon-wrapping')
    inputGroupPrice.appendChild(inputPrice)
    inputPrice.value = product.price.toFixed(2)
    // END INPUTS

    const modalFooter = document.createElement('div')
    modalFooter.className = 'modal-footer'
    modalContent.appendChild(modalFooter)

    const btnCloseDown = document.createElement('button')
    btnCloseDown.className = 'btn btn-danger'
    btnCloseDown.type = 'button'
    btnCloseDown.setAttribute('data-bs-dismiss', 'modal')
    btnCloseDown.textContent = 'Close'
    modalFooter.appendChild(btnCloseDown)

    const btnConfirm = document.createElement('button')
    btnConfirm.className = 'btn btn-success'
    btnConfirm.type = 'button'
    btnConfirm.setAttribute('data-bs-dismiss', 'modal')
    btnConfirm.textContent = 'Confirm'
    modalFooter.appendChild(btnConfirm)

    // btnConfirm.onclick = () => editProduct(product)

    modalContainer.appendChild(modalDiv)
}