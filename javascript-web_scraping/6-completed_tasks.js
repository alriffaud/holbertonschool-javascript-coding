#!/usr/bin/node
// This script computes the number of tasks completed by user id.
const request = require('request');
const apiUrl = process.argv[2];

request.get(apiUrl, { json: true }, (err, response, body) => {
  if (err) {
    console.log(err);
    return;
  }
  const completedTasks = {};
  body.forEach(task => {
    if (task.completed) {
      if (!completedTasks[task.userId]) {
        completedTasks[task.userId] = 0;
      }
      completedTasks[task.userId]++;
    }
  });
  console.log(completedTasks);
});
