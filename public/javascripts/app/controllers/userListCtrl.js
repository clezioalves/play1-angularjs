angular.module("appModule").controller("userListCtrl",function($scope, UserService, $controller, translateService){
    angular.extend(this, $controller('mainCtrl', {$scope: $scope}));
    UserService.query(
        function(users) {
            $scope.users = users;
        },
        function(response) {
            $scope.showMessageError(response.data);
        }
    );

    //Remove User
    $scope.removeUser = function(user){
        if(confirm(translateService.translate('generic.deleteConfirmation', [user.name]))){
            UserService.remove({id: user.id}, function(){
                $scope.users = UserService.query();
            },function(response){
                $scope.showMessageError(response.data);
            });
        }
    }

});