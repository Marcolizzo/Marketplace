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
    inputSearch.type = 'search'
    inputSearch.placeholder = 'Search'
    inputSearch.ariaLabel = 'Search'
    form.appendChild(inputSearch)

    const btnSearch = document.createElement('button')
    btnSearch.className = 'btn btn-outline-success'
    btnSearch.type = 'submit'
    btnSearch.textContent = 'Search'
    form.appendChild(btnSearch)
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
    brand.className = 'card-text'
    brand.textContent = product.brand
    cardBody.appendChild(brand)

    const price = document.createElement('p')
    price.className = 'card-text'
    price.textContent = product.price + '$'
    cardBody.appendChild(price)

    const container = document.querySelector(".container")
    container.appendChild(card)
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

export const createBtnAddProduct = () => {
    const container = document.querySelector(".container")
    const btnAddProduct = document.createElement('button')
    btnAddProduct.type = 'button'
    btnAddProduct.className = 'btn btn-success mb-5'
    btnAddProduct.textContent = 'Add a Product'

    container.appendChild(btnAddProduct)
}

export const createBtnEdit = (product) => {
    const cardBody = document.querySelectorAll(".card-body")
    const btnEdit = document.createElement('button')
    btnEdit.className = 'btn btn-primary me-3'
    btnEdit.textContent = 'Edit'

    cardBody.forEach((card) => {
        card.appendChild(btnEdit)
    })
}

export const createBtnDelete = (product) => {
    const cardBody = document.querySelectorAll(".card-body")
    const btnDelete = document.createElement('button')
    btnDelete.className = 'btn btn-danger'
    btnDelete.textContent = 'Delete'

    cardBody.forEach((card) => {
        card.appendChild(btnDelete)
    })
}