angular.module('Reciper.recipe',['Reciper.recipes'])
    .config(config);

config.$inject = ['$routeProvider'];

function config($routeProvider) {
    $routeProvider.when('/recipe/:id?', {
        templateUrl: 'modules/recipe/recipe.html',
        controller: 'RecipeController',
        controllerAs: 'vm'
    });
}