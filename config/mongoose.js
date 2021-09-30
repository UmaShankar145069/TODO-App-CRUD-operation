// require the library
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost/todo_list_db');


// checking the connection is successful
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console,'error connecting to db'));

// message on successful connection
db.once('open',function(){
    console.log('Successfully connected to the database');
});

// exporting the database
module.exports = db;