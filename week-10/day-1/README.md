# Linked Lists
A linked list is an ordered sequence of nodes. Each node consists of a data value and a pointer to the next node.
```javaScript
class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
```
The linked list is just a pointer to the first node, aka the `head`.

The list continues until it reaches a 'null' node pointer.
```javaScript
/// ...
class LinkedList {
  constructor() {
    this.head = null;
  }
}

let node3 = new LinkedListNode(3, null);
let node2 = new LinkedListNode(2, node3);
let node1 = new LinkedListNode(1, node2);

let list = new LinkedList();
list.head = node1;
```
## Abstracting Linked List Operations
The creation of nodes, in a list should be black-boxed. So we'll build methods to add to the head or tail, head is start and tail is end.
```javaScript
class LinkedList {
  // ...
  addToHead(val) {
    // Create new node      => constant
    // Set the next pointer => constant
    // Set the head pointer => constant
    this.head = new LinkedListNode(val, this.head);
  }
}

let list = new LinkedList();
list.addToHead(3);
list.addToHead(2);
list.addToHead(1);
```
## Traversing a Linked List
In order to traverse a linked list, you have to visit each node in order.
```javaScript
class LinkedList {
  // ...
  print() {
    let curr = this.head; // constant

    while (curr) { // linear
      console.log(`${curr.value} ->`); // constant
    }

    console.log('NULL'); // constant
  }
}
```
## Optimizing
Because the head is O(1) because it's already there to get.
- How about add the tail? It's O(n), because we have to iterate tot he end.
- If we add a property, it can be O(1)
- Remove from head, remove from tail
- Doubly Linked List