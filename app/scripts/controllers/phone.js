'use strict';

angular.module('ngappApp')
  .controller('PhoneCtrl', function ($scope) {
    $scope.$emit('show',"手机归属地查询");
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
