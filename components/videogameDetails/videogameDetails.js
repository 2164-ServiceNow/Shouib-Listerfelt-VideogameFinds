angular.module('videogameDetails', [])
    .component('videogameDetails', {
        templateUrl: 'components/videogameDetails/videogameDetails.html',
        bindings: {
            videogame: '<'
        },
        controller: function($scope){
            $scope.$watch('$ctrl.videogame', function(newVideogame){
                $scope.name = newVideogame.gameInfo.name
                $scope.imageUrl = newVideogame.gameInfo.thumb
                $scope.salePrice = newVideogame.gameInfo.salePrice
                $scope.steamRatingText = newVideogame.gameInfo.steamRatingText
                $scope.showDetails = true;
            })

            $scope.hideInfo = function(){
                $scope.showDetails = false;
            }

        }
    })