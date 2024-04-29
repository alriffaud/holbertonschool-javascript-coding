#!/usr/bin/node
// This script prints the number of movies where the character “Wedge Antilles” is present.
const request = require('request');

if (process.argv.length !== 2) {
  console.error('Usage: node 4-starwars_count.js <API_URL>');
  process.exit(1);
}
const apiUrl = process.argv[2];

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  if (response.statusCode !== 200) {
    console.error('Unexpected status code:', response.statusCode);
    return;
  }
  try {
    const films = JSON.parse(body).results;
    let count = 0;
    if (films) {
      for (const film of films) {
        if (film.characters.includes('https://swapi-api.hbtn.io/api/people/18/')) {
          count++;
        }
      }
      console.log(count);
    } else {
      console.error('films not found');
    }
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});
