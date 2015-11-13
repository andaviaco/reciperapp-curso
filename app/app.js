'use strict';

// Declare app level module which depends on views, and components
angular.module('Reciper', [
    'ui.router',
    'Reciper.recipes'
])

.config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/recipes/");
}]);
