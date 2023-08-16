function getRandomNumber(arg0, arg1){

    return Math.trunc(Math.random() * (arg1 - arg0 + 1) + arg0);

}



let number = getRandomNumber(0, 6);

if(number === 0 || number === 6){
    console.log("WEEKEND");
}else{
    console.log("WEEKDAY");
}

if(number !== 0 && number !== 6){
    console.log("WEEKDAY");
}
else{
    console.log("WEEKEND");
}


let number2 = getRandomNumber(1, 100);
let point = 1;

if(number2 % 10 === 0){
    console.log(point * 6);
} else if(number2 % 2 === 0){
    console.log(point * 2);
}else if(number2 === 7){
    console.log(ppoint * 7);
}else{
    console.log(point);
}




let number3 = getRandomNumber(0, 6);

if(number3 === 0){
    console.log("RED");
    console.log("VACATION");
}else if(number3 === 6){
    console.log("GREEN")
    console.log("VACATION")
}else{
    console.log("BLACK")
    console.log("WORK")
}