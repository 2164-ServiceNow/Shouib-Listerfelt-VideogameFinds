//Service for the add/remove wishlist buttons
angular.module('videogameFinds')
    .service('wishlistService', function(){
        
        //Function that adds the gameID and JSON information to localStorage
        this.wishlistAdder = function(gameID, newVideogame){
            localStorage.setItem(gameID, JSON.stringify(newVideogame))
        }

        //Function that removes an element in localStorage given the gameID key
        this.wishlistRemover = function(gameID){
            localStorage.removeItem(gameID)
        }

        //Checks if a gameID is already in the wishlist, returning true or false respectively
        this.inWishlist = function(gameID){
            if(localStorage.getItem(gameID) === null){
                return false;
            }
            return true;
        }

    })
