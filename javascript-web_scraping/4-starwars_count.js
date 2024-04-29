#!/usr/bin/node
// This script prints the number of movies where the character “Wedge Antilles” is present.
const request = require("request");

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error.message);
  } else {
    const data = JSON.parse(body);
    let count = 0;
    for (const result of results) {
      if (result.characters) {
        for (const character of result.characters) {
          if (character.includes("18")) {
            count++;
          }
        }
      }
    }
    console.log(count);
  }
});
