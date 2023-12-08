let isTrue = false;

// if (isTrue) {
//   console.log('It\'s true!')
// } else {
//   console.log('It\'s not true...')
// }

let num = 10000;

// if (num > 10) {
//   console.log('1');
// } else if (num > 100) {
//   console.log('2');
// } else if (num > 1000) {
//   console.log('3');
// } else {
//   console.log('nope')
// }
if (num > 10) {
  console.log('1');
}
if (num > 100) {
  console.log('2');
}
if (num > 1000) {
  console.log('3');
}

let str = 'hello'
let newStr = ''

//   counter  ; condition     ; step
// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   newStr += char;
// }

// console.log(newStr);

// let counter = 0;

// while (counter < 10) {
//   console.log('forever?')
//   counter++
// }

let arr = ['apple', 23, ['a', 'b']];
let empty = ['hello'];

console.log(arr[1]);
let secondArr = arr[2]
console.log(secondArr[0])
console.log(arr.length, arr.indexOf('hello'));
// arr.push('new')
// arr.push('new')
// arr.push('new')
// arr.push('new')
// arr.push('new')
// arr.push('new')
// arr.push('new')
console.log(arr);
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);
// console.log(arr + empty);
console.log(arr.concat(empty));