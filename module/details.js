import { detailsHtml } from "./components.js";
import { getFetchById } from "./API.js";

window.addEventListener("DOMContentLoaded", init)
async function init() {
  const container = document.querySelector(".container")
  const params = new URLSearchParams(location.search)
  const id = params.get("id")
  let product = await getFetchById(id)
  container.innerHTML = detailsHtml(product)
}