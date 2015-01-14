'use strict';

angular.module('voteApp').factory('Idea', function($resource, $rootScope) {
  return $resource('http://sat-idea-voter.herokuapp.com/api/v1/ideas/:id', {token:'@token'},
  {
    update:{
      method: "put",
      params: {token:'@token', id:'@id'},
      url: 'http://sat-idea-voter.herokuapp.com/api/v1/ideas/:id'
    },
    delete:{
      method: "delete",
      params: {token:'@token', id:'@id'},
      url: 'http://sat-idea-voter.herokuapp.com/api/v1/ideas/:id'
    },
  	up:{
  		method: "POST",
  		params: {token:'@token', id:'@id'},
  		url: 'http://sat-idea-voter.herokuapp.com/api/v1/ideas/:id/up'
  	},
  	down:{
  		method: "POST",
  		params: {token:'@token', id:'@id'},
  		url: 'http://sat-idea-voter.herokuapp.com/api/v1/ideas/:id/down'
  	}
  }); // Note the full endpoint address
});

// angular.module('voteApp').factory('IdeaUp', function($resource, $rootScope) {
//   return $resource('http://sat-idea-voter.herokuapp.com/api/v1/ideas/:id/up', {token:'@_token'}); // Note the full endpoint address
// });
// angular.module('voteApp').factory('IdeaDown', function($resource, $rootScope) {
//   return $resource('http://sat-idea-voter.herokuapp.com/api/v1/ideas/:id/down', {token:'@_token'}); // Note the full endpoint address
// });