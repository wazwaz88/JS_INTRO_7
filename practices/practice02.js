


console.log("-----------Task-1-----------\n");

let sent1 = "I like apples and oranges";
let sent2 = "Java is not a scripting programing language"
let sent3 = "I don't like books"


sent1.slice(7, 12);

console.log(sent1.slice(7, 12).toUpperCase());
console.log(sent2.slice(0, 4) + sent2.charAt(14).toUpperCase() + sent2.slice(15, 20));
console.log(sent3.charAt(0) + sent3.slice(7));
console.log(sent3.replace("don't ", ""));



console.log("-----------Task-2-----------\n");

let anyString = "e";


console.log("The length is = " + anyString.length);
console.log("The first char is = " + anyString[0]);
console.log("The last char is = " + anyString[anyString.length - 1]);
console.log((
    anyString.toLowerCase().includes("a") 
    || anyString.toLowerCase().includes("e") 
    || anyString.toLowerCase().includes("i") 
    || anyString.toLowerCase().includes("o") 
    || anyString.toLowerCase().includes("u")));



console.log("-----------Task-3-----------\n");

let s2 = "civic";

console.log(s2.charAt(s2.length / 2));


console.log("-----------Task-4-----------\n");

let s3 = "";

// console.log(s3[s3.length / 2 - 1] + s3.charAt(s3.length/2)); // this works but we need slice method. 
console.log(s3.slice(s3.length / 2 -1, s3.length / 2 + 1)); // this one won't return you an undefined


console.log("-----------Task-5-----------\n");

let s4 = "JavaScript";

console.log(`The first 2 characters are = ${s4.slice(0, 2)}`);
console.log(`The last 2 characters are = ${s4.slice(s4.length - 2)}`);
console.log(`The other characters are = ${s4.slice(2, s4.length - 2)}`);



console.log("-----------Task-6-----------\n");

let s5 = "ab";

console.log(s5.slice(0, 2) == s5.slice(s5.length - 2));

console.log(s5.startsWith(s5.slice(0, 2) && s5.endsWith(s5.slice(0, 2)))); // plus solution


console.log("-----------Task-7-----------\n");

let s61 = "1234";
let s62 = "Green";

console.log(s61.slice(1, s61.length - 1) + s62.slice(1, s62.length - 1));


console.log("-----------Task-8-----------\n");

let s7 = "xxbluexx";

console.log(s7.startsWith("xx") && s7.endsWith("xx"))


console.log("-----------Task-9-----------\n");

let s8 = "Akin is cool guy";

let firstWord = s8.slice(0, s8.indexOf(" "));
let lastWord = s8.slice(s8.lastIndexOf(" ") + 1);
let middle = s8.slice(s8.indexOf(" "), s8.lastIndexOf(" ") + 1);
let swapped = lastWord + middle + firstWord;

console.log(swapped);


console.log("-----------Task-10-----------\n");

let s9 = "Today is Sunday";

console.log(s9.length - s9.replaceAll(" ", "").length + 1)

