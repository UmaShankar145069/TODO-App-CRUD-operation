// importing the schema for tasks
const Task = require('../models/task');


// for homepage request
module.exports.home = function(req,res){

    Task.find({},function(err,task){
        if(err){
            console.log('Error in fetching tasks from db');
            return;
        }
        return res.render('home',{
            title: "TODO APP",
            todo_list: task
    
        });
    

    });
        
    
}