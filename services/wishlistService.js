//Essentially a class, allows you to create your own properties and functions to use anywhere given that it is passed in the controller
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

        this.inWishlist = function(gameID){
            if(localStorage.getItem(gameID) === null){
                return false;
            }
            return true;
        }

    })
