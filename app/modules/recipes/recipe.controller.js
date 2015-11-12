
angular.module('Reciper.recipes')
    .controller('RecipeController', RecipeController);

RecipeController.$inject = ['RecipesService'];

function RecipeController(RecipesService) {
    var vm = this;

    vm.receta = function () {
        return RecipesService.getReceta(0);
    }
}
