// js/services/todos.js
angular.module('todoService', [])

    // super simple service
    // each function returns a promise object 
    .factory('Todos', function($http) {
        return {
            get : function() {
                return $http.get('/api/todos');
            },
            create : function(todoData) {
                return $http.post('/api/todos', todoData);
            },
            delete : function(id) {
                return $http.delete('/api/todos/' + id);
            }
        }
    });
    // js/services/todos.js
angular.module('todoService', [])

    // super simple service
    // each function returns a promise object 
    .factory('TodoLists', function($http) {
        return {
            get : function() {
                return $http.get('/api/todos/list');
            },
            create : function(todoData) {
                return $http.post('/api/todos/list', todoData);
            },
            delete : function(id) {
                return $http.delete('/api/todos/list/' + id);
            }
        }
    });

angular.module('todoController', [])

    .controller('mainController', function($scope, $http) {
        $scope.formData = {};

        // when landing on the page, get all todos and show them
        $http.get('/api/todos')
                .success(function(data) {
                        $scope.todos = data;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });

        $http.get('/api/todos/list')
                .success(function(data) {
                        $scope.todolist = data;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });

        // when submitting the add form, send the text to the node API
        $scope.createTodo = function() {
                $http.post('/api/todos', $scope.formData)
                        .success(function(data) {
                                $scope.formData = {}; // clear the form so our user is ready to enter another
                                $scope.todos = data;
                        })
                        .error(function(data) {
                                console.log('Error: ' + data);
                        });
        };
        $scope.createTodoToList = function(listdata) {
                $http.post('/api/todos', listdata)
                        .success(function(data) {
                                $scope.todos = data;
                        })
                        .error(function(data) {
                                console.log('Error: ' + data);
                        });
        };

        // create todo list
        $scope.createList = function() {
                $http.post('/api/todos/list', $scope.listData)
                        .success(function(data) {
                                $scope.listData = {}; // clear the form so our user is ready to enter another
                        $scope.todolist = data;
                        })
                        .error(function(data) {
                                console.log('Error: ' + data);
                        });
        };

        // delete a todo list after checking it
        $scope.deleteList = function(id) {
                $http.delete('/api/todos/list/' + id)
                        .success(function(data) {
                                $scope.todolist = data;
                        })
                        .error(function(data) {
                                console.log('Error: ' + data);
                        });
        };

        // delete a todo after checking it
        $scope.deleteTodo = function(id) {
                $http.delete('/api/todos/' + id)
                        .success(function(data) {
                                $scope.todos = data;
                        })
                        .error(function(data) {
                                console.log('Error: ' + data);
                        });
        };
        $scope.dateNow = new Date();
        $scope.getdates = function(id){
                $scope.date = new Date();
                $scope.date.setDate($scope.date.getDate() + id-2);
        };
   
    });

