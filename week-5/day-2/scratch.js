/* String Interpolation w/ Template Literals*/
let firstName = 'Tristan';
// console.log('Hello, ' + firstName + '!');
// console.log(`Hello, ${firstName}!`);
// console.log(`Hello, ${32 - 2}!`);

/* Call Stack
A structure in JS for keeping track of function calls.
Each item on the CallStack is a 'stack frame'
- adding an item to the stack is 'pushing'
- removing an item from the stack is 'popping'

LIFO or FILO order
*/
function foo() {
  console.log('a')
  bar()
  baz()
  console.log('e')
}
function bar() {
  console.log('b')
  baz()
  console.log('d')
}
function baz() {
  console.log('c')
}

// foo();

/* Recursion
Calling a function within itself
*/

function sum(nums) {
  // base case
  debugger
  if (nums.length === 1) return nums[0];
  // recursive case
  return nums[0] + sum(nums.slice(1));
}

sum([1,2,3,4]);