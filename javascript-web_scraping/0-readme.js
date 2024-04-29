#!/usr/bin/node
// This script reads and prints the content of a file.
const fs = require('fs');

if (process.argv.length !== 3) {
  console.error('Usage: ./0-readme.js <file_path>');
  process.exit(1);
}
const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
