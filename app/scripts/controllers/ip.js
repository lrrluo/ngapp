'use strict';

angular.module('ngappApp')
  .controller('IpCtrl', function ($scope) {
        $scope.$emit('show',"IP地址查询");
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
