



let num1 = 5, num2 = 10.5;

console.log(num1);
console.log(num2);

console.log(num1 + num2); // 15.5
console.log(num1 * num2); // 52.5 
console.log(num1 - num2); // -5.5



let a = 2, b = 5, c = "10", d = "20";

console.log(a + b); // 7
console.log(c + d); // 1020
console.log(d / a); // 10

// NaN - Not a numhber operator
console.log(NaN); // NaN
console.log(typeof NaN); // number 

console.log("  " * 5); // 0
console.log("" * 5); // 0
console.log("Hello" * 5); // NaN
console.log("Hello" + NaN); // HelloNaN


console.log(0 / 0); // NaN
console.log(0 / 5); // 0
console.log(5 / 0); // Infinity


// Infinity & -Infinity
console.log(Infinity);
console.log(-Infinity);
console.log(typeof Infinity);
console.log(typeof Infinity);

console.log(Infinity + Infinity);
console.log(Infinity - Infinity);

// isNaN() function
console.log(isNaN(5)); // false
console.log(isNaN(10.5)); // false
console.log(isNaN("Hello")); // true

console.log(isNaN(true));
console.log(isNaN(true + 5));

let number = new Number(20); // you can make a number be an object. an object requires more storage than a primitive data type
console.log(typeof number);




// BigInt

let i1 = 12345678901234567890; // 20 digits here
let i2 = 12345678901234567890n;
let i3 = BigInt(12345678901234567890n);
let i4 = 1;


console.log(i1); // 12345678901234567000 not accurate
console.log(i2); // accurate but puts an n at the end.
console.log(i3);


//console.log(i2 + i4); // TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(Number(i2) + i4);
console.log(i2 + BigInt(i4));







