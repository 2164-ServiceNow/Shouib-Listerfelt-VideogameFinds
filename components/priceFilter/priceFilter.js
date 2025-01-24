angular.module('priceFilter', [])
    .component('priceFilter',{
        templateUrl: 'components/priceFilter/priceFilter.html', 

        controller: function PriceFilterCtrl($scope, priceSliderService){
            //Default display value for the price slider
            $scope.priceValue = 60;

            //Calls the searchBarService's setQuery function using the priceValue 
            $scope.search = function (){
                
                priceSliderService.setQuery($scope.priceValue)
            }
        }
    })