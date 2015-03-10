
'use strict';

angular.module('Reciper.recipes', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes', {
    templateUrl: 'modules/recipes/recipes_list.html',
    controller: 'RecipesController'
  });
}])
