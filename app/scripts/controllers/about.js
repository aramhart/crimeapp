'use strict';

/**
 * @ngdoc function
 * @name crimeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the crimeApp
 */
angular.module('crimeApp')
  .controller('AboutCtrl', function ($scope) {
    var vm=this;
    vm.data =[
      {foo:1, bar:1},
      {foo:2, bar:2},
      {foo:3, bar:3},
      {foo:4, bar:4},
      {foo:5, bar:5},
      {foo:6, bar:6},
      {foo:7, bar:7}
    ];
    vm.positions =[
      {pos:[40.71, -74.21]},
      {pos:[40.72, -74.20]},
      {pos:[40.73, -74.19]},
      {pos:[40.74, -74.18]},
      {pos:[40.75, -74.17]},
      {pos:[40.76, -74.16]},
      {pos:[40.77, -74.15]}
    ];
    vm.showData = function() {
      alert(this.data.foo);
    }
  });
