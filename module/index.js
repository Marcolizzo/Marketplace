// import { products } from "./ArrProducts.js";
import { displayProducts } from "./helper.js";
import { postFetch, getFetch } from "./API.js";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTk4MTMzZDQyNDc2YzAwMTg3NjUzYmQiLCJpYXQiOjE3MDYxMDcwOTYsImV4cCI6MTcwNzMxNjY5Nn0.ciDCplmBjKLyvjcqFPGB64Rv8u01qo_O8qbET7x8PjQ"
const url = "https://striveschool-api.herokuapp.com/api/product/"


window.addEventListener("DOMContentLoaded", init)
 async function init() {
  let products = await getFetch()
  displayProducts(products)
  console.log(products)
}

// async function deleteProd() {
//   try{
//     const resp = await fetch(url + "65b1283f913f650018d090c9", {
//       method: 'DELETE',
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//   } catch (err){
//     console.error(err)
//   }
// }
// deleteProd()

// async function addProd(products) {
//   try {
//     products.map(async (product) => {
//       const resp = await fetch(url, {
//         method:'POST',
//         body: JSON.stringify(product),
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       })
//     })
//   } catch (err) {
//     console.error(err)
//   }
// }
// addProd(products)