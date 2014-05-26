'use strict';

var app  = angular
  .module('languageGameApp', [
    'ngRoute',
    'ngResource',
    'ngAnimate'
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

app.directive(['clicked', function(clicked) {
  var controller = function($scope) {
    $scope.showAnswer = false;
  };

  return {
    restrict: 'C',
    scope: false,
    controller: controller
  };
}]);

app.animation('.answer-animation', function(){
  return {
    beforeAddClass: function(element, className, done){
      if (className === 'clicked') {
        $(element).addClass('animated wobble');

      }
      else {
        done();
      }
    },

    beforeRemoveClass: function(element, className, done) {
      if (className == 'clicked') {
        }
      else {
        done();
      }
    }
  };
});