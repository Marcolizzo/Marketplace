import { products } from "./ArrProducts.js"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTk4MTMzZDQyNDc2YzAwMTg3NjUzYmQiLCJpYXQiOjE3MDYwMzIzMzQsImV4cCI6MTcwNzI0MTkzNH0.oTN_2LpiPw_lmgcjn24mqjkHdDYUQIY27PwDFsq-tyw"
const url = "https://striveschool-api.herokuapp.com/api/product/"

async function postFetch() {

}

async function getFetch() {
    try {
        const response = await fetch(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data;
    } catch (err) {
        console.log("Error:" + err)
        alert(err)
    }
};