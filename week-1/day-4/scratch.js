function addOrSubtract(num1, num2, op) {
  // if (op === '+') {
  //   console.log(num1 + num2)
  // } else if (op === '-') {
  //   console.log(num1 - num2)
  // } else {
  //   console.log('Operation not Accepted');
  // }
  // if (num1 % 2 === 0 && num2 % 2 === 0) {
  //   console.log(`Num1 & Num2 are Even`)
  // }
  // if (op === '+') {
  //   console.log('Second Conditional')
  // }
  if (op === '+') {
    console.log('plus')
    return;
  }
  if (op === '-') {
    console.log('minus')
    return;
  }
  console.log('hello')
}
addOrSubtract(2, 2, '+');
addOrSubtract(1, 2, '-');
addOrSubtract(1, 2, '*');

let fruits = ['apple', 'banana', 'dragonfruit'];
let veggies = ['asparagus', 'carrot', 'corn', 'celery'];
// // let veggies= new Array();
// console.log(fruits[1]);
// console.log(fruits.indexOf('apple'));
// console.log(fruits.indexOf(23));
// // console.log(fruits + veggies);
// console.log(fruits.concat(veggies));
//      initial  , condition     , step
// for (let i = 0; i < array.length; i++) {}
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(i, fruits[i]);
}

console.log('\n\n');

// let isTrue = true;
// let count = 0;

// while (isTrue) {
//   console.log('iterated')
//   if (count < 10) {
//     count ++
//   } else {
//     isTrue = false
//   }
// }


// let fruits = ['apple', 'banana', 'dragonfruit'];
// let veggies = ['asparagus', 'carrot', 'corn', 'celery'];
let i = 0; // initial
while (i < fruits.length ) { //condional
  console.log(i, fruits[i]);
  for (let k = 0; k < veggies.length; k++) {
    console.log(k, veggies[k]);
  }
  i++; //step
}