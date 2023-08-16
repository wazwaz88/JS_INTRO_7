

// Task-1

let random1 = Math.trunc(Math.random() * 51) * 5;

console.log("The random number * 5 = " + random1);



// Task-2

let random2 = Math.trunc((Math.random() * 10) + 1);
let random3 = Math.trunc((Math.random() * 10) + 1);

console.log(random2);
console.log(random3);


console.log("Min number = " + Math.min(random2, random3));
console.log("Max number = " + Math.max(random2, random3));
console.log("Difference = " + Math.abs(random2 - random3));



// Task-3

let random4 = Math.trunc((Math.random() * 51) + 50);

console.log("The random numher % 10 = " + (random4 % 10));




// Task-4

let r1 = Math.trunc((Math.random() * 10) + 1);
let r2 = Math.trunc((Math.random() * 10) + 1);
let r3 = Math.trunc((Math.random() * 10) + 1);
let r4 = Math.trunc((Math.random() * 10) + 1);
let r5 = Math.trunc((Math.random() * 10) + 1);

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log(r5);

r1 *= 5;
r2 *= 4;
r3 *= 3;
r4 *= 2;
r5 *= 1;

console.log(r1 + r2 + r3 + r4 + r5);



// Task-5

let ran1 = Math.trunc((Math.random() * 25) + 1);
let ran2 = Math.trunc((Math.random() * 25) + 26);
let ran3 = Math.trunc((Math.random() * 25) + 51);
let ran4 = Math.trunc((Math.random() * 25) + 76);


console.log(ran1);
console.log(ran2);
console.log(ran3);
console.log(ran4);


console.log("Difference of max and min = " + (ran4 - ran1));
console.log("Difference of second and third = " + (ran3 - ran2));
console.log("Average of all = " + ((ran1 + ran2 + ran3 + ran4) / 4));





