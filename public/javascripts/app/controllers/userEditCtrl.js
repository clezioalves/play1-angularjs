angular.module("appModule").controller("userEditCtrl",function($scope, UserFactory, $location, user, $controller, flash, $cookies, translateService){
    angular.extend(this, $controller('mainCtrl', {$scope: $scope, flash: flash}));
    $scope.user = user;
    $scope.saveUser = function(user){
        UserFactory.update(user, function(){
                flash.setMessagesSuccess(translateService.translate('generic.saved'));
                $location.path("/users");
            },
            function(response) {
                $scope.showMessageError(response.data);
            }
        );
    };
    $scope.labelOperation = translateService.translate('generic.Edit',[translateService.translate('users.User')])
});