class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `${this.name} is ${this.age} years old.`
  }
}

module.exports = User;