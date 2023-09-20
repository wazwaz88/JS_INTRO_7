


class Todo {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createAt = new Date();
    }
}


class TodoManager {

    constructor() {
        this.allToDos = [];
    }
    
    createAToDo(newTodo, callback) {
        setTimeout(() => { 
            this.allToDos.push(newTodo);
            callback("Successfully added new todo");
        }, 2000 )
    }

}



const todoManager = new TodoManager();
todoManager.createAToDo({id: 1, title: 'Watch TV', description: 'On weekend and this show'}, (message) => {
    console.log(message);
    console.log(todoManager);
}); 


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }


// getting part

const getRandomNumber = () => {
    let randomNumber = getRandomIntInclusive(10, 20);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(randomNumber);
        }, 5000)
    })
}


// asertion part


let rndNumber = getRandomNumber(); // Promise

console.log(rndNumber);

console.log(rndNumber === 15);

getRandomNumber()
.then(num => {
    console.log(num);
    if(num > 15) console.log('Number is valid')
    else console.log('Number is invalid')
})
.catch(err => console.log(err));

// Async Await

async function resolveRandomNumber() {
    try {
        let random = await getRandomNumber();
        console.log(random);
        if(random > 15) console.log('Number is valid')
        else console.log('Number is invalid')
    }catch(err) {
        console.log(err);
    }
}

resolveRandomNumber();
