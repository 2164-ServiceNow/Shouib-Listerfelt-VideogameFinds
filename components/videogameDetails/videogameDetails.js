angular.module('videogameDetails', [])
    .component('videogameDetails', {
        templateUrl: 'components/videogameDetails/videogameDetails.html',
        bindings: {
            videogame: '<'
        },
        controller: function($scope, $http){
            $scope.$watch('$ctrl.videogame', function(newVideogame){
                $scope.name = newVideogame.gameInfo.name
                $scope.imageUrl = newVideogame.gameInfo.thumb
                $scope.salePrice = newVideogame.gameInfo.salePrice
                $scope.steamRatingText = newVideogame.gameInfo.steamRatingText
            })
        }
    })