angular.module("appModule").controller("userListCtrl",function($scope, UserService, $timeout){

    UserService.query(
        function(users) {
            $scope.users = users;
            $scope.success = "Listado com sucesso";
            $timeout(function(){$scope.success = ""},4000);
        },
        function(response) {
            $scope.error = response.data;
        }
    );

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