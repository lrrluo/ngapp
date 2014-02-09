'use strict';

angular.module('ngappApp')
  .service('Localstorage', function Localstorage($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
        this.getCities = function(callback){
            var cities = localStorage.getItem('cities');
            if (cities){
                callback(cities.split(','));
            }
            else{
                $http.jsonp("http://localhost:3000/service/weather/cities?callback=JSON_CALLBACK")
                 .success(function(data,status,header){
                        localStorage.setItem('cities',data);
                        callback(data);
                 })
                 .error(function(){
                        console.log("error");
                        callback(['error','eroor']);
                 })
            }
        }
  });
