angular.module('videogameDetails', [])
    .component('videogameDetails', {
        templateUrl: 'components/videogameDetails/videogameDetails.html',

        //Connects data from Model (js) to View (html)
        bindings: {
            videogame: '<'  //One way databinding. Pass data down from parent to child (videogameDetails.js)
        },

        controller: function($scope, $http, $location, wishlistService){

            //When the videogame binding is updated with data, then this watch is called, and saves all of the data from videogame
            //videogame binding is saved in newVideogame
            $scope.$watch('$ctrl.videogame', function(newVideogame){
                if(newVideogame != undefined && newVideogame.gameInfo != undefined){
                    $scope.name = newVideogame.gameInfo.name
                    $scope.gameID = newVideogame.gameInfo.gameID
                    $scope.imageUrl = newVideogame.gameInfo.thumb
                    $scope.salePrice = newVideogame.gameInfo.salePrice
                    $scope.retailPrice = newVideogame.gameInfo.retailPrice
                    $scope.steamRatingText = newVideogame.gameInfo.steamRatingText
                    $scope.steamId = newVideogame.gameInfo.steamAppID
                    $scope.metacriticLink = newVideogame.gameInfo.metacriticLink
                    $scope.storeID = newVideogame.gameInfo.storeID
                    $scope.videogame = newVideogame
                    $scope.showDetails = true       //Flag that determines the visual state of the pop up modal
                    $scope.savedInWishlist = false; //Flag for if the selected game is currently saved in the wishlist or not
                    $scope.fromWishlist = false;    //Flag that checks to see if page is currently on /wishlist 
                    
                    // If it is, we won't want the add wishlist button showing
                    if($location.path() == "/wishlist"){
                        $scope.fromWishlist = true;
                    }

                    //Calls the wishlistService inWishlist function to check if the selected game is currently in wishlist
                    //If it is, then the add to wishlist button wont show for this games pop up modal 
                    if(wishlistService.inWishlist($scope.gameID)){
                        $scope.savedInWishlist = true;
                    }
                }

                // Trying to find what store is selling this game
                // Get request returns a list of stores that this api pulls game data from
                $http.get("https://www.cheapshark.com/api/1.0/stores")
                    .then((response) => {
                        $scope.listOfStores = response.data;

                        //Find the store name by looking through the list of stores and matching the storeID's, then save the stores name
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

            //Calls the wishlistService add function with the gameID and newVideogame JSON
            $scope.callWishlistAdder = function(gameID, newVideogame){
                wishlistService.wishlistAdder(gameID, newVideogame);
            }

            //Calls the wishlistService remove function
            $scope.callWishlistRemover = function(gameID){
                wishlistService.wishlistRemover(gameID)
            }

        }
    })