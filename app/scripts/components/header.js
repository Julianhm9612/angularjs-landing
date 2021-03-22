'use strict';

/**
 * @ngdoc function
 * @name angularjsLandingApp.component:Header
 * @description
 * # Header
 * Component of the angularjsLandingApp
 */
angular.module('angularjsLandingApp')
  .component('header', {
    templateUrl: 'views/header.html',
    controller: function($scope, technologies) {
      technologies.getLikes();

      // technologies.subscribe($scope, function somethingChanged() {
      //   $scope.likesAmount = technologies.amount;
      // });

      $scope.getLikes = function() {
        return technologies.amount;
      };

      // $scope.$on('', function(event, args) {
      // });
    }
  });
