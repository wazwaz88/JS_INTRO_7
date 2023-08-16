
let fname = "John"; 
let age = 25; 
let address = "Chicago";

console.log("My name is " + fname);
console.log("Age is " + age);
console.log("The city is " + address);





// console.log(city); Reference Error. city is not defined



var lname; //declaration
console.log(lname);

lname = "Doe"; //assignment
console.log(lname);

lname = "Morgan"; //reassingment
console.log(lname);






//Differences between let and const

let street = "S River Rd";
console.log(street);

street = "N River Rd";
console.log(street);

// let allows you to reassing the value of the variable. const does not. it will cause a TypeError if you try to reassing a const variable. 

const street1 = "S River Rd";
console.log(street);

street1 = "N River Rd";
console.log(street);

