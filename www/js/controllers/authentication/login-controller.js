/* global angular, document, window */
'use strict';

angular.module('starter')

.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk, $auth, $state) {
    $scope.$parent.clearFabs();
    $scope.registrationData = {};
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();

    $scope.login = function(provider) {
        if (provider == 'email'){
            $auth.submitLogin($scope.registrationData)
                .then(function(resp) {
                  $state.go('app.publications');
                })
                .catch(function(resp) {
                  $scope.error = resp;
                });
            } else {
                  $auth.authenticate(provider)
                      .then(function(resp) {
                          $state.go('app.publications');

                      })
                      .catch(function(resp) {
                        $scope.error = resp;
                    });        
            }
        
    };    
})
