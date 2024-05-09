// This script creates a small HTTP server using the http module.
const express = require('express');
const fs = require('fs').promises;

async function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const str = data.toString();
      const arr = str.split('\n').slice(1);
      const filter = arr.filter((line) => line !== '');
      const namesByField = {};
      filter.forEach((line) => {
        const elements = line.split(',');
        const firstName = elements[0];
        const field = elements[3];

        if (!namesByField[field]) {
          namesByField[field] = [];
        }
        namesByField[field].push(firstName);
      });
      const results = [`Number of students: ${filter.length}`];
      const fields = Object.keys(namesByField);
      for (const field of fields) {
        const names = namesByField[field];
        const count = names.length;
        const list = names.join(', ');
        results.push(`Number of students in ${field}: ${count}. List: ${list}`);
      }
      return results;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}
const app = express();
// eslint-disable-next-line jest/require-hook
app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});
// eslint-disable-next-line jest/require-hook
app.get('/students', (req, res) => {
  const path = process.argv[2];
  res.write('This is the list of our students\n');
  countStudents(path)
    .then((data) => {
      res.end(data.join('\n'));
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});
// eslint-disable-next-line jest/require-hook
app.listen(1245);

module.exports = app;
