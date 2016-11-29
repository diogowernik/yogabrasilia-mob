/* global angular, document, window */
'use strict';

angular.module('starter')

.controller('PublicationsCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, Publication) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab('right');
    Publication.fromSubDomain(function success(result){
      $scope.publications = result;
      $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        })}, 200);
    }, function error(error){
      debugger;
      $scope.error = error;
    });

   
    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})


.controller('PublicationsCreateCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, Publication) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab('right');
    Publication.fromSubDomain(function success(result){
      $scope.publications = result;
      $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        })}, 200);
    }, function error(error){
      debugger;
      $scope.error = error;
    });

    $scope.create = function(){
      alert(12);
    }
    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})