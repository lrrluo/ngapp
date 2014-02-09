'use strict';

angular.module('ngappApp')
  .service('Groundset', function Groundset() {
    // AngularJS will instantiate a singleton by calling "new" on this function
            var size = 4;
            function groundNum(seleList){
                return Math.ceil(seleList.length/size);
            }

            function setSize(s){
                size = s;
            }

            function groundArray(seleList,allList){
                var ar = [];
                var all = false;
                if(!allList){
                    console.log('alllist is null')
                    all = true;
                    allList = seleList;
                }

                    var num = groundNum(seleList);
                    ar[0] = [];
                    for(var j= 0,i= 0,k = 0,tot = 0; j < allList.length; j++){
                        if(all || seleList[allList[j]]){
                            ar[i][k] = allList[j];
                            k++;
                            tot++;
                            if(!all && tot >= seleList.length){
                                break;
                            }
                            if(k == size){
                                ar[++i] = [];
                                k = 0;
                            }

                        }
                    }


                return ar;
            }
            return{
                setSize:setSize,
                num: groundNum,
                array: groundArray
            }

  });
