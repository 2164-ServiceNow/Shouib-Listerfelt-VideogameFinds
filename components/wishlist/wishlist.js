angular.module('wishlist', [])
    .component('wishlist', {
        templateUrl: 'components/wishlist/wishlist.html',
        controller: function($scope, wishlistRemoveService){ 

            $scope.loadWishlist = function(){
                $scope.wishlistArray = []
                for (let key in localStorage) {
                    if(key>0){
                        let game = JSON.parse(localStorage.getItem(key))
                        $scope.wishlistArray.push(game)
                    }
                }
            }
            // $scope.selectVideogame = function(videogame){
            //     $scope.selectedVideogame = videogame
            // }
            $scope.callWishlistRemover = function(gameID){
                wishlistRemoveService.wishlistRemover(gameID)
                $scope.loadWishlist()
            }
        }
    })