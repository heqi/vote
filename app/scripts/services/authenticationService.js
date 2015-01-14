'use strict';

angular.module('voteApp').factory("AuthenticationService", function($http, $q, $window, $cookieStore, $rootScope) {
  var service = {};
  var userInfo = {};
  // var deferred = $q.defer();

  service.isLogged = function() {
    return 123;
  }

  service.getToken = function() {
    if($rootScope.globals && $rootScope.globals.currentUser) {
      return $rootScope.globals.currentUser.token;
    }
    return "";
  }


  service.setCredentials = function (username, token, id) {
    $rootScope.globals = {
      currentUser: {
        username: username,
        token: token,
        id: id
      }
    }

    // $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
    $cookieStore.put('globals', $rootScope.globals);
  }

  service.clearCredentials = function () {
    $rootScope.globals = {};
    $cookieStore.remove('globals');
    // $http.defaults.headers.common.Authorization = 'Basic ';
  };

  service.login = function(username, password, callback){
    $http.post("https://sat-idea-voter.herokuapp.com/api/v1/login", {
      username: username,
      password: password
    }).then(function(response) {

        var tokenVal = response.data.token;
        var idVal = response.data.id;

        userInfo = {
          success: true,
          token: response.data.token,
          username: response.data.username,
          id: response.data.id
        };

        service.setCredentials(response.data.username, response.data.token, response.data.id);


        // angular.module('voteApp').factory('Idea', function($resource, $rootScope) {
        //   return $resource('http://sat-idea-voter.herokuapp.com/api/v1/ideas/:id', {token:tokenVal}); // Note the full endpoint address
        // });

        $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
        // deferred.resolve(userInfo);

        callback(userInfo);
     }, function(error) {
        // deferred.reject(error);
        callback(error);
     });


 
  };

  return service;
});

angular.module('voteApp').factory('User', function($resource, $rootScope) {
  return $resource('http://sat-idea-voter.herokuapp.com/api/v1/signup', 
    {username:'@username', password:'@password', password_confirmation:'@password_confirmation'});
});


