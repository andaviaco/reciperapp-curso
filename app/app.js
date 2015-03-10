'use strict';

// Declare app level module which depends on views, and components
angular.module('Reciper', [
  'ngRoute',
  'Reciper.view1',
  'Reciper.view2'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
