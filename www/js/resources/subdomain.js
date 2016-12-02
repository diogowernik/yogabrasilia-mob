angular.module('starter').factory('Card', function($resource) {
  return $resource(rootURL + 'subdomains/' + SubdomainId +'.json'); 
});