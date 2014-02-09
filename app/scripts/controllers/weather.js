'use strict';

angular.module('ngappApp')
  .controller('WeatherCtrl', function ($scope,$http,Localstorage) {
        $scope.$emit('show',"天气查询");
        $scope.showWeather = false;
        getCities();


        $scope.searchWeather = function(city){
            console.log(city);
            $http.jsonp("http://localhost:3000/service/weather?callback=JSON_CALLBACK&city="+city).success(function(data,status,header){
                console.log(data);
                $scope.weather = data;
                $scope.showWeather = true;
            }).error(function(){
                    console.log("error");
                })
        }


        function getCities(){
            Localstorage.getCities(function(data){
                //console.log(Object.prototype.toString.call(data));
                $scope.cities = data.splice(10);
            });
        }
});
        //$http.jsonp("http://localhost:3000/service/gpsmap?callback=JSON_CALLBACK").success(function(data,status,header){
        //    console.log(data);
        //}).error(function(){
        //        console.log("error");
        //    })
////db.transaction(insertDB, errorCB, successCB);
////db.transaction(SelectDB, errorCB, successCB);
//
