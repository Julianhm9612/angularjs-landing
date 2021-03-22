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
        amount: 0,
        getTechnologies: function() {
            return $http.get(config.apiUrl + '/techs').then(function(response) {
                return response;
            });
        },
        // subscribe: function(scope, callback) {
        //     var handler = $rootScope.$on('changed-amount', callback);
        //     scope.$on('$destroy', handler);
        // },
        // notify: function() {
        //     $rootScope.$emit('changed-amount');
        // },
        getLikes: function() {
            var technologies = JSON.parse(localStorage.getItem('technologies'));
            if (!angular.isArray(technologies)) {
                technologies = [];
            }
            this.amount = technologies.length;
            return technologies;
        },
        likeTechnology: function(paramTechnology) {
            var technologies = this.getLikes();
            technologies.push(paramTechnology);
            this.amount = technologies.length;
            technologies = JSON.stringify(technologies);
            localStorage.setItem('technologies', technologies);
            // this.notify();
            // $rootScope.$broadcast('', '');
        },
        dislikeTechnology: function(paramTechnology) {
            var technologies = this.getLikes();
            technologies = technologies.filter(function(technology) { return technology.tech !== paramTechnology.tech; } );
            this.amount = technologies.length;
            technologies = JSON.stringify(technologies);
            localStorage.setItem('technologies', technologies);
            // this.notify();
            // $rootScope.$broadcast('', '');
        }
    };
  });
