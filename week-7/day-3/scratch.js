const {Book, Stationary, Pen} = require('./inheritance.js');

let im = new Book('Invisible Monsters', 'n/a', 'Chuck Palahniuk');
let fc = new Book('Fight Club', 'n/a', 'Chuck Palahniuk')

// console.log(im);
// console.log(fc);
// console.log(fc.changeAuthor('JRR Tolkien'));
// fc.changeAuthor('Tristan Huckabee')
// console.log(fc);

// Book.getCount();
// fc.getCount();

let pen = new Pen();
console.log(pen);
pen.write('Hello!')
pen.write('Hello!')
pen.write('Hello!')
pen.write('Hello!')
pen.write('Hello!')
pen.write('Hello!')
pen.write('Hello!')

console.log(pen.inkLevel);