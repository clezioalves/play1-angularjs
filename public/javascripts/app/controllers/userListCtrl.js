angular.module("appModule").controller("userListCtrl",function($scope, UserService, $location, users){
    $scope.users = users;
    //Remove User
    $scope.removeUser = function(user){
        if(confirm("Deseja excluir "+user.name+"?")){
            UserService.remove({id: user.id}, function(){
                $scope.users = UserService.query();
            },function(error){
                console.info(error);
                //
            });
        }
    }
});