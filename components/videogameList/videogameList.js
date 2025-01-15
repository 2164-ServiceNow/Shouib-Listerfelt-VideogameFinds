angular.module('videogameList', [])

.component('videogameList', {
    templateUrl: 'components/videogameList/videogameList.html',
    controller: function($scope, $http, searchBarService){ // This is dependency injection
        $scope.videogames = ""
        $scope.selectedVideogame = ""

        $scope.$watch(function (){
            return searchBarService.getQuery()
        }, function(newQuery){

            $scope.searchValue = newQuery

            $http.get(`https://www.cheapshark.com/api/1.0/games?title=${newQuery}`)
            .then((response) => {
                $scope.videogames = response.data;
            })
        })
        $scope.selectVideogame = function(videogame){
            $http.get(`https://www.cheapshark.com/api/1.0/deals?id=${videogame.cheapestDealID}`)
            .then((response) => {
                $scope.selectedVideogame = response.data;
            })
        }
    }
})


