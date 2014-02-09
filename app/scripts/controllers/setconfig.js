'use strict';

angular.module('ngappApp')
    .controller('SetconfigCtrl', function ($scope,config,serviceList,Groundset) {
        $scope.$emit('show',"Config your DashBoard");

        $scope.selected = config.list();
        $scope.list = serviceList;
        Groundset.setSize(4);
        $scope.grouds = Groundset.array($scope.list);
        // $scope.isCheck = true;

        $scope.isSelect = function(ser){
            return !!$scope.selected[ser];
        }

        $scope.pick = function(ser){
            if($scope.selected[ser]){
                $scope.selected = config.delete(ser);
              //   = config.list();
            }
            else{
                config.add(ser);
            }
            return !!$scope.selected[ser];
        }
    });
