'use strict';

/**
 * @ngdoc service
 * @name angularjsLandingApp.technologies
 * @description
 * # technologies
 * Service in the angularjsLandingApp.
 */
angular.module('angularjsLandingApp')
  .service('technologies', function ($http, config) {
    return {
        getTechnologies: function() {
            return $http.get(config.apiUrl + "/techs").then(function(response) {
                return response;
            });
        }
    }
  });
