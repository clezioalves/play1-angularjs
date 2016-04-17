"use strict";

angular.module("appModule").filter("translate", ['translateService', function(translateService){
    return function(input,params){
        return translateService.translate(input,params);
    };
}]);

