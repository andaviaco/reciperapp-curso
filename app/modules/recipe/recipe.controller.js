angular.module('Reciper.recipe')
    .controller('RecipeController', RecipeController);

RecipeController.$inject = ['ActualViewService', '$routeParams', 'RecipesService'];

function RecipeController(ActualViewService,$routeParams, RecipesService) {

    var vm = this;
    var id = $routeParams.id;

    ActualViewService.setView();

    console.log($routeParams.id);

    recipes = RecipesService.query(success);

    function success() {
        vm.recipe = recipes.filter(function(object){
            
            return (object.id == id);

        })[0];
    }

}