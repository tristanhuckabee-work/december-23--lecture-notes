const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', answer => {
  rl.question('Enter a number: ', answer_2 => {
    if (Number(answer) > 10) console.log('First > 10')
    if (Number(answer_2) > 10) console.log('Second > 10')
  
    rl.close();
  });
});
// console.log('Wahoo!')
