/* global angular, document, window */
'use strict';

angular.module('starter')

.controller('SignUpCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk, $auth, $state) {
    $scope.$parent.clearFabs();
    
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();

    $scope.accountCreate = function(registrationData) {
        
          $auth.submitRegistration(registrationData)
            .then(function(resp) {
                console.log(resp);
              $state.go('app.publications');
            })
            .catch(function(resp) {
              $scope.error = resp;
            });
        };
})