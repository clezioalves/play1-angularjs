angular.module("appModule").controller("mainCtrl",function($scope, $timeout, flash, $http, $cookies, $route, $cookies, translateService){
    $scope.flash = flash;
    //Message success
    $scope.showMessageSuccess = function(message){
        if (Object.prototype.toString.call(message) != '[object Array]') {
            $scope.successes = new Array(message);
        }else{
            $scope.successes = message;
        }

        $timeout(function(){$scope.successes = ""},5000);
    };
    //Message error
    $scope.showMessageError = function(message){

        if (Object.prototype.toString.call(message) != '[object Array]') {
            $scope.errors = new Array(message);
        }else{
            $scope.errors = message;
        }
        console.info($scope.errors);
        $timeout(function(){$scope.errors = ""},7000);
    };

    $scope.setLanguage = function(language){
        $http({
          method: 'GET',
          url: '/language/'+language
        }).then(function successCallback(response) {
            $scope.language = language;
            $route.reload();
        });
    };

    $scope.confirmPopup = function(message, callback){
        bootbox.confirm({
            size: 'small',
            title: translateService.translate('generic.Attention')+"!",
            message: message,
            buttons: {
                confirm: {
                  label: translateService.translate('generic.Confirm')
                },
                cancel: {
                  label: translateService.translate('generic.Cancel')
                }
            },
            callback: callback
        })
    }

    $scope.language = $cookies.get("myFavoriteLanguage");
});