// This script creates a program named 1-stdin.js that will be executed through command line.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// eslint-disable-next-line jest/require-hook
console.log('Welcome to Holberton School, what is your name?');
// eslint-disable-next-line jest/require-hook
rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  console.log('This important software is now closing');
  rl.close();
});
