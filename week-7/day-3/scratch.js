const {Book, Stationary, Pen} = require('./inheritance.js');

let im = new Book('Invisible Monsters', 'N/A', 'Chuck Palahniuk');
let fc = new Book('Fight Club', 'N/A', 'Chuck Palahniuk');
console.log(Book.getBookCount()); //2

// console.log(im.getBookCount());

console.log(im.getInfo());
console.log(fc.getInfo());

let sta = new Stationary('indexCard', 'paper', 'orange', 'notepad');
let pen = new Pen('gel', 'plastic', 'blk', 'pilot', 'blk', 5);
// console.log(pen);

pen.write('Hello!');
pen.refill();
pen.write('Hello!');
// console.log(Book.author);

// console.log(pen instanceof Stationary);

// Book.changeAuthor(im, fc);
// console.log(im.getInfo());
// console.log(fc.getInfo());