


let name = "John";
let name2 = "Alex";

// console.log(`Hello ${name}`);
// console.log(`Hello ${name2}`);

sayHello(name);
sayHello(name2);
sayHello("Bali");

function sayHello(arg0){
    console.log(`Hello ${arg0}`);
}

sayHello("Egor", "Alex");
sayHello();


function sum(arg0, arg1){
    let sum = arg0 + arg1;
    return sum;
}

console.log(sum(1, 4));