angular.module('starter').factory('Publication', function($resource) {
  return $resource(rootURL + '/publications.json/:id'); 
});