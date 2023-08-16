

let name = "";

if(name[0] === "j" || name[0] === "J") {
    console.log("PARTY");
}
else {
    console.log("SORRY");
}

function getRandomNumber(arg0, arg1){

    return Math.trunc(Math.random() * (arg1 - arg0 + 1) + arg0);

}


let ran1 = getRandomNumber(-3, 3);

if(ran1 % 2 === 0) {
    console.log("EVEN");
} else {
    console.log("ODD");
}


if(ran1 > 0) {
    console.log("POSITIVE");
}else if (ran1 < 0) {
    console.log("NEGATIVE");
}else {
    console.log("ZERO");
}



function checkDLAge (arg0) {

    return arg0 >= 16;

}

console.log(checkDLAge(15));




let age = 64;


if(age >= 65){
    console.log("You can be retired!");
} else {
    if(age === 64){
        console.log("You have 1 year left to get retired!");
    }else {
        console.log(`You have ${65 - age} years left to get retired!`)
    }
}



let number;

console.log(number % 10 === 0);

let day;


day === 0 ? console.log("Today is Sunday") : 
day === 1 ? console.log("Today is Monday") : 
day === 2 ? console.log("Today is Tuesday") : 
day === 3 ? console.log("Today is Wednesday") : 
day === 4 ? console.log("Today is Thursday") : 
day === 5 ? console.log("Today is Friday") : 
day === 6 ? console.log("Today is Saturday") : console.error("This number does not represent any day of the week!");


day = 1;

switch (day) {
    case 0:
        console.log("Today is Sunday");
    case 1:
        console.log("Today is Monday")

}




let randomNum;


switch(randomNum) {
    case 0:
        console.log("WEEKEND");
        break;
    case 6:
        console.log("WEEKEND");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("WEEKDAY");
        break;
}


