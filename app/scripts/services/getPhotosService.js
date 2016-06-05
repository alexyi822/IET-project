'use strict';

/**
 * @ngdoc service
 * @name aggieFeedActivitiesApp.getPhotosService
 * @description
 * # getPhotosService
 * Service in the aggieFeedActivitiesApp.
 */
angular.module('aggieFeedActivitiesApp')
  .service('getPhotosService', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var baseURL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=11485ecf02eaf4f3bedc13056c539453&format=json&nojsoncallback=1&content_type=1&safe_search=1&per_page=50&sort=relevance&extras=url_m, date_taken&text=';
    var data = {};
    var searching;

    return {
      getPhotos: function(callback, query) {
              var responsePromise = $http.get(baseURL + query);

                  responsePromise.success(function(response){
                    data = response.photos.photo;
                    
                    callback(data);

                  })
      }
    }

  }]);