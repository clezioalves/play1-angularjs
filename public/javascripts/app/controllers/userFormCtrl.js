angular.module("appModule").controller("userFormCtrl",function($scope, User, $location){
    $scope.addUser = function(user){
        User.save(user, function(){
            $location.path("/users");
        });
    };
});