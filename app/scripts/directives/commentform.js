'use strict';

/**
 * @ngdoc directive
 * @name aggieFeedActivitiesApp.directive:commentForm
 * @description
 * # commentForm
 */

angular.module('aggieFeedActivitiesApp')
  .directive('commentForm', function () {
    return {
      templateUrl: 'views/comment-form.html'
    };
  });
