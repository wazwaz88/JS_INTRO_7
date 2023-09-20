



const person1 = {
    name: 'Alan',
    age: 29
}

function printName1() {
    console.log(this.name);
}

printName1();

printName1.call(person1);


function printHobbies(h1, h2, h3){
    console.log(`HI, my name is ${person1.name} and My hobbies are ${h1}, ${h2}, and ${h3}`);
}


const hobbies = ['Reading', 'Coding', 'Fishing'];
printHobbies.call(person1, hobbies[0], hobbies[1], hobbies[2]);
printHobbies.apply(person1, hobbies);

const bindedPrintHobbies = printHobbies.bind(person1, hobbies[0], hobbies[1], hobbies[2]);









var a = 12;
(function() {
    console.log(a);
})();

