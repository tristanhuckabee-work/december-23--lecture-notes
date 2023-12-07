// STRINGS
const myString = 'hello class'
console.log(myString);
console.log(myString.length);
console.log('this is a regular string'.length);
console.log(myString[0]);
console.log(myString[11]);
console.log(myString.indexOf('z'));
console.log(myString.indexOf('l', 3));
console.log(myString.indexOf('cla'));
console.log(myString.indexOf(' '));
let secondWord = myString.slice(myString.indexOf(' ') + 1);
console.log(secondWord);

console.log('hello' + 'goodbye');
console.log('hello' + ' ' + 'goodbye');
console.log('hello'.concat('goodbye'));
// FUNCTIONS
function multiply(num1, num2) {
  // console.log(num1 * num2);
  return num1 * num2;
}
function sayHello(name) {
  console.log('Hello ' + name)
  return 1;
}

multiply(6, 5)
multiply(6, 5, 4)
multiply(6)

sayHello('John');
sayHello();

let value = sayHello('Teddy');
value = multiply(1,2);
console.log('Value: ', value);