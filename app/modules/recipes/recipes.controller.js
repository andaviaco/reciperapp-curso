
angular.module('Reciper.recipes')
    .controller('RecipesController', RecipesController);

RecipesController.$inject = ['RecipesService'];

function RecipesController(RecipesService) {
    var vm = this;
    console.log('hola');
    vm.nuevaReceta = {
        ingredientes: []
    };

    function pruebaDirectiva(msg) {
        console.log(msg);
    }

    vm.pruebaDirectiva = pruebaDirectiva;
    vm.nuevoIngrediente = {};

    vm.agregarReceta = function (receta) {
        var ingredienteAgregado = vm.agregarIngrediente(vm.nuevoIngrediente);

        RecipesService.addReceta(receta);

        vm.nuevaReceta = {
            ingredientes: []
        };
    }
    vm.agregarIngrediente = function (ingrediente) {

        vm.nuevaReceta.ingredientes.push(ingrediente);

        vm.nuevoIngrediente = {};
    }

    vm.recetas = function () {
        return RecipesService.getAll();
    };
}
