//Ensures you cannot use undeclared variables, enforcing dependency injection
'use strict';

//Basically loads in our components by name to use in our html files
angular.module('videogameFinds', [
    'ngRoute',
    'videogameList',
    'searchBar',
    'videogameDetails',
    'wishlist',
    'videogameDealsList',
    'priceFilter',
    'onSaleList',
    'randomGame'
  ])
  //Sets up configurations, routeProvider sets up the routes to different pages
  .config(function($routeProvider) {
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
    .when("/random-game",{
      templateUrl: "pages/randomGame.html"
    })
  })