class Course {
    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    lengthPriceValue() {
        return this.length / this.price;
    }

    summary() {
        console.log(`The ${this.title} class is a ${this.length} month class and costs $${this.price}.`)
    }

    set setPrice(val) {
        if(val > 0) this.price = val;

    }

    get getPrice() {
        return "$" + this.val;
    }

    
}

const c1 = new Course("Cooking", 12, 100);
const c2 = new Course("Woodwork", 10, 100);
const c3 = new Course();


console.log(c1);
console.log(c2);

console.log(c1.lengthPriceValue());
console.log(c2.lengthPriceValue());


c1.summary();
c2.summary();

c3.setPrice(5);
console.log(c3.getPrice());




class PracticalCourse extends Course{
    constructor(title, length, price, numOfExercises) {
        super(title, length, price);
        this.numOfExercises = numOfExercises;
        
    }
}


class TheorieticalCourse extends Course{
    
   
    publish() {
        console.log('hi');
    }

}


const pc1 = new PracticalCourse("course1", '10', 150, 15);
const tc1 = new TheorieticalCourse("course2", '5', 500);

console.log(pc1);
console.log(tc1);

console.log(pc1.numOfExercises);
tc1.publish();



console.log(tc1.lengthPriceValue());
console.log(pc1.lengthPriceValue());


tc1.summary();
pc1.summary();