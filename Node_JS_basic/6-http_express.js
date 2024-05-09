// This script creates a small HTTP server using Express module.
const express = require('express');

const app = express();
// eslint-disable-next-line jest/require-hook
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
// eslint-disable-next-line jest/require-hook
app.listen(1245);

module.exports = app;
