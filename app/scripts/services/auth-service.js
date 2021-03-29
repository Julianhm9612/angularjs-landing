'use strict';

/**
 * @ngdoc service
 * @name angularjsLandingApp.authService
 * @description
 * # authService
 * service in the angularjsLandingApp.
 */
angular.module('angularjsLandingApp')
  .service('authService', ['$q', '$http', 'config', function ($q, $http, config) {
    return {
      authenticated: false,
      signIn: function(user) {
        return $http.post(config.apiUrl + '/signup', user).then(function(response) {
            return response;
        });
      },
      getToken: function() {
        var token = localStorage.getItem('access_token') ? localStorage.getItem('access_token') : '';
        this.authenticated = token !== '';
        return token;
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
