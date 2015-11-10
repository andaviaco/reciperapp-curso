
angular.module('Reciper.recipes')
    .controller('RecipesController', RecipesController);

RecipesController.$inject = ['RecipesService'];

function RecipesController(RecipesService) {
    var vm = this;

    vm.nuevaReceta = {
      ingredientes: []
    };
    vm.nuevoIngrediente = {};
    vm.recetas = [];

    vm.agregarReceta = function (receta) {
        var ingredienteAgregado = vm.agregarIngrediente(vm.nuevoIngrediente);
        if (receta.nombre) {

            vm.recetas.push(receta);

            vm.nuevaReceta = {
                ingredientes: []
            };
        } else {
            alertarError('la receta debe tener un nombre');
        }
    }
    vm.agregarIngrediente = function (ingrediente) {
        if (ingrediente.nombre) {
            vm.nuevaReceta.ingredientes.push(ingrediente);

            vm.nuevoIngrediente = {};
        } else {
            alertarError('el ingrediente debe tener un nombre');

            return false;
        }


    }
    function alertarError(error) {
        alert(error);
    }
}
