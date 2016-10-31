'use strict';

/**
 * @ngdoc function
 * @name crimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crimeApp
 */
angular.module('crimeApp')
  .controller('MainCtrl', function ($scope, spotCrimeApi) {
    
    $scope.crimeLatitude = '36.9653237';
    $scope.crimeLongitude = '-122.10630779999997';
    $scope.crimeRadius = '0.08';

    $scope.crimeData = '***crime data***';

  	$scope.getCrimes = function () {

      spotCrimeApi.getCrimes() //get crimes
                       .then(function (response) {
                            $scope.crimeData = response;                           
                            spotCrimeApi.getCrimes($scope.crimeLatitude, $scope.crimeLongitude, $scope.crimeRadius)
                                          .then(function (response) {
                                           $scope.crimeData = response.data;
                            });
                        });
    }

    $scope.getTestData = function () {

      spotCrimeApi.getTestData() //get crimes
                       .then(function (response) {
                            $scope.crimeData = response;                           
                            spotCrimeApi.getTestData()
                                          .then(function (response) {
                                           $scope.crimeData = response.data;
                            });
                        });
    }

    $scope.getCrimes();

  });
