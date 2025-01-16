angular.module('wishlist', [])
    .component('wishlist', {
        templateUrl: 'components/wishlist/wishlist.html',
        controller: function($scope){ 

            $scope.loadWishlist = function(){
                console.log("Parsing...")
                for (let key in localStorage) {
                    let game = JSON.parse(localStorage.getItem(key))
                    if(game !== null){
                        
                        console.log(game.gameInfo);
                    }
                    
                }
            }
            
        }
    })