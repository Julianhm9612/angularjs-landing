'use strict';

/**
 * @ngdoc function
 * @name angularjsLandingApp.controller:TechnologiesCtrl
 * @description
 * # TechnologiesCtrl
 * Controller of the angularjsLandingApp
 */
angular.module('angularjsLandingApp')
  .controller('TechnologiesCtrl', function ($scope, technologies) {
    $scope.technologies = [];

    $scope.loadTechnologies = function() {
      technologies.getTechnologies().then(function(response) {
          $scope.technologies = response.data;
      }, function(error) {

      })
    }

    $scope.loadTechnologies();
  });