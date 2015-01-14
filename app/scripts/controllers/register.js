'use strict';

/**
 * @ngdoc function
 * @name voteApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the voteApp
 */
angular.module('voteApp')
  .controller('RegisterCtrl', function ($scope, $location, User, AuthenticationService) {
  	$scope.user = new User();
  	$scope.register = function () {
  		$scope.user.$save(function() {
  			// console.log($scope.user);
  			// console.log("success");
  			AuthenticationService.setCredentials($scope.user.username, $scope.user.token, $scope.user.id);
  			$location.path('/');
  		});
    };


  });