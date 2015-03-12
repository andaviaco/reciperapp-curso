
'use strict';

angular.module('Reciper.recipes')
    .controller('RecipesController', RecipesController);

RecipesController.$inject = ['$scope', 'RecipesService'];

function RecipesController($scope, RecipesService) {
    $scope.recipes    = RecipesService.query();
    $scope.categories = [
        {
            key: "0",
            value: "Desayuno"
        },
        {
            key: "1",
            value: "Comida"
        },
        {
            key: "2",
            value: "Cena"
        },
        {
            key: "3",
            value: "Otra"
        }
    ];

    $scope.create        = create;
    $scope.addIngredient = addIngredient;
    $scope.addStep       = addStep;

    resetFormValues();

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
