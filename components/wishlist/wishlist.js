angular.module('wishlist', [])
    .component('wishlist', {
        templateUrl: 'components/wishlist/wishlist.html',

        controller: function($scope, wishlistService){ 

            //Function displays the wishlist by parsing the data in local storage, and saving it to an array 
            $scope.loadWishlist = function(){
                $scope.wishlistArray = []
                for (let key in localStorage) {
                    //localStorage Key should always be a number for videogames as it is the gameID from the API, and no gameID is <= 0 
                    if(key>0){
                        let game = JSON.parse(localStorage.getItem(key))
                        $scope.wishlistArray.push(game)
                    }
                }
            }

            //Expands modal for videogameDetails by updating the binding, triggering the controllers watch function
            $scope.selectVideogame = function(videogame){
                $scope.selectedVideogame = videogame;
            }
            

            //Calls the wishlistService function and then reloads the page again to dynamically update the wishlist when you remove a game
            $scope.callWishlistRemover = function(gameID){
                wishlistService.wishlistRemover(gameID)
                $scope.loadWishlist()
            }
        }
    })