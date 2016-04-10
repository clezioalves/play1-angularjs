angular.module("appModule").controller("userListCtrl",function($scope, UserFactory, $controller, translateService, $routeParams){
    angular.extend(this, $controller('mainCtrl', {$scope: $scope}));

    $scope.listUser = function(page){
        UserFactory.query(
            {page: page},
            function(data) {
                $scope.listPaginated = data.list;
                $scope.hasNextPage = data.hasNextPage;
                $scope.pageCount = data.pageCount;
                $scope.currentPage = data.currentPage;
            },
            function(response) {
                $scope.showMessageError(response.data);
            }
        );
    };

    //Remove User
    $scope.removeUser = function(user){
        $scope.confirmPopup(translateService.translate('generic.deleteConfirmation', [user.name]),
            function(confirmed) {
                if(confirmed){
                UserFactory.remove({id: user.id}, function(){
                    $scope.listUser($routeParams.page);
                    $scope.showMessageSuccess(translateService.translate('generic.deleted'));
                },function(response){
                    $scope.showMessageError(response.data);
                });}
            }
        );
    }

    $scope.listUser($routeParams.page);
});