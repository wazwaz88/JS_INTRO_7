



const product1 = (a, b) => a * b;

function product2(a, b) {
    return a * b;
}


const product3 = function(a, b) {
    return a * b;
}

console.log(product1(3, 5));
console.log(product1(2, 0));
console.log(product1(4, 3));



function fizzBuzz1(a) {
    if(a % 15 === 0) console.log("FizzBuzz");
    else if(a % 3 === 0) console.log("Fizz");
    else if(a % 5 === 0) console.log("Buzz");
    else console.log(a);
}



const fizzBuzz2 = function(a) {
    if(a % 15 === 0) console.log("FizzBuzz");
    else if(a % 3 === 0) console.log("Fizz");
    else if(a % 5 === 0) console.log("Buzz");
    else console.log(a);
}


const fizzBuzz3 = a => {
    if(a % 15 === 0) console.log("FizzBuzz");
    else if(a % 3 === 0) console.log("Fizz");
    else if(a % 5 === 0) console.log("Buzz");
    else console.log(a);
}

