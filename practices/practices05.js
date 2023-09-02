




function firstPos(arg0) {
    
    for(const arg of arg0){
        if(arg > 0) {
            return arg;
        }
    }
}



console.log(firstPos([0, 3, -9,  5, 8]));         
console.log(firstPos([-2, 0, -7, 10, -5]));    
console.log(firstPos([1, 2, 3, -2]));






function lastNeg(array) {
    for(const number of array.reverse()){
        if(number < 0) return number;
    }
}
console.log(lastNeg([-2, 0, -7, 10, -5])); // -5
function lastNeg(array) {
    for(let i = array.length-1; i >= 0; i--){
        if(array[i] < 0) return array[i];
    }
}
function lastNeg(array) {
    let lastNeg = null;
    for(const number of array){
        if(number < 0) lastNeg = number;
    }
    return lastNeg;
}

console.log(lastNeg([0, 3, -9,  5, 8]));       
console.log(lastNeg([-2, 0, -7, 10, -5]));       
console.log(lastNeg([1, 2, 3, -2]));          





function firstLongest(array) {

    let firstLongest = "";

    for(const str of array){
        if(str.length > firstLongest.length) firstLongest = str;
    }

    return firstLongest;
    
}


console.log(firstLongest(["red", "blue", "yellow", "white"]));
console.log(firstLongest(["Apple", "Banana", "Orange"]));
console.log(firstLongest(["purple", "yellow", "orange"]));



function lastShortest(array) {
    let maxLength = Infinity;
    let shortest = "";

    for(const str of array.reverse()){
        if(str.length < maxLength) {
            shortest = str;
            maxLength = str.length;
        }
    }
    return shortest;

}


console.log(lastShortest(["red", "blue", "yellow", "white"]));

console.log(lastShortest(["Apple", "Banana", "Mango"]));
console.log(lastShortest(["white", "yellow", "brown"]));






function max(array) {
    let maxNumber = -Infinity;
    for(const number of array){
        if(number > maxNumber){
            maxNumber = number;
        }
    }
    return maxNumber;
}






console.log(max([0, 3, -9,  5, 8]));
console.log(max([-2, 0, -7, 10, -5]));
console.log(max([1, 2, 3, -2]));
console.log(max([-5, -2]));



function min(array) {
    let min = Infinity;

    for(const number of array){
        if(number < Infinity) min = number;
    }

    return min;
}



function commonElements(array1, array2) {
    const arrayCommon = [];

    for(const number of array1){
        if(array2.includes(number)) arrayCommon.push(number);
        // if(array2.indexOf(number) >= 0) arrayCommon.push(number);
    }

    return arrayCommon;

}


console.log(commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ]));
console.log(commonElements([ 30, 50, 70 ], [ 20, 100, 300 ]));
console.log(commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ]));