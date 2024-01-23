import { products } from "./ArrProducts.js"
const container = document.querySelector(".container")
container.innerHTML = `
<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4 text-center my-4">
      <img src="${products[0].imageUrl}" class="img-fluid rounded-start" alt="cover">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${products[0].title}</h5>
        <p class="card-text">${products[0].description}</p>
        <p class="card-text">${products[0].brand}</p>
        <p class="card-text">${products[0].price}</p>
        <a href="#" class="btn btn-primary">Details</a>
      </div>
    </div>
  </div>
</div>`;