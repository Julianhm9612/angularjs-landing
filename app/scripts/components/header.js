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
    controller: ['$scope', 'technologyService', '$location', function($scope, technologyService, $location) {

      var menu = document.getElementById('menu');
      var icon = document.getElementById('mobile-menu');

      $scope.opened = false;

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
        if (route === '/') { // Only when it is the main  page
          if (window.innerWidth > 992) {
            myNav.classList.remove('header-no-padding');
          } else {
            myNav.classList.add('header-no-padding');
          }
          window.onscroll = function () {
            if (window.innerWidth > 992) {
              if (document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400) {
                  myNav.classList.add('header-no-padding');
              } else {
                  myNav.classList.remove('header-no-padding');
              }
            } else {
              myNav.classList.add('header-no-padding');
            }
          };
        } else {
          window.onscroll = null;
          myNav.classList.add('header-no-padding');
        }
      };

      /**
       * Handle scroll to change styles
       */
      $scope.$on('$routeChangeStart', function($event, next, current) {
        if (window.innerWidth < 992) {
          $scope.openMenu();
        }
        $scope.scroll(next.$$route.originalPath);
      });

      $scope.navigateTo = function(div) {
        window.scroll(0, findPosition(document.getElementById(div)));
        var menu = document.getElementById('menu');
        menu.classList.remove('menu-responsive');
      };

      /**
       * Search the top of an element
       * @param {*} obj Element to search
       * @returns Current top
       */
      function findPosition(obj) {
        var currenttop = 0;
        if (obj.offsetParent) {
            do {
                currenttop += obj.offsetTop - 100;
            } while ((obj = obj.offsetParent));
            return [currenttop];
        }
      }

      $scope.openMenu = function() {
        if ($scope.opened) {
          menu.classList.remove('menu-responsive');
          icon.classList.remove("change");
        } else {
          menu.classList.add('menu-responsive');
          icon.classList.add("change");
        }
        $scope.opened = !$scope.opened;
      };

      $scope.login = function() {
        $location.path('sign-in');
      };

      technologyService.getLikes();

      $scope.scroll('');
    }]
  });
