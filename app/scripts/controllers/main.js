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
    

    $scope.search;
    $scope.dateTaken;
    $scope.cards = [];
    $scope.searching = 'awaiting query';

    var data = {};
    var numCards = 0;


    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }


    $scope.setSearch = function() {
      //grab 50 pictures from search query sorted by relevance
      var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=11485ecf02eaf4f3bedc13056c539453&format=json&nojsoncallback=1&content_type=1&safe_search=1&per_page=50&sort=relevance&extras=url_m, date_taken&text=' + $scope.search;
      var responsePromise = $http.get(url);
      
      $scope.searching = 'searching...';

      responsePromise.success(function(response) {
        $scope.searching = 'search complete';
        data = response.photos.photo;
      });
    };

    $scope.getPhoto = function() {
      var random = getRandomInt(0, data.length);
      $scope.cards.push({});
      $scope.cards[numCards].photo = data[random].url_m;
      $scope.cards[numCards].title = data[random].title;
      $scope.cards[numCards].dateTaken = data[random].datetaken;
      numCards += 1;
    };




  }]);