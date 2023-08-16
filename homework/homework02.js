

console.log("------Task-1--------");


let str1 = "5", str2 = "2";

let num1 = parseInt(str1), num2 = parseInt(str2);

console.log(`The sum of ${num1} and ${num2} is = ${num1 + num2}`);
console.log(`The product of ${num1} and ${num2} is = ${num1 * num2}`);
console.log(`The division of ${num1} and ${num2} is = ${num1 / num2}`);
console.log(`The subtraction of ${num1} and ${num2} is = ${num1 - num2}`);
console.log(`The remainder of ${num1} and ${num2} is = ${num1 % num2}`);
console.log(`The exponentiation of ${num1} and ${num2} is = ${num1 ** num2}`);




console.log("------Task-2--------");

let s1 = "200", s2 = "-50";

let n1 = parseInt(s1), n2 = parseInt(s2);


console.log(`The greatest value is = ${Math.max(n1, n2)}`);
console.log(`The smallest value is = ${Math.min(n1, n2)}`);
console.log(`The average is = ${(n1 + n2) / 2}`);
console.log(`The absolute difference is = ${Math.abs(n1 - n2)}`);



console.log("------Task-3--------");

let number1 = Math.trunc(Math.random() * 50 + 1);
let number2 = Math.trunc(Math.random() * 50 + 1);


console.log(`The absolute difference between numbers is = ${Math.abs(number1 - number2)}`);




console.log("------Task-4--------");

let random1 = Math.trunc(Math.random() * 50 + 1);
let random2 = Math.trunc(Math.random() * 50 + 1);
let random3 = Math.trunc(Math.random() * 50 + 1);
let random4 = Math.trunc(Math.random() * 50 + 1);
let random5 = Math.trunc(Math.random() * 50 + 1);


console.log(`The max value = ${Math.max(random1, random2, random3, random4, random5)}`);
console.log(`The min value = ${Math.min(random1, random2, random3, random4, random5)}`);


console.log("------Task-5--------");

let ran1 = Math.trunc(Math.random() * (100 - 50 + 1) + 50);
let ran2 = Math.trunc(Math.random() * (100 - 50 + 1) + 50);
let ran3 = Math.trunc(Math.random() * (100 - 50 + 1) + 50);

console.log(`The number 1 = ${ran1}`);
console.log(`The number 2 = ${ran2}`);
console.log(`The number 3 = ${ran3}`);
console.log(`The sum of numbers is = ${ran1 + ran2 + ran3}`);


console.log("------Task-6--------");


let r1 = Math.trunc(Math.random() * 100 + 1);
let r2 = Math.trunc(Math.random() * 100 + 1);
let r3 = Math.trunc(Math.random() * 100 + 1);

console.log(r1);
console.log(r2);
console.log(r3);

console.log(r1 > 25 && r2 && 25 && r3 > 25);



console.log("------Task-7--------");

let fName = "David";

console.log(`The length of the name is = ${fName.length}`);
console.log(`The first chracter in the name is = ${fName[0]}`);
console.log(`The last chracter in the name is = ${fName[fName.length - 1]}`);
console.log(`The first 3 chracters in the name is = ${fName.slice(0, 3)}`);
console.log(`The last 3 chracters in the name is = ${fName.slice(fName.length - 3)}`);

