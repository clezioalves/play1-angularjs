angular.module("appModule").controller("userEditCtrl",function($scope, UserService, $location, user, $controller, flash, $cookies, translateService){
    angular.extend(this, $controller('mainCtrl', {$scope: $scope, flash: flash}));
    $scope.user = user;
    $scope.saveUser = function(user){
        UserService.update(user, function(){
                flash.setMessagesSuccess(translateService.translate('generic.saved'));
                $location.path("/users");
            },
            function(response) {
                $scope.showMessageError(response.data);
            }
        );
    };
    $scope.labelOperation = 'users.EditUser';
});