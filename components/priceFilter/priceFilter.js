angular.module('priceFilter', [])
    .component('priceFilter',{
        templateUrl: 'components/priceFilter/priceFilter.html', //Assigns how this component will look 

        //Controller for the component that utilizes scope and the searchBarService
        controller: function PriceFilterCtrl($scope, priceSliderService){
            //Custom properties for when the element is instantiated
            $scope.priceValue = 60;

            //Custom search function that calls the searchBarService's setQuery function using the searchValue 
            $scope.search = function (){
                
                priceSliderService.setQuery($scope.priceValue)
            }
        }
    })