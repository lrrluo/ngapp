'use strict';

angular.module('ngappApp')
  .controller('ClothesCtrl', function ($scope) {

        $scope.weeks = getWeeks(5,31);

        function getWeeks(firstDay,totalDays){ //firstDay:0-6 0 for sunday,1 for monday... total: the days of the month
            var i,
                weeks,left,midWeek,leftDay;
            weeks = [];
            weeks[0] = new Array(7);
            for(i = 0; i<7;i++){
                if(i<firstDay){
                    weeks[0][i] = 0;
                }
                else{
                    weeks[0][i] = 1;
                }
            }

            left = totalDays - (7 -firstDay);
            midWeek = Math.floor(left/7);
            leftDay = left%7;

            for(i = 0; i < midWeek ; i++ ){
               weeks[i+1] = [1,1,1,1,1,1,1];
            }
            if(leftDay !== 0){
                weeks[midWeek+1] = new Array(leftDay);
                for(i = 0;i < leftDay;i++ ){
                    weeks[midWeek+1][i] = 1;
                }
            }
            //console.log(weeks);
            return weeks;


        }
  });















