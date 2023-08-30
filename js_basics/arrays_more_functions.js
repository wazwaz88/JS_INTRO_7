

const arr1 = [2, 3, 5];
const arr2 = arr1.reverse();


console.log(arr1);
console.log(arr2);

const arr3 = arr2.reverse();

console.log(arr1);
console.log(arr2);
console.log(arr3);

// reverse changes the original array to a different one. it returns the new array


const arr = ['Grapes', 'Kiwi', 'Apple', 'Orange'];

const subarray1 = arr.slice();
const subarray2 = arr.slice(0);
const subarray3 = arr.slice(1);


console.log(subarray1);
console.log(subarray2);
console.log(subarray3);



const subarray4 = arr.slice(0, 1);
const subarray5 = arr.slice(1, 3);
const subarray6 = arr.slice(2, 8);


console.log(subarray4);
console.log(subarray5);
console.log(subarray6);


console.log(arr.slice(-Infinity, Infinity));

console.log(arr);


// slice does not affect the original array or reassign it


console.log(arr.slice(3, 1)); // returns empty array


console.log(arr.slice(3, 1)); 
console.log(arr.slice(-3, -1)); 


arr.splice(1, 0, "Pineapple");

console.log(arr); // [ 'Grapes', 'Pineapple', 'Kiwi', 'Apple', 'Orange' ]


arr.splice(1, 3);

console.log(arr); // [ 'Grapes', 'Orange' ]


arr.splice(5, 3);

console.log(arr); // [ 'Grapes', 'Orange' ]

arr.splice(5, 0, "Peach", "Berry");

console.log(arr); // [ 'Grapes', 'Orange', 'Peach', 'Berry' ]



arr.sort();

console.log(arr); // [ 'Berry', 'Grapes', 'Orange', 'Peach' ]


arr.push("apple");
arr.push("Banana");

console.log(arr); // [ 'Berry', 'Grapes', 'Orange', 'Peach', 'apple', 'banana' ]


arr.sort();

console.log(arr);



const chars = [["a", "b"], [1, 2], ["#", "&", "^", "{"], ' '];

const chars_flat = chars.flat();

console.log(chars);
console.log(chars_flat);
