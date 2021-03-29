'use strict';

/**
 * @ngdoc overview
 * @name angularjsLandingApp
 * @description
 * # angularjsLandingApp
 *
 * Main module of the application.
 */
angular
  .module('angularjsLandingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .run(['$rootScope', '$location', 'authService', function($rootScope, $location, authService) {
    if (authService.getToken() !== '') {
      $location.path('/tecnologias');
    }
    // If the route change failed due to authentication error, redirect them out
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
      if (rejection === 'Not Authenticated') {
        $location.path('');
      } else if (rejection === 'Authenticated') {
        $location.path('tecnologias');
      }
    });
  }])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $locationProvider.hashPrefix('');

    // Routes
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainC',
        caseInsensitiveMatch: true
      })
      .when('/tecnologias', {
        templateUrl: 'views/technologies.html',
        controller: 'TechnologiesCtrl',
        controllerAs: 'technologiesC',
        caseInsensitiveMatch: true,
        resolve: {
          auth: function(authService) {
            return authService.isAuthenticated();
          }
        }
      })
      .when('/registro', {
        templateUrl: 'views/sign-in.html',
        controller: 'SignInCtrl',
        controllerAs: 'signInC',
        caseInsensitiveMatch: true,
        resolve: {
          auth: function(authService) {
            return authService.isAnonymous();
          }
        }
      })
      .when('/terminos', {
        templateUrl: 'views/terms.html',
        controller: 'TermsCtrl',
        controllerAs: 'termsC'
      })
      .otherwise({
        redirectTo: '/'
      });
    }]);
