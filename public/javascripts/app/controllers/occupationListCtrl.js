angular.module("appModule").controller("occupationListCtrl",function($scope, OccupationFactory, $controller, translateService, $routeParams){
    angular.extend(this, $controller('mainCtrl', {$scope: $scope}));

    $scope.listOccupation = function(page){
        OccupationFactory.query(
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

    //Remove Occupation
    $scope.removeOccupation = function(occupation){
        $scope.confirmPopup(translateService.translate('generic.deleteConfirmation', [occupation.name]),
            function(confirmed) {
                if(confirmed){
                OccupationFactory.remove({id: occupation.id}, function(){
                    $scope.listOccupation($routeParams.page);
                    $scope.showMessageSuccess(translateService.translate('generic.deleted'));
                },function(response){
                    $scope.showMessageError(response.data);
                });}
            }
        );
    }

    $scope.listOccupation($routeParams.page);
});