/* global angular, document, window , urlBase, subDomainId*/
'use strict';
angular.module('starter')

.factory('Publication', function($resource) {
  return $resource(urlBase + 'publications/:action/:id.json', { id: '@id'}, {
          update: { method: 'PUT' },
          fromSubDomain: { isArray: true, params:{action:'from-subdomain', id: subDomainId}},
        });
})




