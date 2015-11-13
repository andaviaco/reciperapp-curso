'use strict';

angular.module('Reciper.recipes')
    .filter('capitalize', capitalize);

capitalize.$inject = [];

function capitalize() {
    return function (input) {
        switch (input) {
            case 'T':
                return 'Tedioso';
        }
    }
}
