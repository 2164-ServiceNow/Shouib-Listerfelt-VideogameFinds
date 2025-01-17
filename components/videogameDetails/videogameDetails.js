angular.module('videogameDetails', [])
    .component('videogameDetails', {
        templateUrl: 'components/videogameDetails/videogameDetails.html',   //Assigns how this component will look 

        //Connects data from Model (js) to View (html)
        bindings: {
            videogame: '<'  //Pass data down from parent to child (videogameDetails.js) and does not allow for the child to modify it
        },
        controller: function($scope, wishlistAddService){

            //When the videogame binding is updated with data, then this watch is called, and saves all of the data from videogame
            //videogame binding is saved in newVideogame
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

            //Hides the modal by setting showDetails to be false
            $scope.hideInfo = function(){
                $scope.showDetails = false;
            }

            //Calls the wishlistAddService with the gameID and newVideogame JSON
            $scope.callWishlistAdder = function(gameID, newVideogame){
                wishlistAddService.wishlistAdder(gameID, newVideogame);
            }

        }
    })