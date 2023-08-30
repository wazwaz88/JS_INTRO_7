

const students = [];

students.push('Alex');

console.log(students);

students.push('John', 'John', "Jane");


console.log(students);


students.push(["Mark", "Max", "Maria"]);


console.log(students);

console.log(students.length);



students.push(students, students);


console.log(students);
console.log(students.length);


const newArr = [];

let result = newArr.shift();

console.log(result);
console.log(newArr);