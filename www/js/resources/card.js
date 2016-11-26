angular.module('starter').factory('Card', function($resource) {
  return $resource(rootURL + 'cards/from-subdomain/' + SubdomainId +'.json'); 
});