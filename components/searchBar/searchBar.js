angular.module('searchBar', [])
    .component('searchbar',{
        templateUrl: 'components/searchBar/searchBar.html', 

        controller: function SearchBarCtrl($scope, searchBarService){
            $scope.searchValue = "" 

            //Calls the searchBarService's setQuery function using the searchValue 
            $scope.search = function (){
                searchBarService.setQuery($scope.searchValue)
            }
        }
    })