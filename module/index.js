import { products } from "./products.js";

const container = document.querySelector(".container")

products.forEach((product) => {
    container.innerHTML += `
    <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4 text-center my-4">
      <img src="${product.imageUrl}" class="img-fluid rounded-start" alt="cover">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text">${product.brand}</p>
        <p class="card-text">${product.price}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>`
})