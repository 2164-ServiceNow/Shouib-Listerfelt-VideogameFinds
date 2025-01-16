angular.module('videogameDetails', [])
    .component('videogameDetails', {
        templateUrl: 'components/videogameDetails/videogameDetails.html',
        bindings: {
            videogame: '<'
        },
        controller: function($scope, wishlistAddService){
            $scope.$watch('$ctrl.videogame', function(newVideogame){
                $scope.name = newVideogame.gameInfo.name
                $scope.gameID = newVideogame.gameInfo.gameID
                $scope.imageUrl = newVideogame.gameInfo.thumb
                $scope.retailPrice = newVideogame.gameInfo.retailPrice
                $scope.steamRatingText = newVideogame.gameInfo.steamRatingText
                $scope.steamId = newVideogame.gameInfo.steamAppID
                $scope.metacriticLink = newVideogame.gameInfo.metacriticLink
                $scope.showDetails = true
                $scope.testVideogame = newVideogame
            })

            $scope.hideInfo = function(){
                $scope.showDetails = false;
            }

            $scope.callWishlistAdder = function(gameID, newVideogame){
                wishlistAddService.wishlistAdder(gameID, newVideogame);
            }

        }
    })