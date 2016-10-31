'use strict';

describe('Service: spotCrimeApi', function () {

  // load the service's module
  beforeEach(module('crimeApp'));

  // instantiate service
  var spotCrimeApi;
  beforeEach(inject(function (_spotCrimeApi_) {
    spotCrimeApi = _spotCrimeApi_;
  }));

  it('should do something', function () {
    expect(!!spotCrimeApi).toBe(true);
  });

});
