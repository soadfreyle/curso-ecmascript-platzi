import getData from "./api.js";

function solution() {
    return getData()
    .then(response => console.log(response)) // cuando entre en el resolve 
    .catch(err => console.log(err))
    
}

solution();


