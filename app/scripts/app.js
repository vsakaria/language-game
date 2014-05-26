'use strict';

var app  = angular
  .module('languageGameApp', [
    'ngRoute',
    'ngResource'
  ])
.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/partials/home.html'
      })
      .when('/game', {
        templateUrl: 'views/partials/game.html',
        controller: 'Game'
      })
      .when('/highscores', {
        templateUrl: 'views/partials/highscores.html',
        controller: 'Highscores'
      })
      .otherwise({
        redirectTo: '/home'
      });

    $locationProvider.html5Mode(false);
  });


