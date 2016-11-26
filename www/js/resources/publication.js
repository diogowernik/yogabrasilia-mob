angular.module('starter').factory('Publication', function($resource) {
  return $resource(rootURL + 'publications/from-subdomain/1.json'); 
});