// importing the schema for tasks
const Task = require('../models/task');


// for deleating a task
module.exports.delete = function(req,res){

    // get the id from query in the ul
    var id = req.query;

    // checking the number of tasks selected to delete

    var count=Object.keys(id).length;
    for(let i=0; i < count; i++){

            // find the task in database using id and delete
            Task.findByIdAndDelete(Object.keys(id)[i],function(err){
            if(err){
                console.log('error in deleating the task from database');
                return;
            }
            
        });
    }
    return res.redirect('back');

}