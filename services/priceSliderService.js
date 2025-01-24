//Service for the price slider on the deals page. Default value set to 60 representing 60 USD. Has getters and setters to update the value
angular.module('videogameFinds')
    .service('priceSliderService', function(){
        this.query = '60';

        this.setQuery = function(query){
            this.query = query
        }

        this.getQuery = function(){
            return this.query
        }
    })