

function product3(arg0, arg1, arg2){
    let product = arg0 * arg1 * arg2;
    return product;
}

console.log(product3(-5, 6, 10)); // -300


// tricky
console.log(product3("2", "4", "6")); // 48
console.log(product3(null, "", false)); // 0


function isOdd(arg0){
    return arg0 % 2 !== 0;
}

console.log(isOdd(9));
console.log(isOdd(10));
console.log(isOdd(1.4));


function isEven(arg0){
    return arg0 % 2 === 0;
}
