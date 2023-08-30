const car = {
    color: "red",
    year: 2023,
    make: "BMW",
    model: "X7"
}


console.log(car.color);
console.log(car.year);
console.log(car.make);
console.log(car.model);



const allKeys = Object.keys(car);

console.log(allKeys);


const allValues = Object.values(car);

console.log(allValues);


const allPairs = Object.entries(car);
console.log(allPairs);


for(const value of Object.values(car)){
    console.log(value);
}


for(const variable in car){
    console.log(car[variable]);
}