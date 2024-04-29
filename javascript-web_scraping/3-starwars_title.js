#!/usr/bin/node
// This script prints the title of a Star Wars movie where the episode number matches a given integer.
const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 3-starwars_title.js <movie_ID>');
  process.exit(1);
}
const movieID = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieID}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  if (response.statusCode !== 200) {
    console.error('Unexpected status code:', response.statusCode);
    return;
  }
  try {
    const movie = JSON.parse(body);
    if (movie.title) {
      console.log(movie.title);
    } else {
      console.error('Movie title not found');
    }
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});
