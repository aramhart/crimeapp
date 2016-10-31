'use strict';

/**
 * @ngdoc service
 * @name crimeApp.googleMapsApiFactory
 * @description
 * # googleMapsApiFactory
 * Factory in the crimeApp.
 */
angular.module('crimeApp')
  .factory('googleMapsApiFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
