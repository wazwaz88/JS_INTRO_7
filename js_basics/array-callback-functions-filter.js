

const numbers = [-5, 0, 5, 10, 23, -10];

const postives = numbers.filter(number => number > 0);

console.log(postives);


const evens = numbers.filter(number => number % 2 === 0);
const odds = numbers.filter(number => number % 2 !== 0);
const evensToZeros = numbers.map(number => number % 2 === 0 ? number * 0 : number);

console.log(evens);
console.log(odds);
console.log(evensToZeros);


const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];
let countI = 0;
let countEndsWithE = 0;


console.log(fruits.filter(fruit => fruit.toUpperCase().startsWith("M")));
console.log(fruits.filter(fruit => fruit.toUpperCase().includes("APPLE")));
console.log(fruits.filter(fruit => fruit.length === 5));
console.log(fruits.filter(fruit => fruit.length !== 5));
console.log(fruits.filter(fruit => (fruit.toLowerCase().includes('a') || fruit.toLowerCase().includes('e'))));


console.log(fruits.filter(x => x.toLowerCase().indexOf('i') >= 0).length);
console.log(fruits.filter(x => x.toLowerCase().endsWith('e')).length);


console.log(fruits.map(fruit => fruit[0] + fruit[fruit.length - 1]));

