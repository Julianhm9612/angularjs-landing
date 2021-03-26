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

      $scope.scroll = function(route) {
        route = route === '' ? window.location.pathname : route;
        var myNav = document.getElementById('app-header');
        if (route === '/') {
          myNav.classList.remove('header-no-padding');
          window.onscroll = function () {
            if (document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400) {
                myNav.classList.add('header-no-padding');
            } else {
                myNav.classList.remove('header-no-padding');
            }
          };
        } else {
          window.onscroll = null;
          myNav.classList.add('header-no-padding');
        }
      };

      $scope.$on('$routeChangeStart', function($event, next, current) {
        $scope.scroll(next.$$route.originalPath);
      });

      $scope.scroll('');
    }
  });
