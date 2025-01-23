angular.module('randomGame', [])
    .component('randomGame', {
        templateUrl: 'components/randomGame/randomGame.html', //Assigns how this component will look 

        controller: function($scope, $http, wishlistService){ // This is dependency injection
            //Custom properties for when the element is instantiated
            $scope.name = ""
            $scope.gameID = ""
            $scope.imageUrl = ""
            $scope.salePrice = ""
            $scope.retailPrice = ""
            $scope.steamRatingText = ""
            $scope.steamId = ""
            $scope.metacriticLink = ""
            $scope.storeID = ""
            $scope.storeName = ""
            $scope.videogame = ""
            
            //Calls the wishlistService with the gameID and newVideogame JSON
            $scope.callWishlistAdder = function(){
                wishlistService.wishlistAdder($scope.gameID, $scope.videogame);
            }

            //Searches for a new game using a random number generator and saves all data accordingly
            $scope.searchGame = function(){
                let pageNumber = Math.floor(Math.random()*2400)
            
                $http.get(`https://www.cheapshark.com/api/1.0/deals?pageSize=1&pageNumber=${pageNumber}`)
                .then((response) => {
                    $scope.name = response.data[0].title
                    $scope.retailPrice = response.data[0].normalPrice
                    $scope.salePrice = response.data[0].salePrice
                    $scope.steamRatingText = response.data[0].steamRatingText
                    $scope.steamId = response.data[0].steamAppID
                    $scope.imageUrl = response.data[0].thumb
                    $scope.metacriticLink = response.data[0].metacriticLink
                    $scope.storeID = response.data[0].storeID  
                    $scope.gameID = response.data[0].gameID

                    //Get request returns a list of stores that this api pulls game data from
                    $http.get("https://www.cheapshark.com/api/1.0/stores")
                    .then((response) => {
                        $scope.listOfStores = response.data;

                        //Find the store name by looking through the list of stores and matching the storeID's, then save the stores name from the response data
                        for(let key in $scope.listOfStores){
                            if($scope.listOfStores[key].storeID === response.data[0].storeID){
                                $scope.storeName = $scope.listOfStores[key].storeName
                            }
                        }
                    })

                    $http.get(`https://www.cheapshark.com/api/1.0/deals?id=${response.data[0].dealID}`)
                        .then((response) => {
                            
                            $scope.videogame = response.data;
                        })
                })
            }

            $scope.searchGame();    //Call function for a game to be generated upon page load
        }
    })