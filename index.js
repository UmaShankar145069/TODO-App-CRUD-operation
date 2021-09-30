const express = require('express');
const port = 5000;

// importing the database
const db = require('./config/mongoose');


// using express
const app = express();


// using static files
app.use(express.static('./assets'));

// to use encrypted data
app.use(express.urlencoded());


//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');


// use express router
app.use('/',require('./routes'));




// app is listening on asigned port number

app.listen(port,function(err){

    if(err){
        console.log(`Server is experencing an error: ${err}`);
    }

    console.log(`Server is running properly on port: ${port}`);
}); 