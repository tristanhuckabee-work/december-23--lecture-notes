// Printing to the Console
let greeting = 'Hello Class';

console.log(2235)
console.log('Hello Everyone')
console.log(greeting);
console.log(2+2);
// Comments
/* 
This
is
a
multiline
comment
*/

// Variable Declarations
var nameOfVariable = 'value';
console.log(nameOfVariable);
let heresthename = 'let value';
const heresanother = 'const value';
console.log(heresthename, heresanother)
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', nameOfVariable);
heresthename = 'new value';
// heresanother = 'new value';
console.log(heresthename, heresanother)
// Strings
let string1 = 'this is a string'
let string2 = "this is also a string"
let string3 = `this is also also a string` //backticks
let string4 = "it's all good" // 'it's all good'
console.log(string1, string2, string3);
console.log(string4);
// Math Operators
console.log(2 + 2)  // 4
console.log(4 - 2)  // 2
console.log(3 * 3)  // 9
console.log(16 / 4) // 4
console.log(32 % 7) // 4
console.log(2 * 6 - 4) // 8
console.log(-4 + 2 * 6) // 8
console.log(2 * (6 - 4)) // 4

// Booleans
  let boolean = false;
  let boolbin = false;
  console.log( boolean && boolbin) // left and right must be true
  console.log( boolean || boolbin) // left or  right must be true
  console.log( !boolean || boolbin) // flips value of following element
  // Comparison Operators
    console.log('')
    let firstNumber = '10';
    let secondNumber = 10;
    console.log(firstNumber == secondNumber);
    console.log(firstNumber === secondNumber);
    console.log(firstNumber >= secondNumber);
    console.log(firstNumber <= secondNumber);
    console.log(firstNumber < secondNumber);
    console.log(firstNumber > secondNumber);
    console.log(firstNumber != secondNumber);
  // De Morgans Law
    // !(A && B) = !A || !B
    console.log(!(boolean && boolbin));
    console.log(!boolean || !boolbin);

// Shorthand Operations
console.log('');
let count = 0;
console.log(count);
count = count + 1
count = count + 1
count = count + 1
count = count + 1
count = count + 1
count = count + 1
console.log(count);
count += 1
console.log(count);
count++;
console.log(count);
count -= 1
console.log(count);
count--;
console.log(count);
count *= 2
console.log(count);
count /= 2
console.log(count);
count %= 4
console.log(count);

for (let i = 0; i < 10; i*=2) {}