'use strict';

/**
 * @ngdoc function
 * @name angularjsLandingApp.controller:TechnologiesCtrl
 * @description
 * # TechnologiesCtrl
 * Controller of the angularjsLandingApp
 */
angular.module('angularjsLandingApp')
    .controller('TechnologiesCtrl', function ($scope, technologyService) {
        $scope.types = [ 'Back-End', 'Front-End', 'Mobile' ];
        $scope.technologies = [];
        $scope.filteredTechs = [];
        $scope.propertyName = 'tech';
        $scope.reverse = false;
        $scope.searchByTech = '';
        $scope.searchByType = null;

        $scope.loadTechnologies = function () {
            technologyService.getTechnologies().then(function (response) {
                $scope.technologies = response.data;
                var likes = technologyService.getLikes();
                $scope.technologies.forEach(function (technology) {
                    technology.selected = likes.find(function (like) { return like.tech === technology.tech; });
                });
                $scope.search();
            }, function (error) {
                console.log(error);
            });
        };

        $scope.likeTechnology = function (technology) {
            technology.selected = !technology.selected;
            if (technology.selected) {
                technologyService.likeTechnology(technology);
            } else {
                technologyService.dislikeTechnology(technology);
            }
        };

        $scope.sortBy = function(order) {
            $scope.reverse = order === 'd';
        };

        $scope.search = function() {
            if ($scope.searchByTech === '' && ($scope.searchByType === null)) {
                $scope.filteredTechs = $scope.technologies;
            } else {
                $scope.filteredTechs = $scope.technologies.filter(function(technology) {
                    const regex = new RegExp($scope.searchByTech.toLowerCase());
                    return ($scope.searchByType === null ? true : $scope.searchByType === technology.type) && regex.test(technology.tech.toLowerCase());
                });
            }
        };

        $scope.loadTechnologies();
    });