

function isPositive(arg0){
    return arg0 > 0;
}

function isNegative(arg0){
    return !isPositive(arg0) && arg0 !== 0;
}


console.log(isPositive(0));
console.log(isPositive(1));
console.log(isPositive(-1));

console.log(isNegative(0));
console.log(isNegative(1));
console.log(isNegative(-1));


function getFirstChar(arg0){
    return arg0[0];
}

console.log(getFirstChar("12345"));


function getFirstLastChar(arg0){
    return arg0[0] + arg0[arg0.length - 1];
}

console.log(getFirstLastChar(""));


function getRandomNumber(arg0, arg1){

    return Math.trunc(Math.random() * (arg1 - arg0 + 1) + arg0);

}

console.log(getRandomNumber(5, 10));
console.log(getRandomNumber(5, 10));
console.log(getRandomNumber(5, 10));
console.log(getRandomNumber(5, 10));



function average5(arg0, arg1, arg2, arg3, arg4){
    return (arg0 + arg1 + arg2 + arg3 + arg4) / 5;
}