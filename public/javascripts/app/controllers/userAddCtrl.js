angular.module("appModule").controller("userAddCtrl",function($scope, UserService, $controller, $location, flash, translateService){
    angular.extend(this, $controller('mainCtrl', {$scope: $scope}));
    $scope.saveUser = function(user){
        UserService.save(user, function(){
                flash.setMessagesSuccess(translateService.translate('generic.saved'));
                $location.path("/users");
            },
            function(response) {
                $scope.showMessageError(response.data);
            }
        );
    };

    $scope.labelOperation = translateService.translate('generic.New',[translateService.translate('users.User')])
});