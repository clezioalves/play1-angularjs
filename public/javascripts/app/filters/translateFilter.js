angular.module("appModule").filter("translate", function(translateService){
    return function(input,params){
        return translateService.translate(input,params);
    };
});

