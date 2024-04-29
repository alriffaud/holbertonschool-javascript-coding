#!/usr/bin/node
// This script prints the number of movies where the character “Wedge Antilles” is present.
const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 4-starwars_count.js <API_URL>');
  process.exit(1);
}
const apiUrl = process.argv[2];
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.log(err);
  } else {
    const data = JSON.parse(body);
    let count = 0;
    for (const film of data.results) {
      for (const character of film.characters) {
        if (character.includes('18')) {
          count++;
          break;
        }
      }
    }
  }
  console.log(count);
});
