'use strict';

/**
 * @ngdoc factory
 * @name angularjsLandingApp.authService
 * @description
 * # authService
 * factory in the angularjsLandingApp.
 */
angular.module('angularjsLandingApp')
  .factory('authService', ['$q', '$http', 'config', function ($q, $http, config) {
    return {
      signIn: function(user) {
        return $http.post(config.apiUrl + '/signup', user).then(function(response) {
            return response;
        });
      },
      getToken: function() {
        return localStorage.getItem('access_token') ? localStorage.getItem('access_token') : '';
      },
      isAuthenticated: function() {
        if (this.getToken() !== '') {
          // If authenticated, return anything you want, probably a user object
          return true;
        } else {
          // Else send a rejection
          return $q.reject('Not Authenticated');
        }
      },
      isAnonymous: function() {
        if (this.getToken() === '') {
          // If authenticated, return anything you want, probably a user object
          return true;
        } else {
          // Else send a rejection
          return $q.reject('Authenticated');
        }
      }
    };
  }]);
