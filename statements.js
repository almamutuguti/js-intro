// if statements

// if (condition) {
//     // code runs if condition is true
// }


let age = 10;
if (age >= 18) {
    console.log('You are an adult');
}


//if ..else statements
let age2 = 10
if (age2 >= 18) {
    console.log('You are an adult')
}
else {
    console.log('You are a minor')
}

let temp = 85;
if (temp > 20) {
    console.log('It is hot outside')
}
else {
    console.log('It is cold outside')
}


// if ....else if ..else
score = 80;
if (score >= 90) {
    console.log('Grade A')
} else if (score >= 80) {
    console.log('Grade B')
} else if (score >= 70) {
    console.log('Grade C')
} else if (score >= 60) {
    console.log('Grade D')
} else if (score >= 50) {
    console.log('Grade D')
} else if (score >= 40) {
    console.log('Grade D')
} else if (score >= 30) {
    console.log('Grade E')
} else {
    console.log('Grade F')
}

//switch statements
score = 80;
switch (true) {
    case (score >= 90):
        console.log('Grade A');
        break;
    case (score >= 80):
        console.log('Grade B');
        break;
    case (score >= 70):
        console.log('Grade C');
        break;
    case (score >= 60):
        console.log('Grade D');
        break;
    case (score >= 50):
        console.log('Grade E');
        break;
    default:
        console.log('Grade F');
        break;
}

//Ternary Operator
// condition? valiue_if_true: value_if_false

let loggedIn = true;
let message = loggedIn ? "Welcome back!" : "Please log in";
console.log(message);

let number = 9;
let result = number % 2 === 0 ? "Even" : "Odd";
console.log(result);

let username = 'Admin';
let password = 'SomePass12@#';

if (username === 'Admin' && password === 'SomePass12@#') {
    console.log('Access granted');
} else {
    console.log('Access denied. Username or password is incorrect')
}


let total = 5000;

if (total > 500) {
    console.log('Free Delivery!')
} else {
    console.log('Add more items to earn a free delivery')
}
