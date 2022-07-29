// Array
const cars = ["BMW" , "Audi" , "Scodio" , "Benz"];

// Ul , li and cotent
let li ='<ul>' + carlist() + '</ul>';

// function
function carlist(){
    // Array for each
    cars.forEach(car => {
        // write in document
        document.write('<li>'+car+'</li>')
    });
}