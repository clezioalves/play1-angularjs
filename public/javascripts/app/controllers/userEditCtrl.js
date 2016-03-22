angular.module("appModule").controller("userEditCtrl",function($scope, UserService, $location, user){
    $scope.user = user;
    $scope.saveUser = function(user){
        UserService.update(user, function(){
            $location.path("/users");
        });
    };
    $scope.nameOperation = 'Edit';
});