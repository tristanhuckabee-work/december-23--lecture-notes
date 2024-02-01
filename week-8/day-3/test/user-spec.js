const { expect } = require('chai');

const User = require('../user.js');

let user;
let user2;
beforeEach(() => {
  user = new User('Tristan', 28);
  user2 = new User('Trevor', 24);
})

describe('User Class', () => {
  describe('constructor', () => {
    it('should create a new user', () => {
      expect(user).to.exist;
      expect(user2).to.exist;
    });
    it('should have a name', () => {
      expect(user.name).to.equal('Tristan');
      expect(user.name).to.not.equal('Trevor');
    })
    it('should have a age', () => {
      expect(user.age).to.equal(28);
    })
  });
  describe('addFriend()', () => {
    it('User should have a friends array', () => {
      expect(Array.isArray(user.friends)).is.true;
      expect(Array.isArray(user.friends)).to.equal(true);
    });
    it('User should have method addFriend()', () => {
      expect(user.addFriend).to.exist;
      expect(typeof(user.addFriend)).to.equal('function');
    });
    it('Should add a User Instance to friends', () => {
      user.addFriend(user2);
      expect(user.friends[0] instanceof User).to.be.true;
    })
  })
});