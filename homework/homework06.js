


console.log('------Task-1------\n');

function noSpace(x){
    return x.replaceAll(" ", "");
}


console.log(noSpace(" Hello World "))


console.log('\n------Task-2------\n');

function replaceFirstLast(x){
    let first = x[0];
    let last = x[x.length - 1];
    let middle = x.slice(1, x.length - 1);
    return last + middle + first;
}

console.log(replaceFirstLast("Hello"));



console.log('\n------Task-3------\n');

function hasVowel(x){
    let hasVowel = false;
    if(x = "") return hasVowel;
    else if('aeiou'.includes(x.toLowerCase())) return true;

}


console.log(hasVowel(""));




console.log('\n------Task-4------\n');


function checkAge(x){
    if((2023 - x > 120) || (x > 2023)) console.log("AGE IS NOT VALID")
    else if(2023 - x < 16) console.log('AGE IS NOT ALLOWED')
    else console.log('AGE IS ALLOWED')
}

checkAge(2015);





console.log('\n------Task-5------\n');

function averageOfEdges(x1, x2, x3){
    return (Math.max(x1, x2, x3) + Math.min(x1, x2, x3)) / 2;
}


console.log(averageOfEdges(20, 13, 10))




console.log('\n------Task-6------\n');

function noA(x){

    const newArr = [];

    for(const str of x){
        if(str.toLowerCase().startsWith("a")) newArr.push(str.replace(str, "###"));
        else newArr.push(str);
    }

    return newArr;

}


console.log(noA(['apple', 'abc', 'ABC', 'Alex', 'A']));




console.log('\n------Task-7------\n');

function no3and3(arr){

    const newArr = [];

    for(const x of arr){
        if(x % 15 === 0) newArr.push(101);
        else if(x % 5 === 0) newArr.push(99);
        else if(x % 3 === 0) newArr.push(100);
        else newArr.push(x);
    }

    return newArr;
}


console.log(no3and3([10, 11, 12 ,13, 14, 15]))



console.log('\n------Task-8------\n');


function countPrimes(arr){
    let count = 0;

    function isPrime(arg0){
        
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

    for(const x of arr){
        if(isPrime(x)) count++
    }

    return count;

    
}

console.log(countPrimes([7, 4, 11, 23, 17]));




console.log('\n------Task-9------\n');
console.log('\n------Task-10------\n');
console.log('\n------Task-11------\n');
console.log('\n------Task-12------\n');
console.log('\n------Task-13------\n');
// no clue