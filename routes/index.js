const express = require('express');
const router=express.Router();


const homeController=require('../controllers/home_controller');

// for homepage request
router.get('/',homeController.home);

// for create task request
router.use('/create-task',require('./create'));

// for delete task request
router.use('/delete-task',require('./delete'));

module.exports = router;