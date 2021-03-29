'use strict';

/**
 * @ngdoc function
 * @name angularjsLandingApp.controller:SignInCtrl
 * @description
 * # SignInCtrl
 * Controller of the angularjsLandingApp
 */
angular.module('angularjsLandingApp')
  .controller('SignInCtrl', ['$scope', '$location', 'dataService', 'authService', function ($scope, $location, dataService, authService) {

    $scope.countries = dataService.getCountries();
    $scope.departments = dataService.getDepartments();
    $scope.user = {};

    $scope.signIn = function() {
      var user = {
        name: $scope.user.name,
        last_name: $scope.user.surname,
        country: $scope.user.country.name,
        province: $scope.user.department.name,
        mail: $scope.user.email,
        phone: $scope.user.phone,
        password: $scope.user.pass
      };
      authService.signIn(user).then(function (response) {
        localStorage.setItem('usuario', JSON.stringify(user));
        localStorage.setItem('access_token', response.data.token);
        $location.path('tecnologias');
      }, function (error) {
        console.log(error);
        localStorage.removeItem('usuario');
        localStorage.removeItem('access_token');
      });
      
    };

  }]);
