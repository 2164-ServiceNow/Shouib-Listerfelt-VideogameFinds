angular.module('onSaleList', [])
    .component('onSaleList', {
        templateUrl: 'components/onSaleList/onSaleList.html', 

        controller: function($scope, $http){ 
            $scope.videogames = ""
            $scope.selectedVideogame = ""

            //Runs an http get request to retrieve and save a list of 8 games currently on sale
            $http.get("https://www.cheapshark.com/api/1.0/deals?onSale=true&pageSize=8&pageNumber=10")
            .then((response => {
                $scope.videogames = response.data;
            }))

            //Runs an http get request containing more details of the videogame that is passed in
            //This function will end up displaying the modal by updating the videogameDetails binding, triggering its watch function
            $scope.selectVideogame = function(videogame){
                $http.get(`https://www.cheapshark.com/api/1.0/deals?id=${videogame.dealID}`)
                .then((response) => {
                    $scope.selectedVideogame = response.data;
                })
            }
        }
    })