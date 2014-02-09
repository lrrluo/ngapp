'use strict';

angular.module('ngappApp')
  .controller('GdbusCtrl', function ($scope,$http) {
        $scope.$emit('show',"广州实时公交查询");
        $scope.showBus = false;
        $scope.searchBus = function(bus){
            console.log(bus);
            $http.jsonp("http://localhost:3000/service/gdbus?callback=JSON_CALLBACK&bus="+bus).success(function(data,status,header){
                console.log(data);
                $scope.busRoute = data;
                $scope.showBus= true;
            }).error(function(){
                    console.log("error");
                })
        }
  });
