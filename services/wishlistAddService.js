//Essentially a class, allows you to create your own properties and functions to use anywhere given that it is passed in the controller
angular.module('videogameFinds')
    .service('wishlistAddService', function(){
        
        //Function that adds the gameID and JSON information to localStorage
        this.wishlistAdder = function(gameID, newVideogame){
            localStorage.setItem(gameID, JSON.stringify(newVideogame))
        }

    })
