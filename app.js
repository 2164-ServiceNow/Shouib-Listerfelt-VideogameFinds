'use strict';

angular.module('videogameFinds', [
    'ngRoute',
    'searchBar',
    'videogameList'
  ])
  .config(function($locationProvider, $routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "pages/main.html",
    })

    $locationProvider.html5Mode({
        enabled:true,
        requireBase:false
      });
    });