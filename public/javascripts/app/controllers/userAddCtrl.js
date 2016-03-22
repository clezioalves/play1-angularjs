angular.module("appModule").controller("userAddCtrl",function($scope, UserService, $location){
    $scope.saveUser = function(user){
        UserService.save(user, function(){
            $location.path("/users");
        });
    };
    $scope.nameOperation = 'Add';
});