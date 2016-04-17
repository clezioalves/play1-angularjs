angular.module("appModule").controller("mainCtrl",
    ['$scope', '$timeout', 'flash', '$http', '$cookies', 'translateService', 'genericConfig', '$location', 'Flash',
    function($scope, $timeout, flash, $http, $cookies, translateService, genericConfig, $location, Flash){
    $scope.flash = flash;
    //Message success
    $scope.showMessageSuccess = function(messages){
        if (Object.prototype.toString.call(messages) != '[object Array]') {
            messages = new Array(messages);
        }
        var listHtml = "<ul>";
        messages.forEach(function(msg){
            listHtml += "<li>" + msg + "</li>";
        });
        listHtml += "</ul>";
        Flash.create('success',
            '<strong> '+translateService.translate('generic.Done')+'! </strong>' +
            listHtml, genericConfig.timeSuccess);
    };

    //Message error
    $scope.showMessageError = function(messages){

        if (Object.prototype.toString.call(messages) != '[object Array]') {
            messages = new Array(messages);

        }
        var listHtml = "<ul>";
        messages.forEach(function(msg){

            listHtml += "<li>" + msg + "</li>";
        });
        listHtml += "</ul>";

        Flash.create('danger',
            '<strong> '+translateService.translate('generic.Oops')+'! </strong>' +
            listHtml, genericConfig.timeError);
    };

    $scope.setLanguage = function(language){
        $http({
          method: 'GET',
          url: '/language/'+language
        }).then(function successCallback(response) {
            $scope.language = language;
            location.reload();
        });
    };

    if(flash.getMessages()){
        if(flash.isInfo){
            $scope.showMessageSuccess(flash.getMessages());
        }else{
            $scope.showMessageError(flash.getMessages());
        }
    }

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
    };

    $scope.trackerPage = function(){
        var array = [];
        var numTracker = 5;
        var firstPage = $scope.currentPage - ((numTracker - 1) / 2);
        var lastPage = $scope.currentPage + ((numTracker - 1) / 2);

        if($scope.currentPage - 1 > ((numTracker - 1) / 2)){
            array.push('...');
        }

        if(firstPage <= 0){
            lastPage = lastPage + 1 - firstPage;
            firstPage = 1;
        }

        if(lastPage > $scope.pageCount){
            firstPage -= lastPage - $scope.pageCount;
            lastPage =  $scope.pageCount;
            if(firstPage <= 0){
                firstPage = 1;
            }
        }

        var page = firstPage;

        while(page <= lastPage){
            array.push(parseInt(page, 10));
            page++;
        }

        if(($scope.currentPage + (numTracker / 2)) <= $scope.pageCount){
            array.push('...');
        }
        return array;
    };

    $scope.setCurrencyPage = function(page){
        $location.search('page', page);
    };

    $scope.language = $cookies.get("myFavoriteLanguage");
}]);