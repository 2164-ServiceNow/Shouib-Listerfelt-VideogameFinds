//Essentially a class, allows you to create your own properties and functions to use anywhere given that it is passed in the controller
angular.module('videogameFinds')
    .service('searchBarService', function(){
        this.query = '';

        this.setQuery = function(query){
            this.query = query
        }

        this.getQuery = function(){
            return this.query
        }
    })