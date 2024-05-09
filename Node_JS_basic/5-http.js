// This script creates a small HTTP server using the http module.
const http = require('http');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const DATABASE = args[0];

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;

  if (url === '/') {
    res.write('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students');
    try {
      countStudents(DATABASE);
      res.end();
    } catch (error) {
      res.end(error.message);
    }
  }
  res.statusCode = 404;
  res.end();
}).listen(1245);

module.exports = app;
