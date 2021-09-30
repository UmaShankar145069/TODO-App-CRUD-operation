// importing the schema for tasks
const Task = require('../models/task');


// for creating a task
module.exports.create = function(req,res){

    console.log(req.body);
    Task.create({
        description: req.body.description,
        date: req.body.date,
        category: req.body.category
    },function(err,newTodo){
        if(err)
        {
            console.log('error in creating a todo list',err);
            return;
        }

        console.log('**************',newTodo);
        return res.redirect('back');
    });

}