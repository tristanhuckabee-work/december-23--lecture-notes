// TIME COMPLEXITY
// O(n)
function someOther() {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// n + n^2 => O(n^2)
function someFunction(arr) {
  for (let i = 0; i < arr.length; i++) {
    someOther()
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// O(1)
function constant() {
  return 1 + 2;
}

// SPACE COMPLEXITY
// O(1)
function a() {
  let name = 'hello';
  let bigString = 'asdfasdfasdgadfghadfgfasdfwaefasdfasdfasd'
}
// O(n)
function b() {
  let arr = [1,2,3,4,5,6,7,9,];
  let obj = {key: 'hello', second: 'hello2'}
}
// O(n^2)
function c() {
  let arr = [[1,2,3], [4,5,6], [7,8,9]]
  let obj = {key: [1,2,3], second: {name: 'Joe'}}
}

//O(n)
function copyArr(arr) {
  let res = [];
  arr.forEach(el => res.push(el));
  return res;
}
//O(1) / O(n)
function IPcopyArr(arr) {
  arr.forEach((el, i) => {
    arr[i] = el + 1;
  })
  return arr;
}


function test() {
  for (let i = 0; i < 10; i++) {
    console.log('Hello');
  }
}

let startTime = Date.now();
test();
let endTime = Date.now();

console.log('Time: ', endTime - startTime);