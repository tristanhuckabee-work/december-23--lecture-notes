/*
Scope - the set of variables and functions available for use within a program

- ensures that variables are only accessable by pre-defined portion of code
- reduces likelihood of namespace collision, we can use the same variable multiple times

GLOBAL- things defined here, are available to everything within the program
LOCAL - things defined here, are available to everything within the function
BLOCK - denoted by {}, things defined here, are available to everything within the block
LEXICAL - things defined above are available below.

inner scopes have access to outer scopes
*/
x = 21;
let name = 'Tristan';
localScope()
// console.log(name);
// console.log(x);

function localScope() {
  // console.log(yellow);
  // console.log(name);
  let age = 28;
  if (true) {
    let food = 'spaghetti';
    // console.log(name);
    y = 12;
  }
  // console.log(food);
  var yellow = 'yellow'
}
localScope();
// console.log(age);
// console.log(y);
// console.log(green);

// block scoped
let red = 'red';     // can be reassigned
const blue = 'blue'; // can't be reassigned

// local scoped
var green = 'green'; // can be reassigned, is hoisted

// let red = 'black';
// const blue = 'black';
// var green = 'black';
if (true) {
  var green = 'black'
}

// console.log(green);


// CLOSURES 
/*
  The combination of a function and the lexical environment within which the function was declared.
  A closure is when an inner function can use, or change, variables in an outer function.
*/

function climbTree(type) {
  let treeString = 'You climbed a ';
  return sayClimbTree();

  // const sayClimbTree = function() {
  //   return treeString + type;

  // }
  function sayClimbTree() {
    return treeString + type;
  }
}
// console.log(climbTree('Oak'));

function makeAdder(x) {
  let base = x; 
  
  return function(y) {
    return base + y
  }
}

// let add3 = makeAdder('x')('y');
// console.log(add3);

let add5 = makeAdder(5);
console.log( add5(10) ) // 15
console.log( add5(3) )  // 8
let add3 = makeAdder(3);
console.log( add3(27) ) // 30