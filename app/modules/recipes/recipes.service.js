
'use strict'

angular.module('Reciper')
    .factory('RecipesService', RecipesService);

RecipesService.$inject = ['$resource', '$http', '$q'];

function RecipesService($resource, $http, $q) {
    /*
    function all() {
        var deferred = $q.defer();

        $http.get('data/recipes.json')
            .success(function (data) {
                deferred.resolve(data);
            });

        return deferred.promise;
    }

    return {
        all: all
    }
    */

    return $resource('data/recipes.json');
}