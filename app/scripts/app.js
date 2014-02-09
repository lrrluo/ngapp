'use strict';

angular.module('ngappApp', [
  'ngRoute'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashBoard.html',
        controller: 'DashboardCtrl'
      })
        .when('/main', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/setConfig', {
            templateUrl: 'views/setconfig.html',
            controller: 'SetconfigCtrl'
        })
        .when('/service/weather', {
            templateUrl: 'views/weather.html',
            controller: 'WeatherCtrl'
        })
        .when('/service/phoneNumber', {
            templateUrl: 'views/phonenumber.html',
            controller: 'PhoneCtrl'
        })
        .when('/service/TV', {
            templateUrl: 'views/tv.html',
            controller: 'TvCtrl'
        })
        .when('/service/IP', {
            templateUrl: 'views/ip.html',
            controller: 'IpCtrl'
        })
        .when('/service/sportLive', {
            templateUrl: 'views/splive.html',
            controller: 'SpliveCtrl'
        })
        .when('/service/gdbus', {
            templateUrl: 'views/gdbus.html',
            controller: 'GdbusCtrl'
        })

        .when('/service/clothes', {
            templateUrl: 'views/clothes.html',
            controller: 'ClothesCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  }]);
