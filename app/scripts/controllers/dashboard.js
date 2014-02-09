'use strict';

angular.module('ngappApp')
    .controller('DashboardCtrl',function ($scope, $location,config,serviceList,Groundset) {
        $scope.serList = config.init()
        console.log($scope.serList);
        Groundset.setSize(4);
        $scope.grouds = Groundset.array($scope.serList,serviceList);
    });
