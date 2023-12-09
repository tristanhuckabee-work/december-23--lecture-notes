// Function are First-Class Objects
// return from other functions, stored in variables, can be passed as arguments
// function calcAverage(num1, num2) {
//   return (num1 + num2) / 2;
// }
const calcAverage = function(num1, num2) {
  return (num1 + num2) / 2;
}

console.log( calcAverage );
calcAverage(10, 20)//15
// Array.map(function(el) {});

let arr = ['b', 'e', 'a', 'm'];
let str = 'beam';
arr[0] = 's';
console.log(arr);
str[0] = 's'
console.log(str);

let num = 42;
num += 8; // num = num + 8
console.log(num);

// mutable : arrays, objects
// immutable : numbers, strings, booleans

// let isTrue = true;

// while (isTrue) {
//   if (char === 'z') {
//     isTrue = false;
//   }
// }

// push add element to end of array
// unshift add element to beginning of array
// pop remove from the end of array
// shift remove element from the beginning of array

let arr2 = []; // o, l, l, e, h
let word = 'hello'
for (let i = 0; i < word.length; i++) {
  let char = word[i];
  arr2.unshift(char);
}
// console.log(arr2);
let array = ['a', 'b', 'c', 'd'];
// let char = array.pop();
// console.log(char);
// console.log(array);
// char = array.shift();
// console.log(char);
// console.log(array);
// let char = array.splice(2, 2,'hello', 'hi');
let char = array.slice(1, 3)
console.log(char);
console.log(array);