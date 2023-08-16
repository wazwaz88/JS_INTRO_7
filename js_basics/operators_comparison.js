

let num1 = 3, num2 = 5, num3 = 3, num4 = "3", num5 = "5";
console.log(num1 == num2); // false
console.log(num1 == num3); // true
console.log(num1 == num4); // true
console.log(num1 === num4); // false strict comparison


console.log(num1 != num3); // false
console.log(num1 !== num3); // false


console.log(num2 > num5); // false. interpret it. just put values and compare and disregard data type.
console.log(num1 <= num3); // true


console.log(num1 + num5 < 2 * num4); // false
console.log(num4 * num5 != num3); // true
console.log(typeof (num4 * num5)); // number


console.log("abc" * "5"); // Nan - Not a Number
console.log(typeof NaN); // number


console.log("3" + "5" < 20); // false 35 < 20
console.log("3" * "5" + 10 === 25); // 15 + 10 === 25/ 25 === 25


console.log((10 >= 10) < 20); // true has value of 1. false has value of 0.


console.log(true + 10); // 11
console.log(false + 10); // 10

console.log(null + 10); // 10. null = 0.
console.log(null * 10); // 0. null = 0.
console.log("" + 10); // 10. empty string = 0
console.log(undefined + 10); // Nan. undefined has no meaning
console.log(NaN + 10); // Nan. 

console.log("Hello" + 10); // Hello10


console.log("5" % "2" === "1"); // false. the left side becomes a number data type while the right side stays as a string data type.
console.log("5" % "2" == "1"); // true. same value, different data type

