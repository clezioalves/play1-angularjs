angular.module("appModule").controller("userListCtrl",function($scope, UserService, $controller, translateService){
    angular.extend(this, $controller('mainCtrl', {$scope: $scope}));
    UserService.query(
        function(data) {
            $scope.users = data.list;
            $scope.hasNextPage = data.hasNextPage;
            $scope.totalPages = data.totalPages;
            $scope.currentPage = data.currentPage;
        },
        function(response) {
            $scope.showMessageError(response.data);
        }
    );

    $scope.trackerPage = function(){
        var array = [];
        console.info("totalPages: "+$scope.totalPages);
        console.info("currentPage: "+$scope.currentPage);

        var numTracker = 3;

        if($scope.currentPage > numTracker){
            array.push('...');
        }

        var start = $scope.currentPage - numTracker + 1;

        while(start < $scope.currentPage + numTracker){
            if(start > 0){
                array.push(start);
            }
            start++;
        }

        if(($scope.currentPage + numTracker) < $scope.totalPages){
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
                    $scope.users = UserService.query();
                    $scope.showMessageSuccess(translateService.translate('generic.deleted'));
                },function(response){
                    $scope.showMessageError(response.data);
                });}
            }
        );
    }
});