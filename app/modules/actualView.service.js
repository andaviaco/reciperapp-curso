angular.module('Reciper')
    .service('ActualViewService', ActualViewService);

ActualViewService.$inject = ['$location', '$rootScope'];

function ActualViewService($location, $rootScope) {
    this.setView = function(){

        $rootScope.activeView = $location.path();
        
    };
}