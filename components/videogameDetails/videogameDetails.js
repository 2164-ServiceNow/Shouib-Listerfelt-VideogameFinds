angular.module('videogameDetails', [])
    .component('videogameDetails', {
        templateUrl: 'components/videogameDetails/videogameDetails.html',   //Assigns how this component will look 

        //Connects data from Model (js) to View (html)
        bindings: {
            videogame: '<'  //Pass data down from parent to child (videogameDetails.js) and does not allow for the child to modify it
        },
        controller: function($scope, $http, $location, wishlistAddService){

            //When the videogame binding is updated with data, then this watch is called, and saves all of the data from videogame
            //videogame binding is saved in newVideogame
            $scope.$watch('$ctrl.videogame', function(newVideogame){
                
                if(newVideogame !== ""){
                    $scope.name = newVideogame.gameInfo.name
                    $scope.gameID = newVideogame.gameInfo.gameID
                    $scope.imageUrl = newVideogame.gameInfo.thumb
                    $scope.salePrice = newVideogame.gameInfo.salePrice
                    $scope.retailPrice = newVideogame.gameInfo.retailPrice
                    $scope.steamRatingText = newVideogame.gameInfo.steamRatingText
                    $scope.steamId = newVideogame.gameInfo.steamAppID
                    $scope.metacriticLink = newVideogame.gameInfo.metacriticLink
                    $scope.showDetails = true
                    $scope.videogame = newVideogame
                    $scope.storeID = newVideogame.gameInfo.storeID
                    $scope.fromWishlist = false;    //Flag that checks to see if page is currently on /wishlist. If it is, we won't want the add wishlist button showing
                    if($location.path() == "/wishlist"){
                        $scope.fromWishlist = true;
                    }
                }
                
                //Get request returns a list of stores that this api pulls game data from
                $http.get("https://www.cheapshark.com/api/1.0/stores")
                    .then((response) => {
                        $scope.listOfStores = response.data;

                        //Find the store name by looking through the list of stores and matching the storeID's, then save the stores name from the response data
                        for(let key in $scope.listOfStores){
                            if($scope.listOfStores[key].storeID === $scope.storeID){
                                $scope.storeName = $scope.listOfStores[key].storeName
                            }
                        }

                    })
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