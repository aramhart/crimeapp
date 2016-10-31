'use strict';

describe('Service: spotCrimeBaseUrl', function () {

  // load the service's module
  beforeEach(module('crimeApp'));

  // instantiate service
  var spotCrimeBaseUrl;
  beforeEach(inject(function (_spotCrimeBaseUrl_) {
    spotCrimeBaseUrl = _spotCrimeBaseUrl_;
  }));

  it('should do something', function () {
    expect(!!spotCrimeBaseUrl).toBe(true);
  });

});
