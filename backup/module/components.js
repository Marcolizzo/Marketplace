export { cardHtml, detailsHtml, backofficeHtml }

function cardHtml(product) {
  let card =`
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4 text-center my-4">
          <img src="${product.imageUrl}" class="img-fluid rounded-start" alt="cover">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">${product.brand}</p>
            <p class="card-text">${product.price}$</p>
            <a href="./details.html?id=${product._id}" class="btn btn-primary">Details</a>
          </div>
        </div>
      </div>
    </div>`

  return card
};

function detailsHtml(product) {
  let card = `
  <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4 text-center my-4">
      <img src="${product.imageUrl}" class="img-fluid rounded-start" alt="cover">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text">${product.brand}</p>
        <p class="card-text">${product.price}</p>
      </div>
    </div>
  </div>
</div>`;

  return card
};

function backofficeHtml(product) {
  let card = `
  <div id="${product._id}" class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4 text-center my-4">
      <img src="${product.imageUrl}" class="img-fluid rounded-start" alt="cover">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text">${product.brand}</p>
        <p class="card-text">${product.price}$</p>
        <button class="btn btn-danger btnDelete">Detele</button>
        <button class="btn btn-primary btnEdit" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
      </div>
    </div>
  </div>
</div>`

  return card
};