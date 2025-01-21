'use strict';

//Basically loads in our custom elements by name to use in our html files
angular.module('videogameFinds', [
    'ngRoute',
    'videogameList',
    'searchBar',
    'videogameDetails',
    'wishlist',
    'videogameDealsList',
    'priceFilter',
    'onSaleList'
  ])
  //Sets up configurations, routeProvider sets up the routes to different pages
  .config(function($locationProvider, $routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "pages/main.html"
    })
    .when("/deals", {
      templateUrl: "pages/deals.html"
    })
    .when("/wishlist", {
      templateUrl: "pages/wishlist.html"
    })

    //According to documentation: Use the $locationProvider to configure how the application deep linking paths are stored
    $locationProvider.html5Mode({
        enabled:true,
        requireBase:false
      });
    });