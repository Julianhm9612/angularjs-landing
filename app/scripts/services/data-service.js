'use strict';

/**
 * @ngdoc service
 * @name angularjsLandingApp.dataService
 * @description
 * # dataService
 * Service in the angularjsLandingApp.
 */
angular.module('angularjsLandingApp')
  .service('dataService', function () {
    return {
      getCountries: function() {
        return [
          { id: 1, name: 'Argentina' },
          { id: 2, name: 'Chile' },
          { id: 3, name: 'Colombia' },
          { id: 4, name: 'México' },
          { id: 5, name: 'Perú' }
        ];
      },
      getDepartments: function() {
        return [
          { id: 1, name: 'Buenos Aires', country: 1 },
          { id: 2, name: 'Córdoba', country: 1 },
          { id: 3, name: 'Santa Fe', country: 1 },
          { id: 4, name: 'Mendoza', country: 1 },
          { id: 5, name: 'Chaco', country: 1 },
          { id: 6, name: 'Arica', country: 2 },
          { id: 7, name: 'Tocopilla', country: 2 },
          { id: 8, name: 'Huasco', country: 2 },
          { id: 9, name: 'Limarí', country: 2 },
          { id: 10, name: 'Los Andes', country: 2 },
          { id: 11, name: 'Bolívar', country: 3 },
          { id: 12, name: 'Boyacá', country: 3 },
          { id: 13, name: 'Caldas', country: 3 },
          { id: 14, name: 'Cauca', country: 3 },
          { id: 15, name: 'Magdalena', country: 3 },
          { id: 16, name: 'Estado de Mexico', country: 4 },
          { id: 17, name: 'Jalsico', country: 4 },
          { id: 18, name: 'Nuevo leon', country: 4 },
          { id: 19, name: 'Yucatan', country: 4 },
          { id: 20, name: 'Hidalgo', country: 4 },
          { id: 21, name: 'Bagua', country: 5 },
          { id: 22, name: 'Luya', country: 5 },
          { id: 23, name: 'Asunción', country: 5 },
          { id: 24, name: 'Ocros', country: 5 },
          { id: 25, name: 'Arequipa', country: 5 },
        ];
      }
    };
  });
