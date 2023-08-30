
const numbers = [3, 4, 7, 3, 2, 2, 7];


let sum = 0;

for(const number of numbers) {
    sum += number;
}

console.log(sum / numbers.length);





const arr141 = [5, 8, 2, 1, 2];
const arr142 = [9, 3, 5, 1, 0];
const arr143 = []
for(let i = 0; i <= arr141.length - 1; i++) {
    arr143.push(arr141[i] * arr142[i]);
}
console.log(arr141);
console.log(arr142);
console.log(arr143); 



const nums = [1, 3, 0, 2, 6, 8];
let firstEven = null;
for(const num of nums){
   if( num % 2 === 0 ) {
    firstEven = num;
    break;
   }
}
console.log(firstEven);
firstEven = null;
for(let i = 0; i < nums.length; i++){
    if( nums[i] % 2 === 0 ) {
        firstEven = nums[i];
        break;
    }
}
console.log(firstEven);




let name = "John";

let reversedName = '';

const reversedChars = name.split("").reverse();

console.log(reversedChars.join(""));




const cities = ["Berlin", 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];


for(let i = 0; i <= cities.length - 1; i++) {
    if(cities[i].length % 2 !== 0){
         console.log(cities[i])
         break;
    }
}


for(const city of cities){
    if(city.length % 2 !== 0){
        console.log(city);
        break;
    }
}




const citiesMoreThanFive = [];


for(const city of cities) {
    if(city.length > 5) citiesMoreThanFive.push(city);
}

console.log(citiesMoreThanFive);