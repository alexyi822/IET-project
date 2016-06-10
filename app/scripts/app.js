(function(){ /*  add all in here  */  


    'use strict';

    /**
     * @ngdoc overview
     * @name aggieFeedActivitiesApp
     * @description
     * # aggieFeedActivitiesApp
     *
     * Main module of the application.

     */

    var dependencies = [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngMaterial'
      ];

    angular
      .module('aggieFeedActivitiesApp', dependencies )
      .config(Config);

      Config.$inject = ['$routeProvider'];

      function Config($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
          })
          .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
          })
          .otherwise({
            redirectTo: '/'
          });
      }

      
 })();