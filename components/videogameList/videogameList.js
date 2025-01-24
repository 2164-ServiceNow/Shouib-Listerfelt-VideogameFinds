angular.module('videogameList', [])
    .component('videogameList', {
        templateUrl: 'components/videogameList/videogameList.html', 

        controller: function($scope, $http, searchBarService){ 
            $scope.videogames = ""
            $scope.selectedVideogame = ""

            //Watches for changes/interaction throughout the entire model (specifically with the searchbar) and calls the function when that happens
            $scope.$watch(function (){
                return searchBarService.getQuery()
            }, function(newQuery){ //newQuery is the returned value above
                $scope.searchValue = newQuery

                //Runs an http get request, saving a list of games containing newQuery in the title
                $http.get(`https://www.cheapshark.com/api/1.0/games?title=${newQuery}`)
                .then((response) => {
                    $scope.videogames = response.data;
                })
            })

            //Runs an http get request, containing more details of the videogame based off of the cheapestDealID
            //This function will end up displaying the modal by updating the videogameDetails binding, triggering its watch function
            $scope.selectVideogame = function(videogame){
                $http.get(`https://www.cheapshark.com/api/1.0/deals?id=${videogame.cheapestDealID}`)
                .then((response) => {
                    $scope.selectedVideogame = response.data;
                })
            }
        }
    })


