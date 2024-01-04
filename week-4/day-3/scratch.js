// SCOPE 
/*
the set of variables and functions that are available within a program
Global Scope : Things in this scope are available to everthing within the program
Local Scope (function scope): Things in this scope are available to everything within the function
Block Scope : denoted by {}, things in scope are available to everything within the block

- ensure variable can only be used in pre-defined parts of our code
- reduce namespace collisions, we can use the same variable multiple times.
*/


// let global = 'global var';
// console.log(global);

// console.log(hoistMe);
// func();

// var hoistMe = 'I\'ve been hoisted'
// var hoistMe = 'Second hoistme'

// console.log(hoistMe);

// function func() {
//   let funcLocal = true
//   // console.log(global);
//   // console.log(func2Local);
//   if (funcLocal) {
//     let blockVar = 'blockVar'
//     console.log('func has ran');
//   }
//   // console.log(blockVar);
//   x = 21;
// }
// console.log(x);

// function func2() {
//   let func2Local = 'inside function2'
// }

// // console.log(innerVar);
// // func();
// let j = 0;
// // let j = 12;

// // for (let i = 0; i < 10; i++) {
// //   console.log('first for: ', i);
// // }
// // for (let i = 0; i < 10; i++) {
// //   console.log('second for: ', i);
// // }

// // block scoped
// let name = 'Tristan'        // can be reassigned
// const lastName = 'Huckabee' //cannot be reassigned

// // function scoped
// var middleInitial = 'C'     // can be reassigned

// y = 10;

// CLOSURE
/*
  By Definition: The combination of a function and the lexical environment within which the function was declared.
  When an inner function uses, or changes, variables in an outer function.
*/

function climbTree(treeType) {
  let treeString = 'You climbed a ';

  function sayClimbTree() {
    return treeString + treeType;
  }

  return sayClimbTree();
}

console.log(climbTree('Pine'));

function makeAdder(x) {
  let base = x;

  // return function(y)...

  function inner(y) {
    return base + y;

  }
  
  return inner;
}

let add5 = makeAdder(5);
console.log(add5);
console.log(add5(10)) //15

let add3 = makeAdder(3);
console.log(add3(16)) //19

console.log( makeAdder(10)(10) )