


const arr1 = [3, 4, 5];
const arr2 = ["Mouse", "Computer", "Desk"];

let arr1_str = arr1.toString();
let arr2_str =arr2.toString();


console.log(arr1);
console.log(arr2);

console.log(arr1_str);
console.log(arr2_str);

console.log(arr1_str.split(","));
console.log(arr2_str.split(","));


console.log(arr2_str.split(" | "));



let str = "Tech";

const arr = str.split("");

console.log(arr);



// let str2 = "1-2-3-4-5-6";
// let str2replaced = str2.replaceAll("-", " 000 ");

// console.log(str2replaced);


let str2 = "1-2-3-4-5-6";
let str3 = " 000 ";

let str2replaced = str2.replaceAll("-", str3);

console.log(str2replaced);




