class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    let newNode = new Node(value, this.head)
    this.head = newNode;

    if (!this.tail) this.tail = newNode;
  }
  addToTail(value) {
    let newNode = new Node(value)

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;

  }
  addAfterVal(target, val) {
    let newNode = new Node(val);
    let curr = this.head;

    while (curr) {
      if (curr.value == target) {
        newNode.next = curr.next;
        curr.next = newNode;
      }
      curr = curr.next;
    }
  }
  print() {
    let curr = this.head;

    while(curr) {
      console.log(`${curr.value} ->`);
      curr = curr.next;
    }

    console.log('NULL');
  }
}

let node3 = new Node(3);
let node2 = new Node(2, node3);
let node1 = new Node(1, node2);
node3.prev = node2;
node2.prev = node1;

let list = new LinkedList();
list.head = node1;
console.log(list.head);

// let list2 = new LinkedList();
// console.log(list2);
// list2.addToHead(4);
// list2.addToHead(3);
// list2.addToHead(2);
// list2.addToHead(1);
// console.log(list2)

// // console.log(list2.head.next);
// // list.print();
// // list2.print();

// let list3 = new LinkedList();
// list3.addToTail(1);
// list3.print();
// list3.addToTail(2);
// list3.addToHead(0);
// list3.addAfterVal(1, 'x');
// list3.print();