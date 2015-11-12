'use strict';

angular.module('Reciper.recipes', ['ui.router', 'ngResource'])

.config(['$stateProvider', function($stateProvider) {

    $stateProvider
        .state('images', {
            url: '/images',
            template: '<ui-view />',
            abstract: true
        })
        .state('images.index', {
            url: '/',
            template: '<h1>Imagenes!</h1>'
        })
        .state('recipes', {
            url: '/recipes',
            templateUrl: 'modules/recipes/index.html',
            abstract: true
        })
        .state('recipes.create', {
            url: '/',
            templateUrl: 'modules/recipes/recipes_list.html',
            controller: 'RecipesController',
            controllerAs: 'vm'
        })
        .state('recipes.single', {
            url: '/:id',
            templateUrl: 'modules/recipes/recipe_single.html',
            controller: 'RecipeController',
            controllerAs: 'vm'
        });

  // $routeProvider.when('/recipes', {
  //   templateUrl: 'modules/recipes/recipes_list.html',
  //   controller: 'RecipesController',
  //   controllerAs: 'vm'
  // })
  // .when('/recipe', {
  //   templateUrl: 'modules/recipes/recipe_single.html',
  //   controller: 'RecipeController',
  //   controllerAs: 'vm'
  // })
  // .when('/recipe/:id/edit', {
  //     templateUrl: 'modules/recipes/recipe_edit.html',
  //     controller: 'EditRecipeController',
  //     controllerAs: 'vm'
  // });
}])
