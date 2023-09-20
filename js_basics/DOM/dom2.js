

const pageHeading = document.getElementById('page-heading');
console.log(pageHeading);
console.log(typeof pageHeading);



const container = document.getElementsByClassName('container');
console.log(container);
console.log(typeof container);



for(let i = 0; i < container.length; i++){
    // console.log(`Node ${i}: ${container[i]}`);
    console.log(container[i]);
}




const par1 = document.querySelector('#par1');
const par2 = document.querySelector('.par2');
const qSection = document.querySelector('section');


console.log(par1);
console.log(par2);
console.log(qSection);