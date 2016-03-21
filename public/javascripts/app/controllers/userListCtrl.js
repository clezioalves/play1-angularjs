angular.module("appModule").controller("userListCtrl",function($scope, User, $location, users){
    $scope.users = users;

    //Remove User
    $scope.removeUser = function(user){
        User.remove({id: user.id}, function(){
            $scope.users = User.query();
        },function(error){
            console.info(error);
            //
        });
    }
});