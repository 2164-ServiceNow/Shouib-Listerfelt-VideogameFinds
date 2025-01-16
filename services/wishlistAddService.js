localStorage.clear()
angular.module('videogameFinds')
    .service('wishlistAddService', function(){
        
        this.wishlistAdder = function(gameID, newVideogame){
            localStorage.setItem(gameID, JSON.stringify(newVideogame))
            
            console.log("game has been added")
        }

    })
