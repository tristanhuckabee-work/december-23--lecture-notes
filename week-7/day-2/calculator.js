const operations = ['+', '-', '*', '/'];

const add      = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2; 
const multiply = (num1, num2) => num1 * num2; 
const divide   = (num1, num2) => num1 / num2;


// Exports
// module.exports = operations;

// module.exports = {
//   add : add,
//   subtract,
//   operations
// }

// module.exports.add = add;
// module.exports.subtract = subtract;
// module.exports['operations'] = operations;

exports.add = add;
exports.subtract = subtract;
exports.operations = operations;