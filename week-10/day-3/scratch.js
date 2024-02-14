const sha256 = require('js-sha256');

console.log(sha256('hello')) // 53
console.log(sha256('hello')) // 53

console.log(sha256('bill'))  // 41
console.log(sha256('Bill'))  // 38