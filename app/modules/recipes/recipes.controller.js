
'use strict';

angular.module('Reciper.recipes')
    .controller('RecipesController', RecipesController);

RecipesController.$inject = ['RecipesService'];

function RecipesController(RecipesService) {
    this.recipes = RecipesService.query();

    this.guardar = guardar;
    this.tipos   = [];
    this.titulo  = 'hola';

    this.tipos = [{
        id: 'd',
        nombre: 'Desayuno'
    },{
        id: 'c',
        nombre: 'Comida'
    },{
        id: 'ce',
        nombre: 'Cena'
    }]

    function guardar() {
        this.recipes.unshift({
            name: this.nombre,
            category: this.tipo,
            description: this.descripcion
        })
    }
}
//--------------------------------------------------
angular.module('Reciper.recipes')
    .controller('formularioController', formularioController);

formularioController.$inject = [];

function formularioController() {

    
    
}
//----------------------------------------------------
angular.module('Reciper.recipes')
    .controller('listaController', listaController);

listaController.$inject = [];

function listaController() {

}