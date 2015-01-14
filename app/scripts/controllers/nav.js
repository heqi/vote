'use strict';

/**
 * @ngdoc function
 * @name voteApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the voteApp
 */
angular.module('voteApp')
  .controller('NavCtrl',
  	['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
   // function ($scope, $rootScope) {
  	this.tab = 1;
  	this.logged = false;

  	this.selectTab = function(setTab) {
  		this.tab = setTab;
  	}

  	this.isSelected = function(checkTab) {
  		return this.tab === checkTab;
  	}

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

  	

  	this.logout = function() {
  		AuthenticationService.clearCredentials();
  		this.isLogged();
  	}

  }]);
