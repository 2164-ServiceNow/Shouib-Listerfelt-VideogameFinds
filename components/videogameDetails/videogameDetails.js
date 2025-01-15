angular.module('videogameDetails', [])
    .component('videogameDetails', {
        templateUrl: 'components/videogameDetails/videogameDetails.html',
        bindings: {
            videogame: '<'
        },
        controller: function($scope, $http){
            $scope.$watch('$ctrl.videogame', function(newVideogame){
                
            })
        }
    })