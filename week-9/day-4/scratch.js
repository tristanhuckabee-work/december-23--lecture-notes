// c = 1100 =>
// 3 = 0011 =>
// 2 = 0010 =>
// f = 1111 =>
// 1111001000111100

// get char from decimal charCode on ASCII table
console.log( String.fromCharCode(101) ); //e
// get decimal charCode from char on ASCII table
console.log( 'hello'.charCodeAt(2) );    //101
// convert string of base-x to decimal number
let bin = '0b11111010110110101010101001010'
bin = bin.split('b')[1];
console.log( parseInt(bin, 2) ); //526,079,306
// convert decimal number to string of base-x
let num = 526
console.log( num.toString(16) ) // 0x20E

// 0x -> hexadecimal
// 0b -> binary
// 0c