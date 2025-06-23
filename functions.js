import promptSync from "prompt-sync";

const prompt = promptSync();

function sum(num1, num2) { //num1 and num2 are paramenters and the actual values are arguement
    return num1 + num2;

}
console.log(sum (2, 3));
console.log(sum (10, 3));

function diff(num1,num2) {
    return num1 - num2;
}

console.log(diff(5, 2));

function prd(num1,num2) {
    return num1 * num2;
}

console.log(prd(5, 2));

function div(num1,num2) {
    return num1 / num2;
}

console.log(div(5, 2));

const product = function(a, b) {
    return a * b;
}

console.log(product(10, 5));


function greeting(fname) {
    return 'Hello,' + fname
}

console.log(greeting('Alma'));

const message = (fname) => {
    return 'Hi, my name is' + fname + '.';
}

const message2 = fname => 'Hi, my name is' + fname + '.';
console.log(message(' Barbara'));
console.log(message(' Bob'));

const greet = function(sname) {
    return 'Hello,' + sname
};


function validateEmail (email) {
    return email.includes(`@`) && email.endsWith(`.com`);
    // include method ensures that the input has a certain character

}

// const userEmail = prompt(`Enter your email: `);
if (validateEmail(`alma.wanjiru8j@gmail.com`)) {
    console.log(`Valid email.`);
}else {
    console.log(`Invalid email.`);
}

function calculateTotal (cartItems) {
    let total = 0;
    for (let item of cartItems) {
        total += item.price * item.quantity;
    }

    return total;
}

const cart = [
    {name: 'T-shirt',price: 1200,quantity: 3 },
    {name: 'Trousers',price: 1500,quantity: 2 },
    
]

console.log(`Total: ${calculateTotal(cart)}`);



