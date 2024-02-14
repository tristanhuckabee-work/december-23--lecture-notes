const sha256 = require('js-sha256');

let data = [null, null, null, null, null, null, null, null, null, null];

function hash(str) {
  let hashValue = 0;

  for (let i = 0 ; i < str.length ; i++) {
    hashValue += str.charCodeAt(i);
  }

  return hashValue;
}
function hashMod(key) {
  return hash(key) % data.length;
}
data[hashMod('hello')] = 'hello';
// console.log(data);

class KeyValPair {
  constructor(key, val) {
    this.key = key;
    this.value = val;
    this.next = null;
  }
}
class HashTable {
  constructor() {
    // this.data = [null, null, null, null, null, null, null, null, null, null];
    this.data = new Array(10).fill(null);
  }

  addToHead(head, node) {
    node.next = head;
    return node;
  }
  addData(key, value) { //O(1)
    let pair = new KeyValPair(key, value);
    let mod = hashMod(key); // worst- O(n) Average-case O(1)

    if (!this.data[mod]) {
      this.data[mod] = pair;
      return;
    }
    this.data[mod] = this.addToHead(this.data[mod], pair);
  }
  getData(key) {
    let mod = hashMod(key);

    return this.data[mod];
  }
}

let htable = new HashTable();
htable.addData('hello', 'hi');
htable.addData('R', 'collided?')

// console.log(htable.getData('hello'));
console.log(htable.data);

// console.log(sha256('superSecretPassword'));
// console.log(sha256('asdflkasjdf;lkasdjf;lasdkjfas;dlkfjasd;lfk'));
// console.log(sha256('super'));