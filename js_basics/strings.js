


let fname = "John";
let lname = "Doe";

console.log(fname);
console.log(lname);







// String Template
let quote = `I
can
do
it`;


console.log(quote);


// Interpolation - embedding variables into string using backticks
let firstName = "Jane", lastName = "Doe";
console.log("The full name is = " + firstName + " " + lastName + ".");
console.log(`The full name is = ${firstName} ${lastName}.`);


let quantity = 5, price = 1.5;
console.log(`The total price is $${quantity * price}`);



// Primitive string vs Object string
let city1 = "Chicago"; // Chicago
let city2 = new String("Chicago"); // [String: 'Chicago']


console.log(city1); // string
console.log(city2); // object
// difference object allocates more memory than privitve data types. 

console.log(city1 == city2); // still same value, even if they are not presented the same way in console. city 2 is object. show different to indicate it is an object.
console.log(city1 === city2);