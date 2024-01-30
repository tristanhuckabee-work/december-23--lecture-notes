// function test() {
//   console.log(this)
// }

// test();
class Dog {
  constructor(name, isSitting) {
    this.name = name;
    this.isSitting = isSitting;
  }

  stand() {
    this.isSitting = false;
    return this.isSitting;
  }
  bark = () => {
    console.log(`${this.name} barked at you!`)
  }
}

let bowser = new Dog("Bowser", true);
let spot= new Dog('Spot', false);

// Bowser starts out sitting
console.log(bowser.isSitting); // prints `true`

// Let's make him stand
// console.log(bowser.stand()); // prints `false`
let makebowserStand = bowser.stand
let boundStand = makebowserStand.bind(bowser);

console.log('call',  bowser.stand.call(bowser)); // commas
console.log('apply', bowser.stand.apply(bowser));// array

boundStand();
console.log(bowser.isSitting); // prints `false`

// He's actually standing now!

bowser.bark();
const bowserBark = bowser.bark;
bowserBark();
const spotBark = spot.bark;
spotBark();

