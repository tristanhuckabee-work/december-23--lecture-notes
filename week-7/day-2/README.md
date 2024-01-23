## Reading Tests
Even without fully understanding the syntax we can read most tests :
```javascript
describe("avgValue()", function() {
  it("should return the average of an array of numbers", function() {
    assert.equal(avgValue([10, 20]), 15);
    assert.equal(avgValue([5,5,5]), 5);
  });
});
```
From this we can tell that the spec *' should return the average of an array of numbers '*, that the return of *avgValue([10, 20])* should equal *15*.
## DRY - Don't Repeat Yourself
A principle of software development aimed at reducing repetition of software patterns, replacing it with abstractions or using data normalization to avoid redundancy.

`The opposite of DRY is WET - Write Everything Twice`
## SRP - Single Responsibility Principle
Every module, class or function in a computer program should have responsibility over a single part of that program's functionality.

`Makes Code Easier to Change` : If your function is doing too many things, then it will be hard to isolate the part that needs the change to be applied.
## CommonJS Modules
In Node.js, each JavaScript file defines a `module`.
- Modules defined within the project are known as `local modules`
### Exporting Modules
- Exporting Multiple Items from a Module
```javaScript
module.exports = {
  add,
  subtract,
  operations
};
```
- Set Properties on the module.exports object
```javaScript
module.exports.add = add;
module.exports.subtract = subtract;
module.exports.operations = operations;
```
- Using the exports shorthand
```javaScript
exports.add = add;
exports.subtract = subtract;
exports.operations = operations;
```
### Importing Modules
Importing from `calculator.js` into `scratch.js` :
```javaScript
// The entire exported object
const calculator = require('./calculator.js');

// Only the properties we destructor from the exported object
const { add, subtract } = require('./calculator.js');
```
- Whatever we exported is saved to `calculator`.
- We can only perform destructuring if we export an Array or POJO