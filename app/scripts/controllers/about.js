'use strict';

/**
 * @ngdoc function
 * @name voteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the voteApp
 */
angular.module('voteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
