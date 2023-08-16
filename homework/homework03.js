console.log("-----Task-1------\n");



function getRandomNumber(arg0, arg1){

    return Math.trunc(Math.random() * (arg1 - arg0 + 1) + arg0);

}


let number1 = getRandomNumber(1, 100);
let number2 = getRandomNumber(1, 100);
let number3 = getRandomNumber(1, 100);

console.log((number1 + number2 + number3/ 3) >= 50);





console.log("\n-----Task-2------\n");


let random1 = getRandomNumber(1, 3);
let random2 = getRandomNumber(1, 3);
let random3 = getRandomNumber(1, 3);

console.log(random1);
console.log(random2);
console.log(random3);

if(random1 === random2 && random1 === random3) {
    console.log("TRIPLE MATCH");
} else if(random1 === random2 || random1 === random3) {
    console.log("DOUBLE MATCH");
}else {
    console.log("NO MATCH");
}





console.log("\n-----Task-3------\n");


function hasA(arg0) {
    return arg0.toLowerCase().includes("a");
}


console.log(hasA("Tech"));
console.log(hasA("Global"));
console.log(hasA(""));
console.log(hasA("Apple"));


console.log("\n-----Task-4------\n");

function doubleOrTripleWord(arg0) {
    if(arg0.length % 2 === 0){
        return arg0 + arg0 + arg0;
    } else {
        return arg0 + arg0;
    }
}


console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));



console.log("\n-----Task-5------\n");

function firstWord(arg0) {

    return arg0.slice(0, arg0.indexOf(" "));

}



console.log(firstWord("Hello World"));
console.log(firstWord("I like JavaScript"));
console.log(firstWord("Hello"));
console.log(firstWord(""));
console.log(firstWord(" "));





console.log("\n-----Task-6------\n");

function lastWord(arg0) {

if(arg0.includes(" ")){
    return arg0.slice(arg0.lastIndexOf(" ") + 1);
}else {
    return arg0;
}
}



console.log(lastWord("Hello World"));
console.log(lastWord("I like JavaScript"));
console.log(lastWord("Hello"));
console.log(lastWord(""));
console.log(lastWord(" "));




console.log("\n-----Task-7------\n");


function firstLastWord(arg0) {

    if(arg0.includes(" ")){
        return (arg0.slice(0, arg0.indexOf(" "))) + arg0.slice(arg0.lastIndexOf(" ") + 1);
    }else {
        return arg0 + arg0;
    }


}


console.log(firstLastWord("Hello World"));
console.log(firstLastWord("I like JavaScript"));
console.log(firstLastWord("Hello"));
console.log(firstLastWord(""));
console.log(firstLastWord(" "));




console.log("\n-----Task-8------\n");


function startVowel(arg0) {
    return arg0.toLowerCase().startsWith("a") || arg0.toLowerCase().startsWith("e") || arg0.toLowerCase().startsWith("i") || arg0.toLowerCase().startsWith("o") || arg0.toLowerCase().startsWith("u");
}

console.log(startVowel("Hello"));
console.log(startVowel("Apple"));
console.log(startVowel("orange"));
console.log(startVowel(""));
console.log(startVowel(" "));
console.log(startVowel("123"));




console.log("\n-----Task-9------\n");


function swap4(arg0) {


    if(arg0.length >= 8) {
        let first4 = arg0.slice(0, 4);
        let last4 = arg0.slice(arg0.length - 4);
        let middle = arg0.slice(4, arg0.length -4);
        return last4 + middle + first4;
    }else{

        return "";
    }


}



console.log(swap4("abc"));
console.log(swap4("JavaScript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4("  "));
console.log(swap4("Apple"));





console.log("\n-----Task-10------\n");



function swapFirstLastWord(arg0) {

        if(arg0.trim().length - arg0.trim().replaceAll(" ", "").length + 1 >= 2) {

            let firstWord = arg0.slice(0, arg0.indexOf(" "));
            let lastWord = arg0.slice(arg0.lastIndexOf(" "));
            let middle = arg0.slice(arg0.indexOf(" "), arg0.lastIndexOf(" ") + 1);
            return lastWord + middle + firstWord;

        } else {
            return "";
        }

}


console.log(swapFirstLastWord("Hello World"));
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));
console.log(swapFirstLastWord(""));
console.log(swapFirstLastWord("  "));
console.log(swapFirstLastWord("Hello"));
console.log(swapFirstLastWord("Hello  "));



