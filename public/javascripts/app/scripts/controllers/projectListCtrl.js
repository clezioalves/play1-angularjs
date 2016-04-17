angular.module("appModule").controller("projectListCtrl",
    ['$scope', 'ProjectFactory', '$controller', 'translateService', '$routeParams',
    function($scope, ProjectFactory, $controller, translateService, $routeParams){
    angular.extend(this, $controller('mainCtrl', {$scope: $scope}));

    $scope.listProject = function(page){
        ProjectFactory.query(
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

    //Remove Project
    $scope.removeProject = function(project){
        $scope.confirmPopup(translateService.translate('generic.deleteConfirmation', [project.name]),
            function(confirmed) {
                if(confirmed){
                ProjectFactory.remove({id: project.id}, function(){
                    $scope.listProject($routeParams.page);
                    $scope.showMessageSuccess(translateService.translate('generic.deleted'));
                },function(response){
                    $scope.showMessageError(response.data);
                });}
            }
        );
    }

    $scope.listProject($routeParams.page);
}]);