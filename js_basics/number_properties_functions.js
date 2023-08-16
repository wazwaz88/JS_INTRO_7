

// Number properties
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// Number functions
console.log(123 + 2); // 125

console.log((123).toString() + 2); // 1232
console.log((123).toString() * 2); // 246

console.log((10.521).toFixed(2)); 
console.log((10.521).toFixed(1)); 
console.log((10.577).toFixed(2)); 
console.log((10.577).toFixed(1)); 


console.log(120000 / 52);
console.log((120000 / 52).toFixed(2));


console.log((1.23).toPrecision(2));
console.log((1.12345).toPrecision(3));

console.log((100.25).toFixed(1));
// console.log((100.25).toPrecision(2)); no point for this.



// Coverting other data types into numbers

console.log(true + 1); // 2
console.log(false + 1); // 1

console.log(Number(true) + 1); // 2
console.log(Number(false) + 1); // 1

console.log(Number("5") + 1); // 6
console.log(parseInt("5") + 1); // 6. ParseInt converts 5 into number 5.
console.log("5" + 1); 51

console.log(Number("5.5") + 1); // Number accepts both
console.log(parseInt("5.5") + 1); // Int refers to the whole number, it doesn't accept decimals. it does not round it, even if it is 5.9.
console.log(parseFloat("5.5") + 1); // Float accepts decimals

console.log(Number("Hello") + 1); // NaN
console.log(parseInt("Hello") + 1); // NaN
console.log(parseFloat("Hello") + 1); // NaN

console.log(Number("") + 1); // 1
console.log(parseInt("") + 1); // NaN
console.log(parseFloat("") + 1); // NaN

// Number is an Object, parseInt and parseFloat are methods/functions


console.log(Number(true) == 1); // true
console.log(Number(true) === 1); // true
console.log(typeof Number(true)); // number

console.log(parseInt(true)); // NaN
console.log(parseInt("123")); // 123
console.log(parseInt("true")); // NaN



// How to check if a number is integer or safe integer
// 1, 1000, "1", 09124659804365092384560983145634554234

let number1 = 1, number2 = 1000, number3 = "1", number4 = 9124659804365092384560983145634554234;


console.log(Number.isInteger(number1)); // true
console.log(Number.isInteger(number2)); // true
console.log(Number.isInteger(number3)); // false
console.log(Number.isInteger(number4)); // true

console.log(Number.isSafeInteger(number1)); // true
console.log(Number.isSafeInteger(number2)); // true
console.log(Number.isSafeInteger(number3)); // false
console.log(Number.isSafeInteger(number4)); // false