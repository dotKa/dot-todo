// app/routes/routelist.js

// load the todolist model

var Todolist = require('mongoose').model('TodoList');


module.exports = function(app) {
    app.get('/api/todos/list', function(req, res) {

        // use mongoose to get all todolists in the database
        Todolist.find(function(err, todos) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(todos); // return all todolists in JSON format
        });
    });

    // create todolist and send back all todos after creation
    app.post('/api/todos/list', function(req, res) {

        // create a todolist, information comes from AJAX request from Angular
        Todolist.create({
            text: req.body.text,
            listname: req.body.listname,
            userdata: req.body.userdata,
            color: req.body.color,
            usercheck: req.body.usercheck,
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todolists after you create another
            Todolist.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });

    });


    // delete a todolist
    app.delete('/api/todos/list/:todo_id', function(req, res) {
        Todolist.remove({
            _id: req.params.todo_id
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todolists after you create another
            Todolist.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });
    });


};
