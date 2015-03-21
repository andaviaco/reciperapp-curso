
'use strict'

angular.module('Reciper')
    .factory('RecipesService', RecipesService);

RecipesService.$inject = ['$resource', '$http', '$q'];

function RecipesService($resource, $http, $q) {

    return $resource('data/recipes.json');
}