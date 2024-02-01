function broken() {
  console.log('Hello!')
}
function CREAM() {
  const money = '$$$';
  // variable 'monie' doesn't exist so we get a ReferenceError
  console.log(money);
}
const dog = 'Spot';

try {
  // throw new Error('This is Tristans Error');
  let myError = new TypeError('helloooo');
  // throw myError
} catch(error) {
  console.log(error.name, error.message);
} finally {
  console.log('Wow so many errors');
}
