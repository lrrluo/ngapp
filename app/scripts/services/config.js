'use strict';

angular.module('ngappApp')
  .service('config',function Config(serviceList) {
    // AngularJS will instantiate a singleton by calling "new" on this function
       // console.log(serviceList)
        var set = [];
        set.length = 0;

        function init(){
            if(set.length == 0){
                for(var i=0; i<9; i++) {
                    addSet(serviceList[i])
                }
            }
            return set;
        }
        function getSet() {
            return set;
        }

        function addSet(ser) {

            if(!set[ser]) {
                set[ser] = 1;
                set.length ++;
            }
            return set;
        }

        function subSet(ser) {
            if(set[ser]) {
                delete set[ser];
                set.length --;
            }

            return set;
        }

        return {
            init: init,
            list: getSet,
            add : addSet,
            delete : subSet
        };
  });
