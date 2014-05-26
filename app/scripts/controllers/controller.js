'use strict';

/* Controllers */

app.controller('Game', function($scope, $http, $location, QA, Rounds ) {
    //Reset all QA buckets
    QA.reset();

    $scope.round = 1;
    $scope.playing = true;

    QA.setUpGameData();
    $scope.answers = QA.answers();
    $scope.question = QA.question();

    $scope.submitAnswer = function(question, answer){
      if($scope.round <= Rounds) {
        if(question.en === answer.en){
          $scope.round++;

          QA.setUpGameData();
          $scope.answers = QA.answers();
          $scope.question = QA.question();

          if($scope.round === Rounds + 1){
            $scope.playing = false;
            $scope.message = 'Amazing well done!';
            $scope.score = ($scope.round-1) * 1000;
          }
        }
        else {
          $scope.playing = false;
          $scope.message = 'Sorry Wrong Answer :(';
          $scope.score = ($scope.round-1) * 1000;
        }
      }
    };
  })

  .controller('Highscores', function($scope, $location, Highscores){
      $scope.highscores = Highscores.get();

      $scope.submitScore = function(){
        Highscores.save({"name": $scope.name, "score": $scope.score });
        $scope.highscores = Highscores.get();
        $location.path('/highscores');
      };
    });
