// for (initialization; Condition; increment) {
//     code execute
// }

for (let i = 1; i <= 500; i++) {
    console.log(i);
}

const colors = ['black' , 'white', 'brown'];
console.log(colors);

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}


console.log('Even numbers:');
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
    
}

console.log('Odd numbers:');
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    
}

console.log('Sum of even numbers:')
let sum1 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
       sum1 += i;
       
    }
}
console.log(sum1)





let sum = 0;
for (let i = 1; i <= 4; i++) {
    // sum = sum + 1;
    sum += i
}

console.log('Sum:', sum);