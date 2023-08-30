

console.log("-----Task-1-----\n");

for(let i = 1; i <= 100; i++) {
    if(i % 7 === 0) console.log(i);
}




console.log("\n-----Task-2-----\n");

for(let i = 1; i <= 50; i++) {
    if(i % 6 === 0) console.log(i);
}




console.log("\n-----Task-3-----\n");

for(let i = 100; i >= 50; i--) {
    if(i % 5 === 0) console.log(i);
}



console.log("\n-----Task-4-----\n");

for(let i = 0; i <= 7; i++) {
    console.log(`The square of ${i} is = ${Math.pow(i, 2)}`);
}



console.log("\n-----Task-5-----\n");

let sum = 0;

for(let i = 1; i <= 10; i++) {

    sum += i;

}


console.log(sum);


console.log("\n-----Task-6-----\n"); 

let factorial = 1;


for(let random = Math.trunc(Math.random() * 10 + 1); random >= 1; random--) {
    factorial *= random;
}

console.log(factorial);




console.log("\n-----Task-7-----\n");


let randomNumber;
let attempts = 0;


do {
    randomNumber = Math.trunc(Math.random() * 100 + 1);
    console.log(randomNumber);

    attempts++;

}while(randomNumber % 5 !== 0)


console.log(`The random number is ${randomNumber} and it took ${attempts} attempt/s to generate it.`)









console.log("\n-----Task-8-----\n");

const arr8 = ["Germany" , 'Argentina', 'Ukraine', "Romania"];

console.log(arr8);
console.log(arr8.sort());




console.log("\n-----Task-9-----\n");


const arr9 = ["Scooby Doo", "Snoopy", "Blue", "Pluto", "Dino", "Sparky"];


console.log(arr9);
console.log(arr9.includes("Pluto"));



console.log("\n-----Task-10-----\n");

const arr10 = ["Garfield", "Tom", "Sylvester", "Azrael"];

console.log(arr10.sort());

console.log(arr10.includes("Garfield") && arr10.includes("Felix"));



console.log("\n-----Task-11-----\n");

const arr11 = [10.5, 20.75, 70, 80, 15.75];

console.log(arr11);

for(let i = 0; i <= arr11.length - 1; i++) {
    console.log(arr11[i]);
}


console.log("\n-----Task-12-----\n");


const arr12 = ["Pen", "notebook", 'Book', 'paper', 'bag', 'pencil', 'Ruler'];


console.log(arr12);

let count1 = 0;
let count2 = 0;

for(let i = 0; i <= arr12.length - 1; i++) {

    if(arr12[i].toLowerCase().startsWith("b") || arr12[i].toLowerCase().startsWith("p")) count1++;

    if(arr12[i].toLowerCase().includes("book") || arr12[i].toLowerCase().includes("pen")) count2++;
}


console.log(`Elements starting with 'B' or 'P' = ${count1}`);
console.log(`Elements having with 'book' or 'pen' = ${count2}`);


console.log("\n-----Task-13-----\n");

const arr13 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];

console.log(arr13);

let count131 = 0, count132 = 0, count133 = 0;

for(let i = 0; i <= arr13.length - 1; i++) {

    if(arr13[i] > 10) count131++;
    else if(arr13[i] < 10) count132++;
    else count133++;


}


console.log(`Elements that are more than 10 = ${count131}`);
console.log(`Elements that are less than 10 = ${count132}`);
console.log(`Elements that are 10 = ${count133}`);




console.log("\n-----Task-14-----\n");

const arr141 = [5, 8, 13, 1, 2];
const arr142 = [9, 3, 67, 1, 0];
const arr143 = []


for(let i = 0; i <= arr141.length - 1; i++) {
    arr143.push(Math.max(arr141[i], arr142[i]));
}


console.log(arr141);
console.log(arr142);
console.log(arr143);




console.log("\n-----Task-15-----\n");


// i didnt know how to do this task

function firstDuplicate(arg0) {
    const arg0 = [];




}



console.log("\n-----Task-16-----\n");


// i didnt know how to do this task




console.log("\n-----Task-17-----\n");

// i didnt know how to do this task


function reverseStringWords(arg0) {

}


console.log("\n-----Task-18-----\n");

function getEvens(arg0, arg1){

    const arr = [];
    for(let i = Math.min(arg0, arg1); i <= Math.max(arg0, arg1); i++){
        if(i % 2 === 0) arr.push(i);
    }
    return arr;
}


console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));



console.log("\n-----Task-19-----\n");


function getMultipleOf5(arg0, arg1){

    const arr = [];
    for(let i = Math.min(arg0, arg1); i <= Math.max(arg0, arg1); i++){
        if(i % 5 === 0) arr.push(i);
    }
    return arr;


}


console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));	
console.log(getMultipleOf5(5, 5));	
console.log(getMultipleOf5(2, 4));	


console.log("\n-----Task-20-----\n");



function fizzBuzz(arg0, arg1){

    


}

