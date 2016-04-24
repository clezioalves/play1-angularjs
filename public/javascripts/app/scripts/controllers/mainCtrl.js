angular.module("appModule").controller("mainCtrl",
    ['$scope', '$timeout', 'flash', '$http', '$cookies', 'translateService', 'genericConfig', '$location', 'Flash','utilService',
    function($scope, $timeout, flash, $http, $cookies, translateService, genericConfig, $location, Flash, utilService){
    var me = this;
    me.flash = flash;
    me.setLanguage = function(language){
        if(me.language != language){
            $http({
              method: 'GET',
              url: '/language/'+language
            }).then(function successCallback(response) {
                me.language = language;
                location.reload();
            });
        }
    };
    if(flash.getMessages()){
        if(flash.isInfo){
            utilService.showMessageSuccess(flash.getMessages());
        }else{
            utilService.showMessageError(flash.getMessages());
        }
    }
    me.trackerPage = utilService.trackerPage();

    me.setCurrencyPage = function(page){
        $location.search('page', page);
    };

    me.language = $cookies.get("myFavoriteLanguage");
}]);