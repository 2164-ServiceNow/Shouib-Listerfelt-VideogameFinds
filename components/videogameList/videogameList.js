angular.module('videogameList', [])
<<<<<<< HEAD

.component('videogameList', {
    templateUrl: 'components/videogameList/videogameList.html',
    controller: function($scope, $http, searchBarService){ // This is dependency injection
        $scope.videogames = ""

        $scope.$watch(function (){
            return searchBarService.getQuery()
        }, function(newQuery){

            $scope.searchValue = newQuery

            $http.get(`https://www.cheapshark.com/api/1.0/games?title=${newQuery}`)
            .then((response) => {
                $scope.videogames = response.data;
              
            })
        })
    }
})
=======
    .component('videogameList', {
        templateUrl: 'components/videogameList/videogameList.html',
        controller: function($scope,$http){
            $http.get("https://www.cheapshark.com/api/1.0/games?title=batman")
            .then(response => {
                $scope.videogames = response.data
                console.log($scope.videogames)
            })
        }
    })
>>>>>>> bc1ab6ca1c5028b5e7587abaf3260cb8241cd02e
