angular.module('starter.controllers', [])

//List of tasks 
.controller('TasksCtrl', function($scope, Task) {
  $scope.data = Task.data;
    
  //delete function
  $scope.deleteTask = function (del){
     Task.deleteTask(del);     
  };
  //$scopes to be used in html code
  $scope.tasks = Task.data.tasks;
  $scope.show;
    
})

//Adding a task
.controller('AddTaskCtrl', function($scope, Task) {
    var data = {
    newTask: ""
  };
    
  //Add Task Function
  function addTask() {
     Task.addTask(data.newTask);
     data.newTask = "";
  }
    
  //$Scopes to be used in html code
  $scope.data = data;
  $scope.addTask = addTask;
});