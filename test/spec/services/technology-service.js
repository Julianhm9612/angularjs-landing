'use strict';

describe('Service: technologyService', function () {

  // load the service's module
  beforeEach(module('angularjsLandingApp'));

  // instantiate service
  var technologyService;
  beforeEach(inject(function (_technologyService_) {
    technologyService = _technologyService_;
  }));

  it('should do something', function () {
    expect(!!technologyService).toBe(true);
  });

});
