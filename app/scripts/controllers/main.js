'use strict';

/**
 * @ngdoc function
 * @name voteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the voteApp
 */
angular.module('voteApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.logged = false;
    this.isLogged = function() {
  		if($rootScope.globals && $rootScope.globals.currentUser)
  		{
  			// console.log($rootScope.globals.currentUser);
  			this.username = $rootScope.globals.currentUser.username;
  			return true;
  		} else {
  			return false;
  		}
  	};

  	this.isLogged();

  });
