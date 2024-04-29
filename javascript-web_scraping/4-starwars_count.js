#!/usr/bin/node
// This script prints the number of movies where the character “Wedge Antilles” is present.
const request = require('request');
const apiUrl = process.argv[2];
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error.message);
  } else {
    const data = JSON.parse(body).results;
    let count = 0;
    data.forEach(character => {
      if (character.includes('18')) {
        count++;
      }
    });
    console.log(count);
  }
});
