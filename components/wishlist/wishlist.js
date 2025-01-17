angular.module('wishlist', [])
    .component('wishlist', {
        templateUrl: 'components/wishlist/wishlist.html',   //Assigns how this component will look 

        controller: function($scope, wishlistRemoveService){ 

            //Function displays the wishlist by parsing the data in local storage, and saving it to an array 
            $scope.loadWishlist = function(){
                $scope.wishlistArray = []
                for (let key in localStorage) {
                    //localStorage Key should always be a number for videogames as it is the gameID from the API 
                    if(key>0){
                        let game = JSON.parse(localStorage.getItem(key))
                        $scope.wishlistArray.push(game)
                    }
                }
            }

            //Still working on adding implementation to show videogame details like in videogameList
            // $scope.selectVideogame = function(videogame){
            //     $scope.selectedVideogame = videogame
            // }

            //Calls the wishlistRemoveService function and then reloads the page again to dynamically update the wishlist when you remove a game
            $scope.callWishlistRemover = function(gameID){
                wishlistRemoveService.wishlistRemover(gameID)
                $scope.loadWishlist()
            }
        }
    })