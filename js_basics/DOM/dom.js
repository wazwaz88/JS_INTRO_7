


// console.log("window", window);


// window.alert("Here is the alert message");

// let promptResult = window.prompt();
// console.log(promptResult);


// let confirmResult = window.confirm('Are you ready?');
// console.log(confirmResult);

// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log("height", innerHeight);


// scroll to top
//window.scrollTo(0, 0);

//.location.reload();

/*

console.log(window.localStorage.length);


window.localStorage.setItem('name', 'John');
window.localStorage.setItem('isLoggedIn', false);
window.localStorage.setItem('userId', 1234);
window.localStorage.setItem('userInfo', JSON.stringify({ name: 'John', email: 'john@gmail.com'}));
window.localStorage.setItem('userWalletTypes', JSON.stringify(['apple', 'google', 'cc']));


console.log(window.localStorage.getItem('name'));
console.log(window.localStorage.getItem('isLoggedIn'));
console.log(window.localStorage.getItem('userId'));
console.log(JSON.parse(window.localStorage.getItem('userInfo')));
console.log(window.localStorage.getItem('userInfo'));
console.log(window.localStorage.getItem('userWalletTypes'));
console.log(JSON.parse(window.localStorage.getItem('userWalletTypes')));



window.localStorage.removeItem('name');
window.localStorage.removeItem('userId');


window.localStorage.clear();


*/




let userName = window.prompt();


if(userName === null || userName.length === 0){
    console.log(window.alert("You didn't provide your name. Bye Bye!"));
}else {
    window.alert(userName);
    let b = window.confirm('Do you want to continue?');

    b ? console.log(window.alert("You have chosen to continue")) : console.log(window.alert('You canceled the action'));



    setTimeout(() => {
        window.location.reload();
    }, 10000)

}


window.innerWidth;
window.innerHeight;



