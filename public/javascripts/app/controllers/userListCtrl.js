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
        $scope.confirmPopup(translateService.translate('generic.deleteConfirmation', [user.name]),
            function(confirmed) {
                if(confirmed){
                UserService.remove({id: user.id}, function(){
                    $scope.users = UserService.query();
                    $scope.showMessageSuccess(translateService.translate('generic.deleted'));
                },function(response){
                    $scope.showMessageError(response.data);
                });}
            }
        );
    }

});