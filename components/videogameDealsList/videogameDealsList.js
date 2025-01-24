angular.module('videogameDealsList', [])
    .component('videogameDealsList', {
        templateUrl: 'components/videogameDealsList/videogameDealsList.html', 

        controller: function($scope, $http, searchBarService, priceSliderService){ 
            $scope.videogames = ""
            $scope.selectedVideogame = ""
            $scope.searchValue = ""
            $scope.priceValue = ""

            //Watches for changes/interaction with the searchbar and calls the function when that happens
            $scope.$watch(function (){

                return searchBarService.getQuery()
            }, function(newQuery){ //newQuery is the returned value above
                $scope.searchValue = newQuery

                //Runs an http get request to display a list of games based off of the non-exact title and upper price restriction
                $http.get(`https://www.cheapshark.com/api/1.0/deals?title=${newQuery}&upperPrice=${$scope.priceValue}`)
                .then((response) => {
                    $scope.videogames = response.data;
                })
            })

            //Watches for changes/interaction with the price slider and calls the function when that happens
            $scope.$watch(function (){

                return priceSliderService.getQuery()
            }, function(newQuery){ //newQuery is the returned value above
                $scope.priceValue = newQuery

                //Runs an http get request to display a list of games based off of the non-exact title and upper price restriction
                $http.get(`https://www.cheapshark.com/api/1.0/deals?title=${$scope.searchValue}&upperPrice=${newQuery}`)
                .then((response) => {
                    $scope.videogames = response.data;
                })
            })

            //Runs an http get request containing more details of the videogame that is passed in based off of the dealID
            //This function will end up displaying the modal by updating the videogameDetails binding, triggering its watch function
            $scope.selectVideogame = function(videogame){
                $http.get(`https://www.cheapshark.com/api/1.0/deals?id=${videogame.dealID}`)
                .then((response) => {
                    $scope.selectedVideogame = response.data;
                })
            }
        }
    })


