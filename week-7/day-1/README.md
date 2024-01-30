# Context
Every function that is invoked has both a **scope** and a **context**.
- `Scope` refers to the visibility and availability of variables.
- `Context` refers to the value of **this** when the code is executed.

**this** exists in every function and it evaluates to the object that is currently invoking the function. **this** relies on where a function is invoked.
```javascript
class Dog {
  constructor(name, isSitting) {
    this.name = name;
    this.isSitting = isSitting;
  }

  stand() {
    this.isSitting = false;
    return this.isSitting;
  }
}

let dog = new Dog("Bowser", true);

// Bowser starts out sitting
console.log(dog.isSitting); // prints `true`

// Let's make him stand
console.log(dog.stand()); // prints `false`

// He's actually standing now!
console.log(dog.isSitting); // prints `false`
```
Here we're using **dot notation** to invoke the methods which means that the `dog` instance is calling the function, so **this** is that instance.
```javascript
function logThis() {
  console.log(this);
}

logThis() // ???
```
In this case, because we're not using dot notation, the function is being called by the `Global` object.

# Bind
The `bind` method will ensure that a function will always be called with the same context as you passed in.

Returns the function with its context set.
```javaScript
class Cat {
  purr() {
    console.log("meow");
  }
  purrMore() {
    this.purr();
  }
}

let cat = new Cat();
let sayMeow = cat.purrMore;
// this is the Global Object Global.sayMeow()
sayMeow(); // TypeError: this.purr is not a function

// You can now use the built in Function.bind to ensure your context, `this`,
// is the cat object
let boundCat = sayMeow.bind(cat);

// You still *need* to invoke the function
// this is the cat instance = cat.sayMeow()
boundCat(); // prints "meow"
```

# Call and Apply
`call` and `apply` work very similarly to bind, however the syntax is different.
- `call` and `apply` invoke the function they're being called on
- both take in a context to bind to as the first argument
- both take in parameters needed for the functions as the second+ args
- `call` takes in comma-deliniated args
- `apply` takes in an array
```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Cat {
  constructor(name) {
      this.name
  }
  purrNTimes(n) {
      for(let i = 0; i < n; i++) {
          console.log(`${this.name} says: meow`);
      }
  }
}

let dog = new Dog('Fido');
let cat = new Cat('Meowser');

// make Fido meow 5 times using `call`
cat.purrNTimes.call(dog, 5);

// make Fido meow 5 times using `apply`
cat.purrNTimes.apply(dog, [5]);
```

## Context in Arrow Functions
Arrow Functions' context is based on wherre it was declared not where it was called.
```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark = () => {
    console.log(`${this.name} barked at you`);
  }
}

const fido = new Dog("Fido");
fido.bark(); // Fido barked at you
const fidoBark = fido.bark;
fidoBark();  // Fido barked at you
```