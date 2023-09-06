
console.log('------Task-1------\n');


function countPos(arg0) {
    let count = 0;

    for(const number of arg0){
        if(number > 0) count++;
    }

    return count;
}



console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));



console.log('\n------Task-2------\n');


function countA(arg0) {
    let countA = 0;

    for(let i = 0; i < arg0.length; i++){
        if(arg0[i].toLowerCase() === 'a') countA++;
    }

    return countA;
}


console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));


console.log('\n------Task-3------\n');

function countVowels(arg0) {
    let countVow = 0;

    for(const char of arg0.toUpperCase().split("")){
        if("AEIOU".includes(char)) countVow++;
    }

    return countVow;
}


console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));


console.log('\n------Task-4------\n');


function countConsonants(arg0){
    let countCon = 0;

    for(const char of arg0.toUpperCase().split("")){
        if(!("AEIOU".includes(char))) countCon++;
    }

    return countCon;
}


console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));


console.log('\n------Task-5------\n');

function countWords(arg0) {
    return arg0.trim().split(" ").length;
}


console.log(countWords("     Javascript is fun    "));
console.log(countWords("Cypress is an UI automation tool.     "));
console.log(countWords("1 2 3 4"));



console.log('\n------Task-6------\n');

function factorial(arg0) {
    let factorial = 1;

    for(let i = arg0; i >= 1; i--){
        factorial *= i;
    }

    return factorial;
}


console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));


console.log('\n------Task-7------\n');

function isPalindrome(arg0) {
    
    
    let compare = "";

    if("1234567890".includes(arg0)) compare = arg0.split("").reverse().join("");
    else compare = arg0.toUpperCase().split("").reverse().join("");

    return compare === arg0.toUpperCase();

}


console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab  a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));


console.log('\n------Task-8------\n');


function countMultipleWords(arg0) {
    let count = 0;
    for(const string of arg0){
        string.trim;
        if(string.split(" ").length >= 2) count++
    }
    return count;
}

console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]));
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]));
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]));
console.log(countMultipleWords([ ]));


// error in this one


console.log('\n------Task-9------\n');


function count3OrLess(arg0) {
    let count = 0;

    for(const word of arg0.split(" ")){
        
        if(word.length === 0) return count;
        else if(word.length <= 3) count++;

    }

    return count;
}



console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("JavaScript is fun"));
console.log(count3OrLess("My name is John Doe"));
console.log(count3OrLess(""));




console.log('\n------Task-10------\n');

function isPrime(arg0) {
    let isPrime = true;
    if(arg0 === 1 || arg0 === 0 || arg0 < 0) isPrime = false
    else{
        for(let i = 2; i < arg0; i++){

            if(arg0 % i === 0){
                isPrime = false;
                break;
            }
        }
    }

    return isPrime;

}


console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));



console.log('\n------Task-11------\n');

// i dont know

function add(arg0, arg1) {

}



console.log('\n------Task-12------\n');

// i dont know

function add(arg0, arg1) {

}



console.log('\n------Task-13------\n');

// i dont know

function add(arg0, arg1) {

}





console.log('\n------Task-14------\n');

// i dont know

function add(arg0, arg1) {

}





console.log('\n------Task-15------\n');

// i dont know

function add(arg0, arg1) {

}