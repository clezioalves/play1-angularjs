angular.module("appModule").controller("userAddCtrl",function($scope, UserService, $controller, $location, flash, translateService){
    angular.extend(this, $controller('mainCtrl', {$scope: $scope}));
    $scope.saveUser = function(user){
        UserService.save(user, function(){
                flash.setMessagesSuccess(translateService.translate('generic.saved'));
                $location.path("/users");
            },
            function(response) {
                console.info(response.data);
                $scope.showMessageError(response.data);
            }
        );
    };
    $scope.labelOperation = 'users.NewUser';
});