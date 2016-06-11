(function(){

  'use strict';

  /**
   * @ngdoc function
   * @name aggieFeedActivitiesApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the aggieFeedActivitiesApp
   */
  angular.module('aggieFeedActivitiesApp')
    .controller('MainCtrl', ['$scope', '$http', 'getPhotosService', function($scope, $http, getPhotosService) {
      
      //STEP 2 (refactor ajax call to a service):
      $scope.search = '';
      $scope.cards = [];
      var photos = [];
      $scope.searching = 'Status: awaiting query';
      // var numCards = 0;

      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

      $scope.setSearch = function() {
        //grab 50 pictures from search query sorted by relevance
        

        $scope.searching = 'Status: searching... <img src="images/loading.gif" height="18" width="18">';


        getPhotosService.getPhotos(function(data){
          photos = [];
          photos = data;
          $scope.searching = 'Status: search complete ' + '<img src="images/check.png" height="10" width=10">';
        }, $scope.search);
      };

      $scope.getPhoto = function() {
        var random = getRandomInt(0, photos.length);
        $scope.cards.push({
          "url" : photos[random].activity.object.contentImage.dimensions.normal.url,
          "title" : photos[random].activity.object.content,
          "date" : photos[random].activity.object.date
        });
      };




    }]);

})();