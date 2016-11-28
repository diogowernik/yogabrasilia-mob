var rootURL = 'http://yoga.smartmarket.io/';
var urlBase = 'http://yoga.smartmarket.io/';
var SubdomainId = '1';
var subDomainId = '1';

angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput', 'ng-token-auth', 'ngResource'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($authProvider) {
    $authProvider.configure({
        apiUrl: 'http://smartmarket.io/api/v1',
        omniauthWindowType: window.cordova == undefined ? 'newWindow' : 'inAppBrowser',         
        storage: 'localStorage',        
        handleLoginResponse: function(response) {
        console.log(response.data);
        
        return response.data;
        },
        handleAccountUpdateResponse: function(response) {
        console.log(response.data);
        return response.data;
        },
        handleTokenValidationResponse: function(response) {
        console.log(response.data);
        
        return response.data;
        },

confirmationSuccessUrl:  window.location.href,
        storage: 'localStorage'
        /*
        createPopup: function(url) {
            return window.open(url, '_blank', 'closebuttoncaption=Cancel');
        },*/
        

 
    });
})

