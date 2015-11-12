
'use strict'

angular.module('Reciper')
    .service('RecipesService', RecipesService);

RecipesService.$inject = [];

function RecipesService() {
    var self = this;
    var recetas = [];

    this.addReceta = function (receta) {
        recetas.push(receta);
    };

    this.getAll = function () {
        return recetas;
    };

    this.getReceta = function (index) {
        return recetas[index];
    };
}
