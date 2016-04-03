angular.module("appModule").controller("userListCtrl",function($scope, UserService, $controller, translateService){
    angular.extend(this, $controller('mainCtrl', {$scope: $scope}));

    $scope.listUser = function(){
        UserService.query(
            function(data) {
                $scope.users = data.list;
                $scope.hasNextPage = data.hasNextPage;
                $scope.pageCount = data.pageCount;
                $scope.currentPage = data.currentPage;
            },
            function(response) {
                $scope.showMessageError(response.data);
            }
        );
    };

    $scope.trackerPage = function(){
        var array = [];
        console.info("pageCount: "+$scope.pageCount);
        console.info("currentPage: "+$scope.currentPage);

        var numTracker = 5;

        if($scope.currentPage > numTracker){
            array.push('...');
        }

        var start = $scope.currentPage - numTracker + 1;

        while(start < ($scope.currentPage + numTracker) && start <= $scope.pageCount){
            if(start > 0){
                array.push(start);
            }
            start++;
        }

        if(($scope.currentPage + numTracker) < $scope.pageCount){
            array.push('...');
        }
        return array;
    }

    //Remove User
    $scope.removeUser = function(user){
        $scope.confirmPopup(translateService.translate('generic.deleteConfirmation', [user.name]),
            function(confirmed) {
                if(confirmed){
                UserService.remove({id: user.id}, function(){
                    $scope.listUser();
                    $scope.showMessageSuccess(translateService.translate('generic.deleted'));
                },function(response){
                    $scope.showMessageError(response.data);
                });}
            }
        );
    }

    $scope.listUser();
});