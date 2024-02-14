# Hash Tables aka Hash Maps
You've been using them secretly...
```javaScript
const hashTable = {};
hashTable['key'] = 'val';
hashTable['key']; // 'val'
```
Under the hood, a hashtable is an array with each key run through a hash function to produce an index.

Steps to Making a Hash Table
1. Create an array of a fixed length
```javaScript
let data = [null, null, null, null, null, null, null, null, null, null];
```
2. Create a hasing function to convert your inputs into integers.
```javaScript
function hash(str) {
  let hashValue = 0;

  for (let i = 0 ; i < str.length ; i++) {
    hashValue += str.charCodeAt(i);
  }

  return hashValue;
}
```
3. Modulo the hash to get an index in the array
```javaScript
function hashMod(key) {
  return hash(key) % data.length;
}
```

We could do all of this with a class...
```javaScript
class KeyValPair {
  constructor(key, val) {
    this.key = key;
    this.value = val;
  }
}
class HashTable {
  constructor() {
    this.data = [null, null, null, null, null, null, null, null, null, null];
  }

  addData(key, value) {
    let pair = new KeyValPair(key, value);

    let hash = hashFunction(key);
    let mod = hashMod(hash);

    this.data[mod] = pair;
  }

  getData(key) {
    let hash = hashFunction(key);
    let mod = hashMod(hash);

    return this.data[mod];
  }
}
```
## Hash Functions
A function that maps arbitrary data to a deterministic, fixed-size output.

In Laymen's terms:
1. Takes in an input
2. Runs it through some steps
3. Gets a scrambled output
4. if the input is `x`, the output will always be `y`

Hashing, unlike encryption, is a one-way translation. You CANNOT 'decrypt' a hash.

```javascript
function hashFromCharCodes(str) {
  let total = 0;

  for (let i = 0; i < str.length; i++) {
    total += str.charCodeAt(i);
  }

  return Math.floor(total / 10);
}
hashFromCharCodes('hello') // 53
hashFromCharCodes('hello') // 53

hashFromCharCodes('bill')  // 41
hashFromCharCodes('Bill')  // 38
```
This is, of course, too simple for cryptographic purposes.

For general use, the `SHA` (Secure Hashing Algorithm) is commonly used.

```javascript
const sha256 = require('js-sha256');

sha256('hello') // 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
sha256('hello') // 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
sha256('bill') // 623210167553939c87ed8c5f2bfe0b3e0684e12c3a3dd2513613c4e67263b5a1
sha256('Bill') // e51783b4d7688ffba51a35d8c9f04041606c0d6fb00bb306fba0f2dcb7e1f890
```
Each output is exactly 64 characters long, each is a hexadecimal digit, which represents 4 bits, for a total of 256 bits.
## Hash Collisions
A `hash collision` occurs when two keys would fill the same bucket, a space in the hash table.

You can reduce the likelihood of a collision by making a bigger hash table, but you can never completely avoid them.

### One solution is the use of Linked Lists...
This means each `KeyValuePair` will have a next property, which points to the other entries in the bucket.

Searching for a value with Linked Lists slightly reduces our time efficiency, because of the `O(n)` traversals. However it's not the worst because not every bucket will be a linked-list.
- Worst Case is `O(n) time` and Average Case is `O(1) time`
### Or we could Resize the Array when a collision occurs
## Optimization
- Hashing is technically `O(n) time`, but for strings with < 1000 characters it's basically `O(1) time`
- Modulo operations are `O(1) time`
- Inserting into a hash table is `O(1) time`
- Reading from / Searching a hash table is `O(1) time`
- Hash Tables are `O(n) space`