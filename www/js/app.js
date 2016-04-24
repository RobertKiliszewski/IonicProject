angular
  
.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  //Tabs Templates
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  //The Tab for tasks
  .state('tab.tasks', {
    url: '/tasks',
    views: {
      'tab-tasks': {
        templateUrl: 'templates/tab-tasks.html',
        controller: 'TasksCtrl'
      }
    }
  })
  
//The Tab for adding task
  .state('tab.addTask', {
    url: '/addTask',
    views: {
      'tab-addTask': {
        templateUrl: 'templates/tab-addTask.html',
        controller: 'AddTaskCtrl'
      }
    }
  });
    
//If there is no tab to be found go boack to the one thats given in the brackets
  $urlRouterProvider.otherwise('/tab/tasks');

});