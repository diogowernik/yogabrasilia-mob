/* global angular, document, window , _user, subDomainId */
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

.controller('MyPublicationsCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('CreatePublicationsCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, Publication) {
    
    $scope.publication = {
        domain_id: domainId,
        subdomain_id: subDomainId,
        // user_id: _user.id,
        profile_id: 1
    }
    
    $scope.save = function(){
        Publication.save($scope.publication, function success(data){
            debugger;
        }, function error(data){
            debugger;
        });
        console.log($scope.publication);
    }
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);


    // Set Ink
    ionicMaterialInk.displayEffect();
})

