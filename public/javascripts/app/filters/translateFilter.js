angular.module("appModule").filter("translate", function(translateService){
    return function(input){
        return translateService.translate(input);
    };
});

