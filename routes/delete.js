const express = require('express');
const router = express.Router();


const deleteTask = require('../controllers/delete_controller');

// for delete task request
router.get('/',deleteTask.delete);

module.exports = router;