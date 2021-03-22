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
        $scope.propertyName = 'tech';
        $scope.reverse = false;

        $scope.loadTechnologies = function () {
            technologies.getTechnologies().then(function (response) {
                $scope.technologies = response.data;
                var likes = technologies.getLikes();
                $scope.technologies.forEach(function (technology) {
                    technology.selected = likes.find(function (like) { return like.tech === technology.tech; });
                });
            }, function (error) {
                console.log(error);
            });
        };

        $scope.likeTechnology = function (technology) {
            technology.selected = !technology.selected;
            if (technology.selected) {
                technologies.likeTecnology(technology);
            } else {
                technologies.dislikeTecnology(technology);
            }
        };

        $scope.sortBy = function(order) {
            $scope.reverse = order === 'd';
        };

        $scope.loadTechnologies();
    });