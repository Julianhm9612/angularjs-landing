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
  .config(function ($routeProvider, $locationProvider) {
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
        controllerAs: 'mainC'
      })
      .when('/tecnologias', {
        templateUrl: 'views/technologies.html',
        controller: 'TechnologiesCtrl',
        controllerAs: 'technologiesC'
      })
      .when('/sign-in', {
        templateUrl: 'views/sign-in.html',
        controller: 'SignInCtrl',
        controllerAs: 'signInC'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
