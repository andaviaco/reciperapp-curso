
angular.module('Reciper.recipes')
    .controller('RecipesController', RecipesController);

RecipesController.$inject = ['$scope'];

function RecipesController($scope) {
    
    'use strict';

    var vm = this;

    vm.notas = [];
    vm.tipos = ['Llamadas','Personales','Citas','General'];
    vm.tipo = 'Personales';
    vm.notaRepetida = false;

    vm.setNewNota = setNewNota;

    function setNewNota(){

        if(vm.newNota && vm.notas.indexOf(vm.newNota) === -1 ){
            vm.notas.push(vm.newNota);
            vm.newNota = undefined;
            $scope.notasForm.$setPristine();
            vm.notaRepetida = false;
        } else if(vm.notas.indexOf(vm.newNota) !== -1){
            vm.notaRepetida = true;
        }

    }

}