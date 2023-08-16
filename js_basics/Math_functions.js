


let num1 = 5, num2 = 10, num3 = 7, num4 = -5, num5 = -8;

// -8, -5, 5, 7, 1


// finding max number
let maxNumber = Math.max(num1, num2, num3, num4, num5);

console.log(maxNumber); // 10


// finding min number
let minNumber = Math.min(num1, num2, num3, num4, num5);

console.log(minNumber); // -8

// The abs()
console.log(Math.abs(num4)); // 5
console.log(Math.abs(num5)); // 8

console.log(Math.abs(num1 - num2)); // 5
console.log(Math.abs(num1 * num5 - num4)); // 35


// Rounding numbers
console.log(Math.ceil(5.11)); // 6
console.log(Math.ceil(5.99)); // 6

console.log(Math.ceil(-5.11)); // -5
console.log(Math.ceil(-5.99)); // -5

console.log(Math.floor(5.11)); // 5
console.log(Math.floor(5.99)); // 5

console.log(Math.floor(-5.11)); // -6
console.log(Math.floor(-5.99)); // -6

console.log(Math.round(5.11)); // 5
console.log(Math.round(5.99)); // 6

console.log(Math.round(5.50)); // 6
console.log(Math.round(5.49)); // 5

// trunc and floor do not have same purpose. when negative numbers are analyzed the difference is apparent.
console.log(Math.trunc(5.11)); // 5
console.log(Math.trunc(5.99)); // 5


console.log(Math.trunc(-5.99)); // -5
console.log(Math.trunc(-5.11)); // -5


// pow() function
console.log(2 ** 5); // 32
console.log(Math.pow(2, 5)); // 32
console.log(Math.pow(3, 2)); // 9
console.log(3 ** 2); // 9


// sqrt() function
console.log(Math.sqrt(64)); // 8

// random() function
console.log(Math.random()); // gives you a random number from 0 to 1, not including 1. 0 - 0.9999999999999999999999...


// find a random number between 1 and 10, both included
console.log((Math.ceil(Math.random() * 10)));
console.log((Math.ceil(Math.random() * 10)));
console.log((Math.ceil(Math.random() * 10)));
console.log((Math.ceil(Math.random() * 10)));


// Homework: Come up with a way to generate a random number between 10 and 20

console.log((Math.trunc((Math.random() * 11) + 10)));
console.log((Math.trunc((Math.random() * 11) + 10)));
console.log((Math.trunc((Math.random() * 11) + 10)));
console.log((Math.trunc((Math.random() * 11) + 10)));
console.log((Math.trunc((Math.random() * 11) + 10)));
console.log((Math.trunc((Math.random() * 11) + 10)));
console.log((Math.trunc((Math.random() * 11) + 10)));



