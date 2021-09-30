const express = require('express');
const router = express.Router();


const createTask = require('../controllers/create_controller');

// for create task request
router.post('/',createTask.create);

module.exports = router;
