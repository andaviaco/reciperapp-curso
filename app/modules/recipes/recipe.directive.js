angular.module('Reciper.recipes')
    .directive('myRecipe', RecipeDirective);

function RecipeDirective() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
          otracosa: '=recipe',
          titulo: '@titulo',
          funcion: '&funcion'
        },
        templateUrl: 'modules/recipes/recipe.partial.html'
    }
}
