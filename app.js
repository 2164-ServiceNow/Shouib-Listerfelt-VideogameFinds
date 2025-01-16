'use strict';

angular.module('videogameFinds', [
    'ngRoute',
    'videogameList',
    'searchBar',
    'videogameDetails',
    'wishlist'
  ])
  .config(function($locationProvider, $routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "pages/main.html"
    })
    .when("/wishlist", {
      templateUrl: "pages/wishlist.html"
    })

    $locationProvider.html5Mode({
        enabled:true,
        requireBase:false
      });
    });