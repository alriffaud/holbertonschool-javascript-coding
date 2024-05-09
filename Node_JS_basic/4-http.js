// This script creates a small HTTP server using the http module.
const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

// eslint-disable-next-line jest/require-hook
app.listen(1245);

module.exports = app;
