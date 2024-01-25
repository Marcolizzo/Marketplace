const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTk4MTMzZDQyNDc2YzAwMTg3NjUzYmQiLCJpYXQiOjE3MDYxMDcwOTYsImV4cCI6MTcwNzMxNjY5Nn0.ciDCplmBjKLyvjcqFPGB64Rv8u01qo_O8qbET7x8PjQ"
const url = "https://striveschool-api.herokuapp.com/api/product/"

export async function getFetch() {
    try {
        const response = await fetch(url, {
            method: 'GET',
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

export async function getFetchById(id) {
    try {
        const response = await fetch(url + id, {
            method: 'GET',
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