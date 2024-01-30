function test() {
  let inner = 'hello'
  console.log(this);
}

// console.log(inner);
// global.test()
// test();

class Dog {
  constructor(name, isSitting) {
    this.name = name;
    this.isSitting = isSitting;
    this.toys = [];
  }

  stand() {
    // console.log(this);
    this.isSitting = false;
    return this.isSitting;
  }

  bark = () => {
    console.log(`${this.name} barked at you!`);
  }

  static addToys(...toys) {
    this.toys = this.toys.concat(toys);
    return this.toys;
  }
}
let dave = {
  isSitting: true
}

let bowser = new Dog("Bowser", true);
let spot = new Dog("Spot", true);

// Bowser starts out sitting
// console.log(bowser.isSitting); // prints `true`
// console.log(spot.isSitting);   // true

// Let's make him stand
// console.log(bowser.stand()); // prints `false`
let bowserStand = bowser.stand;
// undefined.stand();
// bowserStand();
let boundStand  = bowserStand.bind(dave);
let bowserBound = bowser.stand.bind(bowser);
// boundStand();


// console.log(bowserStand.bind(spot));   // function
// console.log(bowserStand.bind(spot)()); // false

let addToy = Dog.addToys;

// console.log(addToy.call (spot, 'Green Chewy One', 'Bone'));
// console.log(Dog.addToys.apply(spot, ['Blue Squeaky One', 'Tennis Ball']));

// He's actually standing now!
// console.log(bowser.isSitting); // prints `false`
// console.log(spot.isSitting);   // true

let bowserSpeak = bowser.bark;
let spotSpeak = spot.bark;
bowserSpeak();
spotSpeak();