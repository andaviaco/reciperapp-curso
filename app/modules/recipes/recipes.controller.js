
'use strict';

angular.module('Reciper.recipes')
    .controller('RecipesController', RecipesController);

RecipesController.$inject = ['$scope', 'RecipesService'];

function RecipesController($scope, RecipesService) {
    $scope.recipes = RecipesService.query();
}