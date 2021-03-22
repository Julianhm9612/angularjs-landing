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
    controller: function($scope, technologyService) {
      technologyService.getLikes();

      // technologyService.subscribe($scope, function somethingChanged() {
      //   $scope.likesAmount = technologyService.amount;
      // });

      $scope.getLikes = function() {
        return technologyService.amount;
      };

      // $scope.$on('', function(event, args) {
      // });
    }
  });
