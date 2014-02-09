'use strict';

angular.module('ngappApp')
  .controller('RootCtrl', function ($scope,$location) {
        $scope.setLocation = function(target){
            $location.path(target);
         //   $scope.title = "Config your DashBoard";
          //  $scope.isShow = true;
        }
        $scope.back = function(){
            $location.path('/');
            $scope.isShow = false;
            $scope.title = "Easy Life";
        }

        $scope.title = "Easy Life";

        $scope.isShow = false;
        $scope.$on('show',function(e,title){
            $scope.title = title;
            $scope.isShow = true;
        })
  });
