function broken() {
  console.log("I'm broken");
}

function CREAM() {
  const money = '$$$';
  // variable 'monie' doesn't exist so we get a ReferenceError
  console.log(money);
}

// CREAM()
// console.log(money);

const dog = 'hello'
// dog()
// dog = 'goodbye';
// console.log(dog);
try {
  // console.log('inside try');
dog = 'goodbye';

  // functio trythis() {return};
} catch (error) {
  console.log(error.name, error.message);
} finally {
  console.log('finally');
}
console.log(dog);

try {
  let myError = new Error('This is my message!!!');
  // throw myError;
  throw new TypeError('This is the wrong type')
} catch(e) {
  console.error(`${e.name}: ${e.message}`);
}