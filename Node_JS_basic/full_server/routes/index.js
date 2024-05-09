// This script links the route / to the AppController and
// links the route /students and /students/:major to the StudentsController.

const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();
// eslint-disable-next-line jest/require-hook
router.get('/', AppController.getHomepage);
// eslint-disable-next-line jest/require-hook
router.get('/students', StudentsController.getAllStudents);
// eslint-disable-next-line jest/require-hook
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
