


const names = ["Yuliia", "Alex", "Bali", "Igor", "Ramez", "Aziz"];


console.log(names[names.indexOf("Igor")]);
console.log(names[names.indexOf("Aziz")].toUpperCase());





let r1 = Math.floor(Math.random() * (10)) + 1;
let r2 = Math.floor(Math.random() * (10)) + 1;
let r3 = Math.floor(Math.random() * (10)) + 1;
let r4 = Math.floor(Math.random() * (10)) + 1;
let r5 = Math.floor(Math.random() * (10)) + 1;

const randomNumbers = [r1, r2, r3, r4, r5];

console.log(randomNumbers);

console.log(randomNumbers[0]);
console.log(randomNumbers[randomNumbers.length - 1]);


console.log(`The average of the first and last element is ${(randomNumbers[randomNumbers.length - 1] + randomNumbers[0]) / 2}`);

