'use strict';

describe('Service: googleMapsApiFactory', function () {

  // load the service's module
  beforeEach(module('crimeApp'));

  // instantiate service
  var googleMapsApiFactory;
  beforeEach(inject(function (_googleMapsApiFactory_) {
    googleMapsApiFactory = _googleMapsApiFactory_;
  }));

  it('should do something', function () {
    expect(!!googleMapsApiFactory).toBe(true);
  });

});
