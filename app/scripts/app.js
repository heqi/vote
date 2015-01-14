'use strict';

angular.module('Authentication', []);

/**
 * @ngdoc overview
 * @name voteApp
 * @description
 * # voteApp
 *
 * Main module of the application.
 */
var app = angular
  .module('voteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/ideas/:id/view', {
        templateUrl: 'views/idea/idea_view.html',
        controller: 'ideaViewController'
      })
      .when('/ideas/new', {
        templateUrl: 'views/idea/idea_add.html',
        controller: 'ideaAddController'
      })
      .when('/ideas/:id/edit', {
        templateUrl: 'views/idea/idea_update.html',
        controller: 'ideaUpdateController'
      })
      .otherwise({
        redirectTo: '/'
      });

    // $stateProvider.state('ideas',{
    //   url:'/',
    //   templateUrl:'views/main.html',
    //   controller:'MainCtrl'
    // }).state('viewIdea',{
    //    url:'/ideas/:id/view',
    //    templateUrl:'views/idea/idea_view.html',
    //    controller:'ideaViewController'
    // });
  });
