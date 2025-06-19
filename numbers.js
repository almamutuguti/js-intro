let num1 = 5; //integer
let num2 = 3.14; //floating point number
let num3 = -10; // negative number

let x = 10;
let y =3;

// Basic Arithmetic operations
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//type conversion
let a ='10';
let b = 2;
console.log(a + b);
console.log(Number(a) + b); //Eplicit Converson

let product = '20' + 2;
console.log(product);

// Checking Number Type
console.log(typeof 30);
console.log(Number.isInteger(22));
console.log(Number.isFinite(3.14));
console.log(Number.isNaN('abc'));

let number1 = '3.14';
let number2 = parseFloat(number1);

let number3 = '30';
let number4 = parseInt(number3);

// Math Object
console.log(Math.PI);
console.log(Math.round(3.567));// rounding off
console.log(Math.floor(3.967));// truncates with positives
console.log(Math.trunc(4.9));// truncation
console.log(Math.trunc(-4.9));
console.log(Math.floor(-8.555));// in nrgatives it rounds up

console.log(Math.ceil(4.1));// rounds up at no expense
console.log(Math.abs(-5));// makes it positive
console.log(Math.sqrt(4));//square root
console.log(Math.pow(2, 4));// to the power of
console.log(Math.random());// gives number between 0 and 1
console.log(Math.max(4, 10, 6, 20));// highest number 
console.log(Math.min(4, 10, 6, 20));//lowest number

const radius = 7;
const areaOfCircle = Math.PI * radius **2;
console.log(areaOfCircle);
console.log(areaOfCircle.toFixed(2));//to specific number of decimals

const length = 10;
const width = 20;
const areaOfRectangle = length * width;
console.log(areaOfRectangle);

const base = 4;
const height = 3;
const areaOfTriangle = 0.5 * base * height;
console.log(areaOfTriangle);

//var, let, const

let m = 5;
m = 7
console.log(m); // it can redeclare

const p = 9;
n = 10;
console.log(p);

//booleans

let iLikemeat = true;
console.log(iLikemeat);

l = 7 > 10;
console.log(l);//false

q = 7 > 1;
console.log(q);//true


x = 5;

x == 5; //true equal value
x === '5'; // false equal value but not equal type
x != 8; // true not equal
x !== 8; // true not eqaul value or not equal type
x > 8; // false
x < 8; //true
// <= less than or equal to  >= greater than or equal to

// && - and  || - or  ! - not

//boolean operations
a1 = true;
a2 = false;

console.log(a1 && a2); //false
console.log(a1 || a2);// true
console.log(!a1); //false

// boolean logic
console.log(true && true);//true
console.log(true && false);//false
console.log(false && true);//false
console.log(false && false);//false
console.log(true || true);//true
console.log(true || false);//true
console.log(false || true);//true
console.log(false || false);//false
console.log(!true);//false
console.log(!false);//true










