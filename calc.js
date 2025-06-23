import promptSync from "prompt-sync";

const prompt = promptSync();


// if  {
//     const num2 = prompt("Enter the second number? ");
//     if (num2 > 0 || num2 < 0 ) {
//         const op = prompt("Enter an operator?(+, -, *, /) ");
//         if (op = '+') {
//             calculation1 = num1 + num2;
//             console.log(calculation1)
//         } else if (op = '-') {
//             calculation2 = num1 - num2;
//             console.log(calculation2)
//         } else if (op = '*') {
//             calculation3 = num1 * num2;
//             console.log(calculation3)
//         } else if (op = '/') {
//             calclation4 = num1 / num2;
//             calculation5 = num1 / num2;
//             console.log(calclation4)
//             console.log(calclation5)
//         } else {
//             console.log('Your answer is invalid')
//         }
//     } else {
//         console.log('Your answer is invalid!')
//     }
// } else {
//         console.log('Your answer is invalid!')
//         const repeat = prompt('Would you like to repeat? Yes or No');
//         if (repeat = 'Yes') {
//             const num1 = prompt("Enter the first number? ");
//             if (num1 > 0 || num1 < 0) {
//                 const num2 = prompt("Enter the second number? ");
//                 if (num2 > 0 || num2 < 0 ) {
//                      
//                     if (op = '+') {
//                         calculation1 = num1 + num2;
//                         console.log(calculation1)
//                     } else if (op = '-') {
//                         calculation2 = num1 - num2;
//                         console.log(calculation2)
//                     } else if (op = '*') {
//                         calculation3 = num1 * num2;
//                         console.log(calculation3)
//                     } else if (op = '/') {
//                         calclation4 = num1 / num2;
//                         calculation5 = num1 % num2;
//                         console.log(calclation4)
//                         console.log(calclation5)
//             } else {
//                 console.log('Your answer is invalid')
//             }
//         } else {
//             console.log('Your answer is invalid!')
//         }

//     }


const num1 = parseFloat(prompt("Enter the first number? "));
const num2 = parseFloat(prompt("Enter the second number? "));
const oper = prompt("Enter an operator?(+, -, *, /) ");

switch (true) {
    case (num1 < 0 || num1 > 0):
        console.log(num1);
        break;
    default:
        console.log('Invalid answer');
}
switch (true) {
    case (num2 < 0 || num2 > 0):
        console.log(num2)
        break;
    default:
        console.log('Invalid answer');
}
switch (oper) {
    case('+'):
        console.log(num1 + num2);
        break;
    case('-'):
        console.log(num1 - num2);
        break;

    case('*'):
        console.log(num1 * num2);
        break;
    case('/'):
        console.log(num1 / num2);
        console.log(num1 % num2);
        break;

    default:
        console.log('Invalid operator');
}







