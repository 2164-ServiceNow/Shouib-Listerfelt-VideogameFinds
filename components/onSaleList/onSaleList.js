angular.module('onSaleList', [])
    .component('onSaleList', {
        templateUrl: 'components/onSaleList/onSaleList.html', //Assigns how this component will look 

        controller: function($scope, $http){ // This is dependency injection
            //Custom properties for when the element is instantiated
            $scope.videogames = ""
            $scope.selectedVideogame = ""

            $http.get("https://www.cheapshark.com/api/1.0/deals?onSale=true&pageSize=8&pageNumber=10")
            .then((response => {
                $scope.videogames = response.data;
            }))

            //Custom function that runs a http get request to an endpoint containing more details of the videogame that is passed in
            $scope.selectVideogame = function(videogame){
                $http.get(`https://www.cheapshark.com/api/1.0/deals?id=${videogame.dealID}`)
                .then((response) => {
                    $scope.selectedVideogame = response.data;
                })
            }
        }
    })