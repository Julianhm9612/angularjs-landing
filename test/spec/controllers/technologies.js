'use strict';

describe('Controller: TechnologiesCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsLandingApp'));

  var TechnologiesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TechnologiesCtrl = $controller('TechnologiesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TechnologiesCtrl.awesomeThings.length).toBe(3);
  });
});
