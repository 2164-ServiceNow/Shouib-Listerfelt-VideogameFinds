'use strict';

angular.module('videogameFinds', [
    'ngRoute',
<<<<<<< HEAD
    'videogameList',
    'searchBar'
=======
    'videogameList'
>>>>>>> bc1ab6ca1c5028b5e7587abaf3260cb8241cd02e
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