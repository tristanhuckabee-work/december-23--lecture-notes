class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.friends = [];
  }

  addFriend(friend) {
    this.friends.push(friend);
    return this.friends;
  }
}

module.exports = User;