// Strings
const myString = 'the text of the string'

console.log(myString.length);
console.log('this is also a string'.length);

console.log('this is also a string'[3]);
console.log('this is also a string'[21]);

console.log(myString.indexOf('t'));   // 0
console.log(myString.indexOf('str')); // 16
console.log(myString.indexOf('14'));  // -1

const firstHalf = 'Hello';
const secondHalf= 'World';

console.log(firstHalf + secondHalf);
console.log(firstHalf + ' ' + secondHalf);
console.log(firstHalf.concat(secondHalf));
console.log(
  firstHalf
    .concat(secondHalf)
    .concat(secondHalf)
    .concat(secondHalf)
    .concat(secondHalf)
    .concat(secondHalf)
    .concat(secondHalf)
);
console.log(`${firstHalf} to the ${secondHalf}`);

// Functions
function multiply(num1, num2) {
  return num1 * num2;
  console.log(num1 * num2);
}
console.log(1 * 2);
// console.log( multiply(3, 7) );
let x6 = multiply(6, 6);
console.log(x6);
x6 = 42;
console.log(x6);
const mutate = '123'
// mutate.concat('4')
// console.log(mutate);

let outer = 0;

function increment() {
  outer++
};
increment()
increment()
increment()
increment()
increment()
increment()
console.log(outer);

function divideBy2(num) {
  multiply(num, num);
  console.log('inside divide:', num / 2);
  return num / 2;
  // return undefined;
}

let value = divideBy2(multiply(2,2))
console.log('return of divide:', value);