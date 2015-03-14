
'use strict';

angular.module('Reciper.recipes')
    .controller('RecipesController', RecipesController);

RecipesController.$inject = ['$scope', 'RecipesService', 'CategoriesService'];

function RecipesController($scope, RecipesService, CategoriesService) {

    var pokemon = {
        objeto: 'pokemon',
        id: 1
    };

    $scope.recipes    = RecipesService.get(pokemon, success, fail);
    console.log('1');
    console.log('1');
    console.log('1');
    console.log('1');
    console.log('1');
    console.log('1');
    console.log('1');
    console.log('1');
    console.log('1');
    console.log('1');
    console.log('1');
    console.log('1');
    console.log('1');
    console.log('1');
    console.log('1');
    console.log('1');
    console.log('1');
    $scope.categories = CategoriesService.query();
    
    $scope.create        = create;
    $scope.addIngredient = addIngredient;
    $scope.addStep       = addStep;

    resetFormValues();

    function success(){
        $scope.recipes.catch_rate = 7;
        alert('si se obtuvo');
    }

    function fail() {
        alert(':(');
    }

    function resetFormValues() {
        $scope.new_recipe             = {};
        $scope.new_recipe.ingredients = [{}];
        $scope.new_recipe.steps       = [{}];
        $scope.new_recipe.comments    = [];
    }

    function create(recipe) {
        console.debug(recipe);

        if (angular.isUndefined(
                recipe.ingredients[recipe.ingredients.length-1].name)) {
            recipe.ingredients.pop();
        }

        if (angular.isUndefined(
                recipe.steps[recipe.steps.length-1].description)) {
            recipe.steps.pop();
        }

        $scope.recipes.unshift(recipe);
        resetFormValues();
    }

    function addIngredient() {
        $scope.new_recipe.ingredients.push({});
    }

    function addStep() {
        $scope.new_recipe.steps.push({});
    }
}
