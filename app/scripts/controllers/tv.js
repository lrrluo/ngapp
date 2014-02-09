'use strict';

angular.module('ngappApp')
  .controller('TvCtrl', function ($scope) {
        $scope.$emit('show',"电视节目查询");
        $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
