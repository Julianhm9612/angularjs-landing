'use strict';

describe('Service: technologies', function () {

  // load the service's module
  beforeEach(module('angularjsLandingApp'));

  // instantiate service
  var technologies;
  beforeEach(inject(function (_technologies_) {
    technologies = _technologies_;
  }));

  it('should do something', function () {
    expect(!!technologies).toBe(true);
  });

});
