const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let first;
let second;

rl.question('Enter a number: ', answer => {
  first = answer;
  rl.question('Enter a number: ', answer_2 => {
    second = answer_2;

    console.log(`${first} + ${second} = ${Number(first) + Number(second)}`);
    rl.close();
  });
});