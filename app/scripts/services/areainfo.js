'use strict';

angular.module('ngappApp')
  .service('Areainfo', function Areainfo(Localstorage) {
    // AngularJS will instantiate a singleton by calling "new" on this
        var that = this;
        var areainfo = {};
        //this.cities = {};
        this.getCities = getCities;

        function getCities(callback){
            Localstorage.getCities(function(data){
                that.cities = data;
                callback(data);
            });
        }
  });
