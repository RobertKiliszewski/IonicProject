angular.module('starter.services', [])


.factory('Task', function() {
  
  var data = {
    tasks: [
      {title: "Clean House", added: new Date(), id: 0}, 
      {title: "Feed Dog", added: new Date(), id: 1}
    ]
  };
  
    //Add task
  function addTask(title) {
    data.tasks.push({title: title, added: new Date()});
  }
  
    //Add task, tasks and delete task
  return {
    data: data, 
    addTask: addTask,
    deleteTask: function (del){
          data.tasks.splice(data.tasks.indexOf(del), 1);
      }
  };
});