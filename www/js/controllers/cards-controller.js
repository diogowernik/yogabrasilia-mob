/* global angular, document, window */
'use strict';

angular.module('starter')

.controller('CardsCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, Card) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab('right');
    Card.query(function success(result){
      $scope.cards = result;
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