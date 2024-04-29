#!/usr/bin/node
// This script computes the number of tasks completed by user id.
const request = require('request');
const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error("Error fetching data from API:", error);
    return;
  }

  processData(body);
});

function processData(body) {
  const tasks = JSON.parse(body);
  const completedTasks = countCompletedTasks(tasks);
  console.log(completedTasks);
}

function countCompletedTasks(tasks) {
  const completedTasks = {};

  for (const task of tasks) {
    if (task.completed) {
      if (completedTasks[task.userId]) {
        completedTasks[task.userId]++;
      } else {
        completedTasks[task.userId] = 1;
      }
    }
  }

  return completedTasks;
}
