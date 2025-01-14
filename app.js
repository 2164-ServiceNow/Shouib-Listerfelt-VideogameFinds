'use strict';

angular.module('videogameFinds', [
    'ngRoute',
    'videogameList',
    'searchBar'
  ])
  .config(function($locationProvider, $routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "pages/main.html"
    })

    $locationProvider.html5Mode({
        enabled:true,
        requireBase:false
      });
    });