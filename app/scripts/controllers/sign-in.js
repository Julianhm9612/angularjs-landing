'use strict';

/**
 * @ngdoc function
 * @name angularjsLandingApp.controller:SignInCtrl
 * @description
 * # SignInCtrl
 * Controller of the angularjsLandingApp
 */
angular.module('angularjsLandingApp')
  .controller('SignInCtrl', ['$scope', '$location', function ($scope, $location) {

    $scope.user = {};

    $scope.signIn = function() {
      $location.path('tecnologias');
    };

  }]);
