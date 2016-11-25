/* global angular, document, window */
'use strict';

angular.module('starter')
.controller('PublicationsCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, $http) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab('right');

    $http({
      method: 'GET',
      url: 'http://yoga.smartmarket.io/publications/from-subdomain/1.json'
  }).then(function successCallback(response) {
    $scope.users = response.data;
    
    $http({
      method: 'GET',
      url: 'http://yoga.smartmarket.io/publications/from-subdomain/1.json'
  }).then(function successCallback(response) {                
    $scope.publications = response.data;                                
    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);
    
}, function errorCallback(response) {
    $scope.error = response;
});
}, function errorCallback(response) {
    $scope.error = response;
});




    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})