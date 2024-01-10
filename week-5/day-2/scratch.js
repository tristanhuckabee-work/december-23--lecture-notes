// String Interpolation w/Template Literals
let firstName = 'Tristan';
let str = 'hello ' + firstName;
// console.log( `Hello! ${firstName}!` );

// CallStack
// The CallStack operates in a LIFO/FILO order.
// Items added to callstack are called 'stack frames'
// adding items the stack is called 'pushing'
// removing items from stack is called 'popping'

function foo() {
  console.log('a');
  bar();
  console.log('e');
}
function bar() {
  console.log('b');
  baz();
  console.log('d');
}
function baz() {
  console.log('c')
}

// foo();

// Recursion - a function calling itself inside itself
function sum(nums) {
  //base case
  if (nums.length === 1) return nums[0];

  //recursive step => trying to get to base case
  return nums[0] + sum(nums.slice(1));
}

console.log(sum([1,2,3,4])) // 10