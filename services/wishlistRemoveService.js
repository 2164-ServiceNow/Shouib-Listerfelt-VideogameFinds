//Essentially a class, allows you to create your own properties and functions to use anywhere given that it is passed in the controller
angular.module('videogameFinds')
    .service('wishlistRemoveService', function(){
        
        //Function that removes an element in localStorage given the gameID key
        this.wishlistRemover = function(gameID){
            localStorage.removeItem(gameID)
        }

    })