'use strict';

angular.module('ngappApp')
  .controller('SpliveCtrl', function ($scope,$http) {
    $scope.$emit('show',"体育赛事直播表")
        $scope.time = "";
        $scope.spList = [];
     $scope.getList = function(){
         $http.jsonp("http://localhost:3000/service/sportlive?callback=JSON_CALLBACK")
             .success(function(data,status,header){
                console.log(data);
                $scope.time = data.time;
                $scope.spList = data.content;})
             .error(function(){
                 console.log("error");
             })
     };
  });
