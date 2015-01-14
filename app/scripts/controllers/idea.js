'use strict';

angular.module('voteApp')
  .controller('ideaListCtrl', function ($scope, $rootScope, $cookieStore, Idea) {
  	var ideas = {}
    var tokenVal = "";
    // var user_id = "";
    // var currentUser = {};
    if($rootScope.globals && $rootScope.globals.currentUser)
    {
      tokenVal = $rootScope.globals.currentUser.token;
      // user_id = $rootScope.globals.currentUser.id;
      $scope.ideas=Idea.query({token:tokenVal});
      // $scope.ideas.token = tokenVal;
    }

    $scope.up = function(idea) {
      console.log("up:"+idea.id);
      idea.score += 1;
      Idea.up({token:tokenVal, id:idea.id});

    }

    $scope.down = function(idea) {
      console.log("down:"+idea.id);
      Idea.down({token:tokenVal, id:idea.id});
    }

  }).controller('ideaViewController',function($scope, $rootScope, $routeParams, Idea){
    // var id = $routeParams.id;
    var tokenVal = "";
    var user_id ="";
    // $scope.isCreator = false;
    var isCreatorVal = false;
    if($rootScope.globals && $rootScope.globals.currentUser)
    {
      tokenVal = $rootScope.globals.currentUser.token;
      $scope.idea=Idea.get({token:tokenVal, id:$routeParams.id},
        function() {
          user_id = $rootScope.globals.currentUser.id;
          if($scope.idea.user_id == user_id) {
            isCreatorVal = true;
          }
        });
    }

    $scope.isCreator = function() {
      return isCreatorVal;
    }

    $scope.up = function(idea) {
      console.log("up:"+idea.id);
      Idea.up({token:tokenVal, id:idea.id});
      $scope.idea=Idea.get({token:tokenVal, id:$routeParams.id});
    }
  
    $scope.down = function(idea) {
      console.log("down:"+idea.id);
      Idea.down({token:tokenVal, id:idea.id});
      $scope.idea=Idea.get({token:tokenVal, id:$routeParams.id});
    }

    $scope.delete = function(idea) {
      console.log("delte idea");
      idea.$delete(function(){
        console.log("success delete");
        $location.path('/');
      });

    }

  }).controller('ideaAddController',function($scope, $location, $rootScope, Idea){

    $scope.idea = new Idea();

    var tokenVal = "";
    var user={};
    if($rootScope.globals && $rootScope.globals.currentUser)
    {
      user = $rootScope.globals.currentUser;
      tokenVal = $rootScope.globals.currentUser.token;
      $scope.idea.token = tokenVal;
      $scope.idea.user_id = user.id;
      
    }

    $scope.addIdea = function() {
      $scope.idea.$save(function(){
          console.log("success");
          $location.path('/');
        });
    }

  }).controller('ideaUpdateController',function($scope, $location, $rootScope, $routeParams, Idea){

    var tokenVal = "";
    var user={};
    if($rootScope.globals && $rootScope.globals.currentUser)
    {
      user = $rootScope.globals.currentUser;
      tokenVal = $rootScope.globals.currentUser.token;

      $scope.idea=Idea.get({token:tokenVal, id:$routeParams.id},
        function() {
          $scope.idea.token = tokenVal;
        });
    }

    $scope.editIdea = function() {
      $scope.idea.$update(function(){
          console.log("success");
          $location.path('/');
        });
    }

});