'use strict';

/**
 * @ngdoc function
 * @name voteApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the voteApp
 */
angular.module('voteApp')
  .controller('LoginCtrl',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
        // AuthenticationService.ClearCredentials();
        var auth = this;
        $scope.username = "heqi";
        $scope.password = "123456";

        $scope.login = function () {
        	console.log("click login");
        	AuthenticationService.login($scope.username, $scope.password, function(response) {
        		// console.log(response);
        		if(response.success) {
        			console.log("success");
        			// console.log(response);
        			$scope.errorMessage = "Success";
        			$location.path('/');
        		} else {
        			console.log("error");
        			$scope.username = "";
        			$scope.password = "";
        			// $scope.error = true;
        			$scope.errorMessage = "Unauthorized";
        		}
        	});

        };
    }]);

