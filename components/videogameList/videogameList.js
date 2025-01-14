// angular.module('videogameList', [])

// .component('videogameList', {
//     templateUrl: 'components/videogameList/videogameList.html',
//     controller: function($scope, $http, searchBarService){
//         $scope.videogames = ''

//         $http.get('https://www.cheapshark.com/api/1.0/games?title=batman')
//             .then((response) => {
//                 $scope.videogames = response.data;
//                 console.log($scope.videogames)

//             })
//     }
// })
angular.module('videogameList', [])

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