angular.module('videogameList', [])
    .component('videogameList', {
        templateUrl: 'components/videogameList/videogameList.html', //Assigns how this component will look 

        controller: function($scope, $http, searchBarService){ // This is dependency injection
            //Custom properties for when the element is instantiated
            $scope.videogames = ""
            $scope.selectedVideogame = ""

            //Watches for changes/interaction throughout the entire model (specifically with the searchbar) and calls the function when that happens
            $scope.$watch(function (){
                return searchBarService.getQuery()
            }, function(newQuery){ //newQuery is the returned value above
                $scope.searchValue = newQuery

                //Runs our http get request to display and saves the response data to a property
                $http.get(`https://www.cheapshark.com/api/1.0/games?title=${newQuery}`)
                .then((response) => {
                    $scope.videogames = response.data;
                })
            })

            //Custom function that runs a http get request to an endpoint containing more details of the videogame that is passed in
            $scope.selectVideogame = function(videogame){
                $http.get(`https://www.cheapshark.com/api/1.0/deals?id=${videogame.cheapestDealID}`)
                .then((response) => {
                    $scope.selectedVideogame = response.data;
                })
            }
        }
    })


