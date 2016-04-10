angular.module("appModule").controller("userAddCtrl",function($scope, UserFactory, $controller, $location, flash, translateService){
    angular.extend(this, $controller('mainCtrl', {$scope: $scope}));
    $scope.saveUser = function(user){
        UserFactory.save(user, function(){
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