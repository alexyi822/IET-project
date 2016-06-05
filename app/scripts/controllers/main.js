'use strict';

/**
 * @ngdoc function
 * @name aggieFeedActivitiesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aggieFeedActivitiesApp
 */
angular.module('aggieFeedActivitiesApp')
  .controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
    
    $scope.photos = {};
    $scope.photo;
    $scope.title;
    $scope.search;
    $scope.photoDateTaken;
    $scope.cards = [];
    var numCards = 0;
    $scope.searching = 'awaiting query';


    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }


    $scope.setSearch = function() {
      var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=11485ecf02eaf4f3bedc13056c539453&format=json&nojsoncallback=1&content_type=1&safe_search=1&per_page=50&sort=relevance&extras=url_m, date_taken&text=' + $scope.search;
      var responsePromise = $http.get(url);
      
      $scope.searching = 'searching...';

      responsePromise.success(function(response) {
        $scope.searching = 'search complete';
        $scope.photos = response.photos.photo;
      });
    };

    $scope.getPhoto = function() {
      // $scope.car = data.photos.photo[0].url_m;
      var random = getRandomInt(0, $scope.photos.length);
      $scope.photo = $scope.photos[random].url_m;
      $scope.title = $scope.photos[random].title;
      $scope.photoDateTaken = $scope.photos[random].datetaken;
      $scope.cards.push({});
      $scope.cards[numCards].photo = $scope.photo;
      $scope.cards[numCards].title = $scope.title;
      $scope.cards[numCards].photoDateTaken = $scope.photoDateTaken;
      numCards += 1;
    };




  }]);