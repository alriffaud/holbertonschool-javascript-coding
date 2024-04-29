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
  const todo = JSON.parse(body);
  todo.forEach(task => {
    if (task.completed) {
      if (!completedTasks[task.userId]) completedTasks[task.userId] = 1;
      else completedTasks[task.userId] += 1;
    }
  });
  console.log(completedTasks);
});
