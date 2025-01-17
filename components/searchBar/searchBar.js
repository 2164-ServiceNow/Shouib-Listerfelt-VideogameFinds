angular.module('searchBar', [])
    .component('searchbar',{
        templateUrl: 'components/searchBar/searchBar.html', //Assigns how this component will look 

        //Controller for the component that utilizes scope and the searchBarService
        controller: function SearchBarCtrl($scope, searchBarService){
            //Custom properties for when the element is instantiated
            $scope.searchValue = "" 

            //Custom search function that calls the searchBarService's setQuery function using the searchValue 
            $scope.search = function (){
                searchBarService.setQuery($scope.searchValue)
            }
        }
    })