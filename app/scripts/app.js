'use strict';

/* global $:true */

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
        if( $(element).hasClass('correct') ){
          $(element).addClass('animated bounce');
        } else {
          $(element).addClass('animated wobble');
        }
      }

      $(element).one(
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function(){
          console.log('ENDED');
          var $scope = angular.element(element).scope();

          console.log($scope.answer);
          console.log($scope.question);

          $scope.submitAnswer($scope.question, $scope.answer);
      });
    }
  };
});






