

let random = Math.trunc(Math.random() * 11) + 10;

for(let i = 1; i <= random; i++) {
    if (i % 2 === 1) console.log(i);
}




let random1 = Math.trunc(Math.random() * 10) + 1;
let random2 = Math.trunc(Math.random() * 10) + 1;


if(random1 < random2){

    for(random1; random1 <= random2; random1++){
        console.log(random1);
    }

}else if(random2 < random1){

    for(random2; random2 <= random1; random2++){
        console.log(random2);
    }

}else(
    console.log(random1)
)




let str = "TechGlObal School";

let count = 0;

for(let i = 0; i <= str.length - 1; i++){
    
    if(str.toLowerCase()[i] === "o") count++;

}


console.log(count);

