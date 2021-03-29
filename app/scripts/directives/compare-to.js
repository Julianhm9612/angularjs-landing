'use strict';

/**
 * @ngdoc directive
 * @name angularjsLandingApp.directive:compareTo
 * @description
 * # compareTo
 */
angular.module('angularjsLandingApp')
  .directive('compareTo', function () {
    return {
      require: [ 'ngModel' ],
      scope: {
        otherModelValue: "=compareTo"
      },
      link: function postLink(scope, element, attrs, ngModel) {
        ngModel[0].$validators.compareTo = function(modelValue) {
          return modelValue === scope.otherModelValue;
        };
        scope.$watch("otherModelValue", function() {
            ngModel[0].$validate();
        });
      }
    };
  });
