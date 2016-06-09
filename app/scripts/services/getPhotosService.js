'use strict';

/**
 * @ngdoc service
 * @name aggieFeedActivitiesApp.getPhotosService
 * @description
 * # getPhotosService
 * Service in the aggieFeedActivitiesApp.
 */
angular.module('aggieFeedActivitiesApp')
  .service('getPhotosService', aggieFeed); 

    aggieFeed.$inject = ['$http' ] ;  

    function aggieFeed($http) {
      // AngularJS will instantiate a singleton by calling "new" on this function
      var baseURL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=11485ecf02eaf4f3bedc13056c539453&format=json&nojsoncallback=1&content_type=1&safe_search=1&per_page=50&sort=relevance&extras=url_m, url_l, date_taken&text=';
      var data = [];
      var activities = [];

      function renderData(data) {
        for (var i = 0; i < data.length; i++) {
          activities.push(
          
            {
                "activity" : {
                    "icon": "icon-picture",
                    "actor": {
                        "id" : "department identifier",
                        "objectType": "person",
                        "displayName": "Department Name",
                        "author" : {
                            "id" : data[i].id,
                            "displayName" : data[i].owner
                        },
                        "image" : {
                            "color" : "#f1c40f"
                        }
                    },

                    "verb": "post",
                    "title": "Photo",
                    "object": {
                        "ucdSrcId" : "content identifier",
                        "objectType": "notification",
                        "content": data[i].title,
                        "contentImage" : {
                            "source" : "aggiefeed",
                            "dimensions" : {
                                "normal" : {
                                    "url": data[i].url_m,
                                    "width": data[i].width_m,
                                    "height": data[i].height_m
                                },
                                "high" : {
                                    "url": data[i].url_l,
                                    "width": data[i].width_l,
                                    "height": data[i].height_l
                                }
                        },
                        "ucdEdusModel" : {
                            "url" : "http://ucdavis.edu",
                            "urlDisplayName" : "UC Davis",
                            "event" : {
                                "location": "Event Location",
                                "hasStartTime" : true,
                                "startDate": "date string",
                                "endDate": "date string",
                                "isAllDay": false,
                                "iCalendar" : "iCal string",
                                "addToGoogleCalendar": "string"
                            }
                        },
                        "location" : {
                            "displayName": "Mount Everest",
                            "geo" : {
                                "latitude": "27.9881",
                                "longitude": "86.9253"
                            },
                            "geometry" : {
                                "type": "Point",
                                "coordinates": [86.9253, 27.9881]
                            }
                        }
                    },
                    "to" : [
                        {
                            "id": "<kName>",
                            "g": false,
                            "i": false
                        }
                    ],
                    "ucdEdusMeta" : {
                        "labels" : ["~academic", "some-label"],
                        "startDate" : "date string",
                        "endDate" : "date string"
                    }
                }}
              }

          );

        }
      }

      return {
        getPhotos: function(callback, query) {
                var responsePromise = $http.get(baseURL + query);


                    responsePromise.success(function(response){
                      data = response.photos.photo;

                      renderData(data);

                      callback(activities);

                    });
        }
      }
    }
