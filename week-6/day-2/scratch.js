// SYNCHRONOUS JS
// console.log(1)
// console.log(2)
// console.log(3)

// ASYNCHRONOUS JS

// console.log(1)
// setTimeout(() => {
//   console.log(2)
// }, 2000);
// setTimeout(() => {
//   console.log(4)
// }, 3000);
// console.log(3);

let to = setTimeout(() => {
  console.log('one sec')
}, 1000);
// clearTimeout(to)

let count = 10;
let iv = setInterval(() => {
  count--;
  console.log('one sec')
  if (count === 0) clearInterval(iv);
}, 250);
// clearInterval(iv)
console.log(to);
