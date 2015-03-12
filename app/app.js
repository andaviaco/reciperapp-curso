'use strict';

// Declare app level module which depends on views, and components
angular.module('Reciper', [
    'ngRoute',
    'Reciper.recipes'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/recipes'});
}]);
