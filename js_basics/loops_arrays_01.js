

const names = ["John", "Max", "Alex", "Jane"];

for(let i = 0; i <= names.length - 1; i++) {
    console.log(names[i].toUpperCase());
}



for(let name of names){
    console.log(name.toUpperCase());
}




console.log("\n-----------------------------------------------\n");
const numbers1 = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
let countPos = 0;
for (const number of numbers1) {
    if (number > 0) countPos++;
}
console.log(`Number of postive numbers is = ${countPos}`);
console.log("\n-----------------------------------------------\n");
let countEven = 0;
for (const number of numbers1) {
    if (number % 2 === 0) countEven++;
}
console.log(`Number of even numbers is = ${countEven}`);




const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];



for(const number of numbers) {
    console.log(number * 5);
}



function multiply5(arg0) {
    return arg0 * 5;
}