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
                $scope.retailPrice = newVideogame.gameInfo.retailPrice
                $scope.steamRatingText = newVideogame.gameInfo.steamRatingText
                $scope.steamId = newVideogame.gameInfo.steamAppID
                $scope.metacriticLink = newVideogame.gameInfo.metacriticLink
                $scope.showDetails = true;
            })

            $scope.hideInfo = function(){
                $scope.showDetails = false;
            }

        }
    })