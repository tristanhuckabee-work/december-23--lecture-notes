# Arrays & Stacks
## Arrays
Arrays are the most time and space efficient way to store data and should be thoroughly understood.

__An array is a sequence of elements of the same type stored in a contiguous block of memory.__

```js
// An array containing 4 32-bit integers
array = [1, 23, 456, 7890 ]
```
Our memory may look something like this:
```javaScript
// 104      105      106      107
00000000 00000000 00000000 00000001 => 1
// 108      109      110      111
00000000 00000000 00000000 00010111 => 23
// 112      113      114      115
00000000 00000000 00000001 11001000 => 456
// 116      117      118      119
00000000 00000000 00011110 11010010 => 7890
```
As we can see, the values are stored, end to end with no space between, so arrays are the __optimally space-efficient__ method for data storage.

When we want to access array[2], javascript runs this, under the hood:`valueAddress = startAddress + index * sizeOf(dataType)`.

```
valueAddress = 104 + 2*4 => 112
```
This means the look up the index of an array is O(3) => O(1)

This may seem weird considering in JS you don't have to store only numbers or only strings, but that's because JS is wonky in that it actually elements as a generic data object, specifically a hash-table (a type of object).
## Array Resizing
Previously we saw that to store 4 32-bit integers our memory may look like this:
```javaScript
// 104      105      106      107
00000000 00000000 00000000 00000001 => 1
// 108      109      110      111
00000000 00000000 00000000 00010111 => 23
// 112      113      114      115
00000000 00000000 00000001 11001000 => 456
// 116      117      118      119
00000000 00000000 00011110 11010010 => 7890
```
If we want to push, usually a O(1) operation, another element into our array we need an additional 4 bytes of memory. But we can't guarantee that the next 4 bytes will be available.
```javaScript
// 104      105      106      107
00000000 00000000 00000000 00000001 => 1
// 108      109      110      111
00000000 00000000 00000000 00010111 => 23
// 112      113      114      115
00000000 00000000 00000001 11001000 => 456
// 116      117      118      119
00000000 00000000 00011110 11010010 => 7890
// 120      121      122      123
11111111 11111111 11111111 11111111 => some string    
```
What happens now?

Now we have to search through memory and move each element to the new area. This makes push an O(n) operation.
Because of `resizing`, arrays actually overallocate memory to ensure that push will be O(1) time. So if you want 4 blocks it may save 9, then when you get to 10 elements, it may resize to 15 or so.
```javaScript
// We see:
[1,23,456,7890]
// JS sees:
[1,23,456,7890, <empty>, <empty>, <empty>, <empty>]
```

## Push v Unshift v Splice
Push = O(1)
### Unshift
In order to add to the front we need to shift everything, then add the new value so it's O(n).
```javaScript
//100-104 105-108 109-112 113-116 117-120
  number  number  number  number  empty
//100-104 105-108 109-112 113-116 117-120
  number  number  number  empty   number
//100-104 105-108 109-112 113-116 117-120
  number  number  empty   number  number
//100-104 105-108 109-112 113-116 117-120
  number  empty   number  number  number
//100-104 105-108 109-112 113-116 117-120
  empty   number  number  number  number
//100-104 105-108 109-112 113-116 117-120
  newNumb number  number  number  number
```
### Shift
The same happens when we shift but in reverse
### Splice
If you splice at the end : it's a push/pop
If you splice at the beginning : it's a unshift/shift
If you splice in the middle it's O(n) because we don't care about the fraction of n you're modifying.

## Stacks
Stacks are an `abstract data type` that follows the rule of __first in, first out (FIFO)__ or __last in, last out (LIFO)__.

When you add to a stack, you're pushing to the stack.

When you remove from a stack, you're popping from the stack.