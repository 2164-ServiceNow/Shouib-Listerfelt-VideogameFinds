angular.module('videogameList', [])
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