angular.module('Reciper.recipes')
    .service('CategoriesService', CategoriesService);

CategoriesService.$inject = [];

function CategoriesService() {

    'use strict';

    this.query = function(){
        
        return [
            {
                key: "0",
                value: "Desayuno"
            },
            {
                key: "1",
                value: "Comida"
            },
            {
                key: "2",
                value: "Cena"
            },
            {
                key: "3",
                value: "Otra"
            }
        ];
    };


}