angular.module('videogameFinds')
    .service('wishlistRemoveService', function(){
        
        this.wishlistRemover = function(gameID){
            localStorage.removeItem(gameID)
        }

    })