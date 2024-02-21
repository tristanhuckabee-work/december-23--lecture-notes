// 2 ** 2
// log2(32) => 16 => 8 => 4 => 2 => 1
// log2(32) = 5
// 2**5 = 32

// log2(number of nodes) = height => O(logn)

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
let a = new Node(7);
let b = new Node(5);
let c = new Node(8);
let d = new Node(4);
let e = new Node(6);
let f = new Node(9);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function binaryTreeSearch(root, target) {
  if (!root) return false;
  if (root.val === target) return true;
  if (target < root.val) return binaryTreeSearch(root.left, target);
  return binaryTreeSearch(root.right, target)
}

// console.log(binaryTreeSearch(a, 8));

function dftRecursive(root) {
  if(!root) return;
  // console.log(root.val); // 754689
  dftRecursive(root.left)
  // console.log(root.val); // 456789
  dftRecursive(root.right)
  console.log(root.val); // 465987

}

// dftRecursive(a);

function BFT(root) {
  let queue = [root]

  while (queue.length) {
    let curr = queue.shift()
    if (!curr) continue;
    console.log(curr.val)
    queue.push(curr.left)
    queue.push(curr.right)
  }
}
function DFT(root) {
  let stack = [root]

  while (stack.length) {
    let curr = stack.pop()
    if (!curr) continue;
    console.log(curr.val)
    stack.push(curr.right)
    stack.push(curr.left)
  }
}

// BFT(a) // 7 58 469
DFT(a) // 754689