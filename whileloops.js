// while (condition) {
    //code to be excecuted
// }

// if the condition is false at the beginning the code wont be excecuted

// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

import promptSync from "prompt-sync";

const prompt = promptSync();

let loan = 5000000;
let salary = 20000;
let m = 0;
let int = 0.01;//per month

while (loan > 0) {
    loan = loan - (loan * 0.01);
    loan -= salary;
    m++;
}
console.log('Your loan is paid within ' + m++ + ' months');

let count = 0;
while (true) {
    console.log(count);
    count++
    if (count > 10) break;
}

// let password = '';
// while (password.length < 8) {
//     password = prompt('Enter password;(min is 8 characters)');
    
// }
// console.log('Password accepted');


let password = '';
while (true) {
    password = prompt("Enter strong password: ");
    const hasUppercase = /[A-Z]/.test[password];
    const hasLowercase = /[a-z]/.test[password];
    const hasDigits = /[0-9]/.test[password];
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test[password];
    const longEnough = password.length >= 8;
        if (hasUppercase && hasLowercase && hasDigits && hasSpecial && longEnough) {
            console.log('Password is strong!');
            break;
        } else {
            console.log('Password is weak.Try again!');
        }
}
