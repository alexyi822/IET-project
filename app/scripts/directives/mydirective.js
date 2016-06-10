'use strict';

/**
 * @ngdoc directive
 * @name aggieFeedActivitiesApp.directive:myDirective
 * @description
 * # myDirective
 */

//custom directive shows date under picture in each card
angular.module('aggieFeedActivitiesApp')
  .directive('myDirective', function () {
    return {
      template: '<p>Date taken: {{card.date}}</p>',
    };
  });
