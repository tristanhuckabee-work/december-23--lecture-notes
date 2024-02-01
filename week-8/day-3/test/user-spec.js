const { expect } = require('chai');
const User = require('../user.js');

describe('User Class', function() {
  let users = [];
  let sayHello;

  beforeEach(() => {
    users = [];
    users.push(new User('Tristan', 28))
    users.push(new User('Trevor', 24))
  });

  it('should be created', function() {
    expect(users[0]).to.exist;
    expect(users[1]).to.exist;
  })
  it('should have a name', function() {
    expect(users[0].name).to.equal('Tristan');
    expect(users[1].name).to.not.equal('Tristan');
    expect(users[1].name).to.equal('Trevor');
  })
  it('should have an age', function() {
    expect(users[0].age).to.equal(28);
  })
  it('should say hello', function() {
    let reses = ['Tristan is 28 years old.', 'Trevor is 24 years old.']
    users.forEach((user, i) => {
      expect(user.sayHello()).to.equal(reses[i]);
    })
  })
})