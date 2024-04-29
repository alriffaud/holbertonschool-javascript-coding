#!/usr/bin/node
// This script gets the contents of a webpage and stores it in a file.
const request = require('request');
const fs = require('fs');

if (process.argv.length !== 4) {
  console.error('Usage: node 5-request_store.js <URL> <file_path>');
  process.exit(1);
}
const url = process.argv[2];
const filePath = process.argv[3];
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  if (response.statusCode !== 200) {
    console.error('Unexpected status code:', response.statusCode);
    return;
  }

  // Write the body response to the specified file path
  fs.writeFile(filePath, body, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('Content has been written to', filePath);
  });
});
