const cars1 = {
    Brand : "Toyota",
    Color : "RED"
}

const cars2 = {
    Brand : "Nissan",
    Color : "BLUE",
    Year : 2004
}
const cars3 = {...cars1,...cars2};
console.log(cars3);