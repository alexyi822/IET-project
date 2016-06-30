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
    .controller('MainCtrl', ['$scope', '$http','$mdDialog', 'getPhotosService', function($scope, $http, $mdDialog, getPhotosService) {
      
      //STEP 2 (refactor ajax call to a service):
      $scope.search = '';
      $scope.cards = [];
      var photos = [];
      $scope.searching = 'Status: awaiting query';
      $scope.filterOption = 'all';
      $scope.createAlbum = false;
      $scope.albumName = '';

      $scope.albums = [
        // {
        //   'name': 'San Francisco',
        //   'cards': [],
        // },
        // {
        //   'name': 'Ferrari',
        //   'cards': [],
        // }
      ];
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
          "date" : photos[random].activity.object.date,
          "liked" : false,
          "album": ''
        });
      };

      $scope.showField = function() {
        if (!$scope.createAlbum){
          $scope.createAlbum = true;
        } else {
          $scope.createAlbum = false;
        }
      };

      $scope.clearSaved = function() {
        var card;
        for (card in $scope.cards) {
          $scope.cards[card].liked = false;
        }
      }

      $scope.addAlbum = function() {

        var temp = [];
        var card;
        for (card in $scope.cards) {
          if ($scope.cards[card].liked) {
            temp.push($scope.cards[card]);
            $scope.cards[card].album = $scope.albumName;
          }
        }
        $scope.albums.push({
          'name': $scope.albumName,
          'cards': temp
        });

        $scope.createAlbum = false;
      };

      $scope.clearFeed = function() {
        $scope.cards = [];
      }




    }]);

})();