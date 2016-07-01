(function(){

'use strict';

/**
 * @ngdoc function
 * @name aggieFeedActivitiesApp.controller:CommentCtrl
 * @description
 * # CommentCtrl
 * Controller of the aggieFeedActivitiesApp
 */
angular.module('aggieFeedActivitiesApp')
  .controller('CommentCtrl', ['$scope', function($scope) {

    var comment = this;
    $scope.newComment = {};

    $scope.comments = [];
    $scope.comments.push({
      "name" : "Kevin",
      "email" : "kc123@ucdavis.edu",
      "text" : "Neat app!"
      });
    $scope.comments.push({
      "name" : "Jason",
      "email" : "jy123@ucdavis.edu",
      "text" : "This thing sucks!"
      });
    
    comment.save = function(comment) {
      $scope.comments.push(comment);
      $scope.newComment = {};
    };
    

  }]);

})();