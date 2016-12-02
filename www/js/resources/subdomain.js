angular.module('starter').factory('Subdomain', function($resource) {
  return $resource(rootURL + 'subdomains/' + SubdomainId +'.json'); 
});