


let number;
let randomNumber;
let attempts = 0;


do {
    number = 2;
    randomNumber = Math.trunc(Math.random() * 50 + 1);

    console.log(randomNumber);

    attempts++;

}while(number !== randomNumber)


console.log(randomNumber);
console.log(attempts);