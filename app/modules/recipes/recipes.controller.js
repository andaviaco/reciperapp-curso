
angular.module('Reciper.recipes')
    .controller('RecipesController', RecipesController);

RecipesController.$inject = ['RecipesService'];

function RecipesController(RecipesService) {
    var vm = this;

    vm.resultado;

    vm.enviarFormulario = function (valor) {
        vm.resultado = valor;
    };
}
