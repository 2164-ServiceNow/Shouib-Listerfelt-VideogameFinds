//Service for the search bar. Has getters and setters for the search query
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