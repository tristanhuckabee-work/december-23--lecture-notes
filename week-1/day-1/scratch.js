// Printing to the Console
console.log('hello everyone');
console.log(256);
// Comments
// control + /
/*
this
is
a
multiline
*/

// Variable Declarations
var varName = 32;
let varLet  = 'Let Var';
const varConst = 'Const Var';

console.log(varName, varLet, varConst, 'hello', 32);
// Strings
console.log("it's a hot day today");
console.log('single')
console.log("double")
console.log(`backticks`)
// Math Operators
console.log(2 + varName) // 34
console.log(18 - 3) // 15
console.log(4 * 4) // 16
console.log(9 / 3) // 3
console.log(6 % 4) // 2
console.log(4 % 6) // 4
console.log(2 + 5 / 2) // 4.5
console.log(2 + (5 / 2)) // 4.5

// Booleans
console.log(true);
console.log(false);
console.log(true && false); // false
console.log(true || false); // true
console.log(!true) // false
console.log(!true && true); // false
console.log(true && false || true); //true
  // Comparison Operators
  let num1 = 10;
  let num2 = '10';
  console.log(num1 > num2);
  console.log(num1 < num2);
  console.log(num1 >= num2);
  console.log(num1 <= num2);
  console.log(num1 == num2); //strictly equals
  console.log(num1 === num2); //deeply equals
  // De Morgans Law
  // !(A && B) = !A || !B
// Shorthand Operations
console.log('');
let base = 0;
console.log(base)
base = 1;
console.log(base)
base = base + 1
console.log(base)
base += 5;
console.log(base)
base++
console.log(base)
base -= 1
base--
console.log(base)
base *= 2
console.log(base)
base /= 3
console.log(base)
base %= 2
console.log(base)
