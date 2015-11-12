'use strict';

angular.module('Reciper.recipes')
    .controller('EditRecipeController', EditRecipeController);

EditRecipeController.$inject = ['$routeParams'];

function EditRecipeController($routeParams) {
    var vm = this;

    vm.username = $routeParams.username;
}
