# OOP - Object Oriented Programming
An approach for breaking down large, complex products into simple solutions.

## Encapsulation
Putting behavior and data together behind an API (Application Programming Interface) that hides the implementation details.

Code that uses the object doesn't need to know how the code works, just how to use it.

The complexity is hidden inside of a 'black box'.

```javaScript
// we don't need to know how reduce works behind the scenes, just what it needs and what it returns.
let result = someArr.reduce((accum, el) => accum += el)
```
## Classes
### Constructor
Defines the rules for creating a new instance of a class.
### Instance Methods
Methods invoked by an instance of a class.
### Static Methods (aka Class Methods)
Methods invoked directly on a class, not an instance.

They can perform actions across groups of instances.
### Static Variables
Variables or properties not accessible via class instances but directly by the class.
```javaScript
class Book {
  constructor(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;

    Book.numBooks += 1;
  }
  static numBooks = 0;

  getInfo() {
    return `${this.title} by ${this.author}`;
  }
  static getTitles(...books) {
    return books.map((book) => book.title);
  }
}
const fellowshipOfTheRing = new Book(
 'Invisible Monsters',
 'N/A',
 'Chuck Palahniuk');
```
## Inheritance
The properties and methods defined on a parent class are available on objects created from classes that inherit from those parent classes.
### Super
A function in the constructor that calls the constructor of the parent class
```javaScript
class Stationary {
  constructor(type, material, bodyColor, label) {
    this.type = type;
    this.material = material;
    this.bodyColor = bodyColor;
    this.label = label;
  }

  write(msg) {
    console.log(msg);
  }
}

class Pen extends Stationary {
  constructor(type, material, bodyColor, label, inkColor = 'blk', inkLevel = 100) {
    super(type, material, bodyColor, label);
    this.inkColor = inkColor;
    this.inkLevel = inkLevel;
  }
  
  refill() {
    this.inkLevel = 100;
  }
}
```
## Polymorphism
Processing various data types and classes through a single, uniform interface.

The two most common types of polymorphism are `overloading` and `overriding`.
### Function Overloading
Sending a different number or type of parameters to a particular function.
```javaScript
sum(number1, number2)
sum(listOfNumbers)
```
### Function Overriding
When a child class gives its own - or a variation of - the implementation of a function from one of its ancestor classes.
```javaScript
class Stationary {
  constructor(type, material, bodyColor, label) {
    this.type = type;
    this.material = material;
    this.bodyColor = bodyColor;
    this.label = label;
  }

  write(msg) {
    console.log(msg);
  }
}

class Pen extends Stationary {
  constructor(type, material, bodyColor, label, inkColor = 'blk', inkLevel = 100) {
    super(type, material, bodyColor, label);
    this.inkColor = inkColor;
    this.inkLevel = inkLevel;
  }
  
  write(msg) {
    console.log(`Pen writes ${msg}`);
  }
  refill() {
    this.inkLevel = 100;
  }
}
```
