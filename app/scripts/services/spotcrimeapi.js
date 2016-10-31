'use strict';

/**
 * @ngdoc service
 * @name crimeApp.spotCrimeApi
 * @description
 * # spotCrimeApi
 * Factory in the crimeApp.
 */
angular.module('crimeApp')
  .factory('spotCrimeApi', function ($http, spotCrimeBaseUrl, spotCrimeKey) {
      // Service for spotCrimeApi
    var api = {};

    api.getCrimes = function (crimeLatitude, crimeLongitude, crimeRadius) {
            return $http.get(spotCrimeBaseUrl + 'crimes.json?' + 'lat=' + crimeLatitude + '&lon=' + crimeLongitude + '&radius=' + crimeRadius + spotCrimeKey)
                .then(
                function (response) {
                    return response
                });
    }

    api.getTestData = function () {
      console.log('got test data');
      return $http.get('http://api.spotcrime.com/crimes.json?lat=36.954873&lon=-121.976317&radius=0.02&key=.&_=1477461516550')
                .then(
                function (response) {
                    return response

                });
    }

    return api;
   
  });