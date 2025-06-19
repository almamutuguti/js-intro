let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello, World`;

// Template literals
let fname = 'Alma';
let age = 50;
let message = `Hi, my name is ${fname} and I am ${age}.`;
console.log(message);

//string concatenation
let message2 = 'Hi my name is ' + fname + ' and i am ' + age + ' years old'
console.log(message2);

//accessing characters
let text = 'JavaScript';
console.log(text[1]);
console.log(text.charAt(7));

console.log(text.length); // length
console.log(text.indexOf('a'));
console.log(text.lastIndexOf('a'));

let text2 = 'banana';
console.log(text2.indexOf('a'));
console.log(text2.indexOf('a', 2));
console.log(text2.indexOf('a', 4));
console.log(text2.lastIndexOf('a'));


//changing case
let text3 = 'javascript';
console.log(text3.toUpperCase());
console.log(text3.toLowerCase());

let a = 7;
let b = '6';
b = parseInt(b, 10)
let c = a + b;
console.log('Answer: ' + c);

let d = parseInt('bob', 10);
let e = isNaN(d);
console.log(d);
console.log(e);





